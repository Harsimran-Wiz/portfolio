import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string[];
  className?: string;
  speed?: number;
  delay?: number;
}

const TypingEffect = ({
  text,
  className = "",
  speed = 100,
  delay = 1000,
}: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    if (currentIndex <= text[currentTextIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text[currentTextIndex].substring(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % text.length);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentTextIndex, text, speed, delay]);

  return <div className={className}>{displayedText}</div>;
};

export default TypingEffect;
