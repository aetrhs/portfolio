import { useState, useEffect } from 'react';

function TypingEffect({ text, className = "", speed = 100, delay = 0 }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      // Reset after completion for perpetual effect
      const resetTimer = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
      }, 2000);

      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex, text, speed, isTyping]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default TypingEffect;