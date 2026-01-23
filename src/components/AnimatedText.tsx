import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string[]; // Accepts array of strings
  className?: string;
  delay?: number; // Optional delay before animation starts (in ms)
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', delay = 0 }) => {
  const [selectedText, setSelectedText] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Pick one random title at first render
  useEffect(() => {
    const chosen = text[Math.floor(Math.random() * text.length)];
    setSelectedText(chosen);
    setDisplayedText('');
    setCurrentIndex(0);
  }, [text]);

  // Typing animation logic
  useEffect(() => {
    if (!selectedText) return;

    const timeout = setTimeout(() => {
      if (currentIndex < selectedText.length) {
        setDisplayedText(selectedText.slice(0, currentIndex + 1)); // ✅ Avoids duplication
        setCurrentIndex(prev => prev + 1);
      }
    }, 100); // typing speed

    return () => clearTimeout(timeout);
  }, [currentIndex, selectedText]);

  // Optional delay before typing starts
  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setCurrentIndex(0);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [delay]);

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      <span className="font-mono">{displayedText}</span>
      <motion.span
        className="ml-1 bg-space-500 w-0.5 h-6 inline-block"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default AnimatedText;
