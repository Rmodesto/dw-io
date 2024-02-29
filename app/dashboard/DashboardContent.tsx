'use client';
import React, { useState } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'client' | 'server';
  isLoading?: boolean; // Optional property to indicate if this is a loading message
}

const DashboardContent: React.FC = () => {
  const [dream, setDream] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchDreamInterpretation = async (dreamDescription: string) => {
    const tempId = crypto.randomUUID(); // Temporary ID for the loading state
    setLoading(true);

    // Append the user's query and a loading message for the interpretation at the end of the messages array
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: crypto.randomUUID(), text: dreamDescription, sender: 'client' },
      {
        id: tempId,
        text: 'Loading interpretation...',
        sender: 'server',
        isLoading: true,
      },
    ]);

    try {
      const response = await fetch('/api/interpretDream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dreamDescription }),
      });

      if (!response.ok) throw new Error('Failed to fetch interpretation');

      const data = await response.json();

      // Replace the loading message with the actual interpretation by updating the message with the tempId
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.id === tempId
            ? { ...message, text: data.interpretation, isLoading: false }
            : message
        )
      );
    } catch (e) {
      if (e instanceof Error) {
        console.error('Error:', e.message);
        // Update the loading message to show an error
        setMessages((prevMessages) =>
          prevMessages.map((message) =>
            message.id === tempId
              ? {
                  ...message,
                  text: 'Failed to fetch interpretation.',
                  isLoading: false,
                }
              : message
          )
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!dream.trim()) return;
    await fetchDreamInterpretation(dream);
    setDream('');
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-4 rounded shadow ${message.sender === 'client' ? 'bg-blue-100' : 'bg-green-100'} ${message.isLoading ? 'animate-pulse' : ''}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="mt-auto w-full p-4 bg-white border-t relative">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between"
        >
          <textarea
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500 shadow-sm resize-none"
            style={{ paddingRight: '5rem' }} // Make room for the button inside the textarea
            value={dream}
            onChange={(e) => setDream(e.target.value)}
            placeholder="Type your dream here..."
            rows={3}
          />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-4 bottom-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? '...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardContent;
