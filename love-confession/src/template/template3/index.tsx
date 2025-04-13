import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Intro2 from "../../components/intro/intro2";
import MusicPlayer from "../../components/audio";
import Parent from "../../components/parent";
import config from "../../config/envConfig";
import Couple1 from "../../components/couple/couple1";
import Letter from "../../components/letter";
import Calendar from "../../components/calendar";
import CountdownTimer from "../../components/timer";
import Location from "../../components/location";
import Album1 from "../../components/Album/album1";

const weddingImages = [
  `${config.BASE_PATH}template1/anhcuoi1.webp`,
  `${config.BASE_PATH}template1/anhcuoi2.webp`,
  `${config.BASE_PATH}template1/anhcuoi3.webp`,
  `${config.BASE_PATH}template1/anhcuoi4.webp`,
  `${config.BASE_PATH}template1/anhcuoi5.jpg`,
  `${config.BASE_PATH}template1/anhcuoi6.jpg`,
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
const target = "2025-04-30T10:00:00";

const Template3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div className="text-black font-roboto overflow-x-hidden relative bg-white">
      <MusicPlayer />
      <Intro2 />
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
            <CountdownTimer targetDate={target} />
            <Calendar />
          </div>
        </div>
        <Location
          address="123/12 Nguyen Van Linh Q1, Hồ Chí MInh"
          home="Tư gia chúng tôi"
        />
        <Album1 weddingImages={weddingImages} />
      </div>
    </div>
  );
};

export default Template3;
