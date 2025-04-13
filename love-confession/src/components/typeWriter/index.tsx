import { useEffect, useState } from "react";
import clsx from "clsx";

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
}

const Typewriter = ({ text, className = "", speed = 100 }: TypewriterProps) => {
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
    <p className={clsx("mx-10 font-ephesis", className)} data-aos="zoom-in">
      {displayedText}
    </p>
  );
};

export default Typewriter;
