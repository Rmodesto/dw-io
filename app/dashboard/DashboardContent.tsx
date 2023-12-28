'use client';
import React, { useState } from 'react';

const DashboardContent: React.FC = () => {
  const [dream, setDream] = useState<string>('');
  const [dreamsList, setDreamsList] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the default form submission behavior

    if (dream.trim()) {
      setDreamsList([...dreamsList, dream]); // Adds the new dream to the dreams list
      setDream(''); // Resets the dream input field
    }
  };

  return (
    <div className="w-4/5 p-4 bg-purple-100 rounded-lg flex flex-col h-screen">
      {/* Render the list of dreams as chat messages */}
      <div className="overflow-auto mb-4">
        {dreamsList.map((userDream, index) => (
          <div key={index} className="bg-white p-2 mb-2 rounded shadow">
            {userDream}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-auto relative">
        <textarea
          className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-aqua-400 focus:border-transparent"
          placeholder="Type your dream here..."
          value={dream}
          onChange={(e) => setDream(e.target.value)}
        />
        <button
          type="submit"
          className="absolute bottom-0 right-0 mb-2 mr-2 bg-aqua-100 text-white p-1 px-2 rounded hover:bg-blue-600 text-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DashboardContent;
