'use client';
// components/DashboardContent.tsx
import React, { useEffect, useState } from 'react';

const DashboardContent: React.FC = () => {
  const [dream, setDream] = useState<string>('');
  const [dreamsList, setDreamsList] = useState<string[]>([]);

  useEffect(() => {
    // Fetch dreams when the component mounts
    const fetchDreams = async () => {
      try {
        const response = await fetch('/api/dreams');
        if (response.ok) {
          const dreams: string[] = await response.json();
          setDreamsList(dreams);
        }
      } catch (error) {
        console.error('Error fetching dreams:', error);
      }
    };
    fetchDreams();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/dreams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dream }),
      });

      if (response.headers.get('content-type')?.includes('application/json')) {
        const data = await response.json();
        // handle your JSON data
        setDreamsList((prev) => [...prev, dream]);
        setDream('');
      } else {
        const text = await response.text();
        throw new Error('Failed to parse JSON: ' + text);
      }
    } catch (error) {
      console.error('Error submitting the dream:', error);
    }
  };

  return (
    <div className="w-4/5 p-4 bg-purple-100 flex flex-col h-screen">
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
          className="w-full p-2 border rounded-md"
          placeholder="Type your dream here..."
          value={dream}
          onChange={(e) => setDream(e.target.value)}
        />
        <button
          type="submit"
          className="absolute bottom-0 right-0 mb-2 mr-2 bg-blue-500 text-white p-1 px-2 rounded hover:bg-blue-600 text-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DashboardContent;
