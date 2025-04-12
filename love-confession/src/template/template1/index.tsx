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

const weddingImages = [
  "anhcuoi1.webp",
  "anhcuoi2.webp",
  "anhcuoi3.webp",
  "anhcuoi4.webp",
  "anhcuoi5.jpg",
  "anhcuoi6.webp",
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
    fall: "lathong.png",
    iconTop: "/template1/Picture1.png",
  },
  red: {
    background: "#7c212b",
    fall: "hoaanhdao.png",
    iconTop: "/template1/longden.gif",
  },
};

export default function LoveConfessionPage() {
  const [templateTheme, setTemplateTheme] = useState(theme.gray);
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
          src="/template1/line.png"
          className="w-full rounded-t-[40%] my-3"
        />
        <Couple1 brideName="Diệu Nhi" groomName="Anh Tú" />
        <img
          data-aos="zoom-in"
          src="/template1/anhcuoi1.jpg"
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
