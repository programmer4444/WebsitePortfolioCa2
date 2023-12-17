import { useState, useCallback } from 'react';


const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
  }, []);

  return { isCopied, copyToClipboard };
};

export default useClipboard;
