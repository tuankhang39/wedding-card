import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
}

const Typewriter = ({ text, speed = 100 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + (text[index] || ""));
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="mx-10 font-ephesis" data-aos="zoom-in">
      {displayedText}
    </p>
  );
};

export default Typewriter;
