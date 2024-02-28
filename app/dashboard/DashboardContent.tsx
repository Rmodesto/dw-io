'use client';
import { useState } from 'react';

function DashboardContent() {
  const [dream, setDream] = useState('');
  const [interpretation, setInterpretation] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchDreamInterpretation(dreamDescription: string) {
    setLoading(true);
    try {
      const response = await fetch('/api/interpretDream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dreamDescription }),
      });

      if (!response.ok) throw new Error('Failed to fetch interpretation');

      const data = await response.json();
      setInterpretation(data.interpretation);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to fetch interpretation');
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!dream.trim()) return;
    await fetchDreamInterpretation(dream);
    setDream(''); // Optionally reset the dream input after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={dream}
          onChange={(e) => setDream(e.target.value)}
          placeholder="Type your dream here..."
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Interpret Dream'}
        </button>
      </form>
      {error && <p>{error}</p>}
      {interpretation && <p>Interpretation: {interpretation}</p>}
    </div>
  );
}

export default DashboardContent;
