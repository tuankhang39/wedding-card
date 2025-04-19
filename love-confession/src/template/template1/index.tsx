import { useEffect } from "react";

import IconTop from "../../components/iconTop";
import Parent from "../../components/parent/Parent1";
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
import { WeddingDetail } from "../../api/weddingApi";
import Footer from "../../components/footer";
import MusicPlayer from "../../components/audio";
import ThanksLetter from "../../components/thanks";
import CongratsForm from "../../components/CongratsForm";

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

export default function Template1(props: WeddingDetail) {
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
    images,
  } = props;
  const [image1, ...image2] = images || [];
  const templateTheme = theme[t as "gray" | "red"];
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div
      className=" text-white font-roboto overflow-x-hidden"
      style={{ background: templateTheme.background }}
    >
      <MusicPlayer />
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
        <Parent groomParent={groomParents} brideParent={brideParents} />
        <img
          src={`${config.BASE_PATH}/template1/line.png`}
          className="w-full rounded-t-[40%] my-3"
        />
        <Couple1 brideName={brideName} groomName={groomName} />
        <img
          data-aos="zoom-in"
          src={image1}
          className="w-full rounded-t-[40%] my-3"
        />
      </div>
      <div>
        <Letter targetDate={organizationDay!} />
        <div className="p-5 pt-0">
          <CountdownTimer targetDate={organizationDay!} />
          <Calendar targetDate={organizationDay!} />
        </div>
      </div>
      <Location address={location} src={mapLink} home={venue} />
      <CongratsForm />
      <Album1 weddingImages={image2} />
      <ThanksLetter name={brideName + " & " + groomName} />
      <Footer />
    </div>
  );
}
