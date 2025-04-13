import { useEffect, useState } from "react";

import IconTop from "../../components/iconTop";
import Parent from "../../components/parent";
import Location from "../../components/location";
import Album1 from "../../components/Album/album1";
import Letter from "../../components/letter";
import Couple1 from "../../components/couple/couple1";
import Calendar from "../../components/calendar";
import CountdownTimer from "../../components/timer";
import Snowfall from "../../components/iconFall";
import AOS from "aos";
import "aos/dist/aos.css";

import "./style.scss";
import config from "../../config/envConfig";

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

const theme = {
  gray: {
    background: "#514b45",
    fall: `${config.BASE_PATH}template1/lathong.png`,
    iconTop: `${config.BASE_PATH}/template1/Picture1.png`,
  },
  red: {
    background: "#7c212b",
    fall: `${config.BASE_PATH}template1/hoaanhdao.png`,
    iconTop: `${config.BASE_PATH}/template1/longden.gif`,
  },
};

export default function Template1() {
  const [templateTheme, setTemplateTheme] = useState(theme.red);
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  const changeTheme = (t: "gray" | "red") => {
    setTemplateTheme(theme[t]);
  };
  const target = "2025-04-30T10:00:00";
  return (
    <div
      className=" text-white font-roboto overflow-x-hidden"
      style={{ background: templateTheme.background }}
    >
      {/* <MusicPlayer /> */}
      <Snowfall icon={templateTheme.fall} />
      <IconTop img={templateTheme.iconTop} />
      <div className="mt-[-60px]">
        <p
          className="my-[20px] font-bold text-[30px] font-ephesis"
          data-aos="fade-down"
        >
          Thiệp mời cưới
        </p>
        <p className="mx-10 font-ephesis" data-aos="zoom-in">
          "Bất kỳ cuộc hôn nhân nào đều là một cuộc hành trình kỳ diệu, nơi mà
          hai người yêu nhau cùng nhau phát triển.""
        </p>
        <Parent {...data} />
        <img
          src={`${config.BASE_PATH}/template1/line.png`}
          className="w-full rounded-t-[40%] my-3"
        />
        <Couple1 brideName="Diệu Nhi" groomName="Anh Tú" />
        <img
          data-aos="zoom-in"
          src={`${config.BASE_PATH}template1/anhcuoi1.jpg`}
          className="w-full rounded-t-[40%] my-3"
        />
      </div>
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
      <div className="bottom-0 right-0 fixed">
        <div onClick={() => changeTheme("red")}>red</div>
        <div onClick={() => changeTheme("gray")}>gray</div>
      </div>
    </div>
  );
}
