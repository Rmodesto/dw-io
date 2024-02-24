import dotenv from 'dotenv';
import OpenAI from 'openai';
import * as readline from 'readline';
dotenv.config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface ThreadMessage {
  run_id: string;
  role: string;
  content: any;
}

interface MessageContentText {
  value: string;
}

// Type guard function
function isMessageContentText(content: any): content is MessageContentText {
  return 'value' in content;
}

async function askQuestion(question: string): Promise<string> {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer: string) => {
      resolve(answer);
    });
  });
}

async function main() {
  try {
    const assistantId = 'asst_IvUOMLbV1Gv4BFYJn4wlvzZN';
    console.log(`Hi, Tell me about your dream.`);

    const dreamDescription = await askQuestion('Describe your dream: ');

    // Create a thread for the conversation
    const thread = await openai.beta.threads.create();

    // Add the user's dream description as a message in the thread
    await openai.beta.threads.messages.create(thread.id, {
      role: 'user',
      content: dreamDescription,
    });

    // Create a run using the specific Assistant ID
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistantId,
    });
    console.log(`Run created with ID: ${run.id}`);

    // Wait for the run to complete and check its status
    let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    while (runStatus.status !== 'completed') {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
      if (['failed', 'cancelled', 'expired'].includes(runStatus.status)) {
        console.log(
          `Run status is '${runStatus.status}'. Unable to complete the request.`
        );
        break;
      }
    }

    // Retrieve and display the Assistant's response
    const messages = await openai.beta.threads.messages.list(thread.id);
    console.log(
      `All messages in the thread: ${JSON.stringify(messages.data, null, 2)}`
    );

    const lastMessageForRun = messages.data
      .filter(
        (message: any) =>
          message.run_id === run.id && message.role === 'assistant'
      )
      .pop();

    if (lastMessageForRun) {
      const content = lastMessageForRun.content;
      if (Array.isArray(content) && content.length > 0) {
        const lastContent = content[content.length - 1];
        if (isMessageContentText(lastContent)) {
          console.log(`Dream Interpretation: ${lastContent.value}\n`);
        } else {
          console.log('No interpretation received from the assistant.');
        }
      }
    }
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    rl.close();
  }
}

main();
