import { useState, useEffect } from 'react';

const useTypeWriter = (text: string, delay = 100) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    let index = 0;

    const type = () => {
      setTypedText((prevText) => prevText + text.charAt(index));
      index++;

      if (index < text.length) {
        timeout = setTimeout(type, delay);
      }
    };

    timeout = setTimeout(type, delay);

    return () => clearTimeout(timeout as ReturnType<typeof setTimeout>);
  }, [text, delay]);

  return typedText;
};

export default useTypeWriter;