import dotenv from 'dotenv';
import OpenAI from 'openai';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY as string,
});

// Define interfaces to match the expected structure from OpenAI's API
interface MessageContentText {
  type: 'text';
  text: {
    value: string;
  };
}

// The content field is an array of MessageContentText
interface ThreadMessage {
  run_id: string;
  role: string;
  content: MessageContentText[];
}

// The function to handle the dream interpretation logic
export async function getDreamInterpretation(
  dreamDescription: string
): Promise<string> {
  try {
    const assistantId = 'asst_IvUOMLbV1Gv4BFYJn4wlvzZN';

    // Create a thread for the conversation
    const thread = await openai.beta.threads.create();

    // Add the user's dream description as a message in the thread
    await openai.beta.threads.messages.create(thread.id, {
      role: 'user',
      content: JSON.stringify([
        { type: 'text', text: { value: dreamDescription } },
      ]),
    });

    // Create a run using the specific Assistant ID
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistantId,
    });

    // Wait for the run to complete and check its status
    let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    while (runStatus.status !== 'completed') {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
      if (['failed', 'cancelled', 'expired'].includes(runStatus.status)) {
        throw new Error(
          `Run status is '${runStatus.status}'. Unable to complete the request.`
        );
      }
    }

    // Retrieve and display the Assistant's response
    const messages = await openai.beta.threads.messages.list(thread.id);
    const lastMessageForRun = messages.data
      .filter(
        (message: any) =>
          message.run_id === run.id && message.role === 'assistant'
      )
      .pop();

    if (lastMessageForRun && lastMessageForRun.content.length > 0) {
      // Assuming we're interested in the first piece of content
      const content = lastMessageForRun.content[0];
      if (content.type === 'text') {
        return content.text.value;
      }
    }
    throw new Error('No interpretation received from the assistant.');
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
