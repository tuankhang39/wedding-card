import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
}

const Typewriter = ({ text, className = "", speed = 100 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");

  const displayedTextRef = useRef("");

  useEffect(() => {
    let index = 0;
    displayedTextRef.current = ""; // reset ref mỗi khi text thay đổi
    setDisplayedText(""); // reset state

    const interval = setInterval(() => {
      if (index < text.length) {
        displayedTextRef.current += text[index];
        setDisplayedText(displayedTextRef.current);
        index++;
      } else {
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
