import { useEffect, useState } from "react";

import "./style.scss";

export interface SnowfallProps {
  icon: string;
}

const Snowfall = (props: SnowfallProps) => {
  const { icon } = props;
  const [flakes, setFlakes] = useState([
    {
      id: Date.now(),
      left: 0,
      delay: 0,
      duration: 0,
      size: 0,
    },
  ]);

  useEffect(() => {
    const createFlake = () => {
      const id = Date.now();
      const left = Math.random() * window.innerWidth;
      const delay = 0;
      const duration = 8 + Math.random() * 5;
      const size = Math.random() * 1 + 1;

      const newFlake = { id, left, delay, duration, size };
      setFlakes((prev) => [...prev, newFlake]);

      setTimeout(() => {
        setFlakes((prev) => prev.filter((f) => f.id !== id));
      }, (delay + duration) * 1000);
    };

    const interval = setInterval(createFlake, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake-wrapper"
          style={{
            left: flake.left,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            width: `${flake.size}rem`,
            color: "#fff",
          }}
        >
          <img src={icon} />
        </div>
      ))}
    </>
  );
};

export default Snowfall;
