import { useEffect, useState } from "react";
import FadeImagesNoPosition from "../../components/intro/intro1";
import AOS from "aos";
import "aos/dist/aos.css";
import Parent from "../../components/parent";
import Couple1 from "../../components/couple/couple1";
import Letter from "../../components/letter";
import Calendar from "../../components/calendar";
import config from "../../config/envConfig";

const weddingImages = [
  `${config.BASE_PATH}template1/anhcuoi1.webp`,
  `${config.BASE_PATH}template1/anhcuoi2.webp`,
  `${config.BASE_PATH}template1/anhcuoi3.webp`,
  `${config.BASE_PATH}template1/anhcuoi4.webp`,
  `${config.BASE_PATH}template1/anhcuoi5.jpg`,
  `${config.BASE_PATH}template1/anhcuoi6.webp`,
];

const data = {
  girlParent: {
    father: "Nguyễn Văn Thành",
    mother: "Nguyễn Thị Hồng Nhung",
  },
  boyParent: {
    father: "Trần Minh Quân",
    mother: "Trần Lệ Thu",
  },
};

const Template2 = () => {
  const [show, setShow] = useState(true);
  const [shouldRender, setShouldRender] = useState(false); // Điều khiển DOM
  const [shouldRender1, setShouldRender1] = useState(false); // Điều khiển DOM

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
    setShow((prev) => !prev);
    setTimeout(() => {
      setShouldRender1(true);
    }, 24500);
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

  return (
    <div className=" text-black font-roboto overflow-x-hidden relative">
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
          <Parent {...data} />
          <img
            src={`${config.BASE_PATH}template1/line.png`}
            className="w-full rounded-t-[40%] my-3"
          />
          <Couple1 brideName="Diệu Nhi" groomName="Anh Tú" />
          <div>
            <Letter />
            <div className="p-5 pt-0">
              {/* <CountdownTimer targetDate={target} /> */}
              <Calendar />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Template2;
