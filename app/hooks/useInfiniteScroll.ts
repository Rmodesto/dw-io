import { useCallback, useState } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'client' | 'server';
}

const useInfiniteScroll = (startPageNumber = 1) => {
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(startPageNumber);
  const [messages, setMessages] = useState<Message[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMessages = useCallback(async (pageNum: number) => {
    setLoading(true);
    try {
      // Replace with your actual API call
      const response = await fetch(`/api/messages?page=${pageNum}`);
      if (!response.ok) throw new Error('Failed to fetch messages');

      const newMessages = await response.json();
      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
      setHasMore(newMessages.length > 0);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Call this function when you reach the bottom of the chat
  const loadMore = useCallback(() => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
    fetchMessages(pageNumber);
  }, [fetchMessages, pageNumber]);

  // Use this function to add new messages to the chat
  const addMessage = useCallback((message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  }, []);

  return { loading, messages, hasMore, loadMore, addMessage };
};

export default useInfiniteScroll;
