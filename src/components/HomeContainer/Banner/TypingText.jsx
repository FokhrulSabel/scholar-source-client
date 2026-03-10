import { useState, useEffect } from "react";

const words = ["Future", "Excellence", "Opportunity", "Success"];

const TypingText = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const word = words[index];
    let i = 0;

    const interval = setInterval(() => {
      setText(word.slice(0, i));
      i++;

      if (i > word.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <span className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingText;
