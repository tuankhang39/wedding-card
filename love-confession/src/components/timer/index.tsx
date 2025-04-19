import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }: { targetDate: string | Date }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 1,
      hours: 1,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // clear khi unmount
  }, [targetDate]);

  return (
    <div className="text-center text-xl font-mono text-white-600 p-5">
      <div className="flex justify-center gap-4">
        <div>
          <div className="text-4xl font-bold">{timeLeft.days || 0}</div>
          <div>Ngày</div>
        </div>
        <div>
          <div className="text-4xl font-bold">{timeLeft.hours || 0}</div>
          <div>Giờ</div>
        </div>
        <div>
          <div className="text-4xl font-bold">{timeLeft.minutes || 0}</div>
          <div>Phút</div>
        </div>
        <div>
          <div className="text-4xl font-bold">{timeLeft.seconds || 0}</div>
          <div>Giây</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
