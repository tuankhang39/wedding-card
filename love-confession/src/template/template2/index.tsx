import { useEffect, useRef, useState } from "react";
import FadeImagesNoPosition from "../../components/intro/intro1";
import AOS from "aos";
import "aos/dist/aos.css";
import Parent from "../../components/parent/Parent1";
import Couple1 from "../../components/couple/couple1";
import Letter from "../../components/letter";
import Calendar from "../../components/calendar";
import config from "../../config/envConfig";
import CountdownTimer from "../../components/timer";
import Location from "../../components/location";
import { WeddingDetail } from "../../api/weddingApi";
import CongratsForm from "../../components/CongratsForm";
import ThanksLetter from "../../components/thanks";
import Parent2 from "../../components/parent/Parent2";
import Image1 from "../../components/img/img1";

const weddingImages = [
  `${config.BASE_PATH}template1/anhcuoi1.webp`,
  `${config.BASE_PATH}template1/anhcuoi2.webp`,
  `${config.BASE_PATH}template1/anhcuoi3.webp`,
  `${config.BASE_PATH}template1/anhcuoi4.webp`,
  `${config.BASE_PATH}template1/anhcuoi5.jpg`,
  `${config.BASE_PATH}template1/anhcuoi6.jpg`,
];

const Template2 = (props: WeddingDetail) => {
  const [show, setShow] = useState(true);
  const [shouldRender, setShouldRender] = useState(false); // Điều khiển DOM
  const [shouldRender1, setShouldRender1] = useState(false); // Điều khiển DOM
  const audioRef = useRef<HTMLAudioElement>(null);
  const {
    brideName,
    groomName,
    brideParents,
    groomParents,
    mapLink,
    location,
    theme: t,
    venue,
    organizationDay,
  } = props;
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  useEffect(() => {
    if (show) {
    } else {
      const timeout = setTimeout(() => setShouldRender(true), 1500);
      return () => clearTimeout(timeout);
    }
  }, [show]);
  const toggleContent = () => {
    handlePlay();
    setShow((prev) => !prev);
    setTimeout(() => {
      setShouldRender1(true);
    }, 3000);
  };

  const contentWrapperStyle = (translateX: string) => {
    return {
      transition: "all 1.5s",
      transform: show ? "translateX(0)" : `translateX(${translateX})`,
      left: show ? "1/2" : 0,
    };
  };
  const a = {
    transition: "all 1.5s",
    left: show ? "1/2" : 0,
  };

  const handlePlay = () => {
    audioRef.current?.play().catch((err) => {
      console.error("Play failed:", err);
    });
  };
  return (
    <div className="text-black font-roboto overflow-x-hidden relative bg-white">
      <audio
        ref={audioRef}
        src={`${config.BASE_PATH}/audio/causeiloveyou.mp3`}
        preload="auto"
      />
      {!shouldRender && (
        <div className="w-full h-[100vh]">
          <img
            style={a}
            src={`${config.BASE_PATH}template2/happyButton.png`}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20vw] max-w-none z-50"
            onClick={toggleContent}
          />
          <div className="flex absolute z-40 w-full">
            <img
              style={contentWrapperStyle("-100%")}
              src={`${config.BASE_PATH}template2/layout.jpg`}
              className="w-[50%] h-[100vh] object-cover object-left sm:w-full sm:object-center "
            />
            <img
              style={contentWrapperStyle("100%")}
              src={`${config.BASE_PATH}template2/layout.jpg`}
              className="w-[50%] h-[100vh] object-cover object-right sm:w-full sm:object-center"
            />
          </div>
        </div>
      )}
      {shouldRender && <FadeImagesNoPosition images={weddingImages} />}

      {shouldRender1 && (
        <div>
          <p
            className="my-[20px] font-bold text-[30px] font-ephesis"
            data-aos="fade-down"
          >
            Thiệp mời cưới
          </p>
          <Parent2 groomParent={groomParents} brideParent={brideParents} />
          <Image1 />
          <Couple1 brideName={brideName} groomName={groomName} />
          <div>
            <Letter targetDate={organizationDay!} />
            <div className="p-5 pt-0">
              <CountdownTimer targetDate={organizationDay!} />
              <Calendar
                targetDate={organizationDay!}
                dayClassName="bg-[#ff0080]"
              />
            </div>
          </div>
          <Location home={venue} address={location} src={mapLink} />
          <ThanksLetter
            name={brideName + " và " + groomName}
            className="bg-[rgba(0,0,0,0.5)] text-white"
          />
        </div>
      )}
    </div>
  );
};

export default Template2;
