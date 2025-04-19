import { useEffect, useState } from "react";
import config from "../../config/envConfig";

const Loading = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <img
        src={`${config.BASE_PATH}template/thiep.gif`}
        className="w-[100px] m-auto mt-[50%]"
        alt=""
      />
      <p className="font-ephesis">Đang tải đợi 1 chút nhé{dots}</p>
    </div>
  );
};

export default Loading;
