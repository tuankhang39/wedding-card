import { useEffect, useRef, useState } from "react";
import Typewriter from "../../typeWriter";
import config from "../../../config/envConfig";

interface FadeImagesNoPositionProps {
  images: string[];
}

const FadeImagesNoPosition = (props: FadeImagesNoPositionProps) => {
  const { images } = props;
  const [index, setIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 500);
    const stopTimeout = setTimeout(() => {
      clearInterval(interval);
      setIndex(1);
    }, 21000);

    return () => {
      clearInterval(interval);
      clearTimeout(stopTimeout);
    };
  }, [images.length]);
  return (
    <div>
      <audio
        ref={audioRef}
        src={`${config.BASE_PATH}/audio/causeiloveyou.mp3`}
        preload="auto"
        autoPlay
      />
      <p
        className="mt-[30px] font-bold text-[30px] font-ephesis"
        data-aos="fade-down"
      >
        Saved the day
      </p>
      <div className="p-5 w-full">
        <img src={images[index]} alt={`Ảnh ${index + 1}`} className="w-full" />
      </div>
      <Typewriter
        text="Bất kỳ cuộc hôn nhân nào đều là một cuộc hành trình kỳ diệu, nơi mà hai
        người yêu nhau cùng nhau phát triển"
        speed={50}
      />
    </div>
  );
};

export default FadeImagesNoPosition;
