import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MusicPlayer from "../../components/audio";
import Parent from "../../components/parent/Parent1";
import config from "../../config/envConfig";
import Couple1 from "../../components/couple/couple1";
import Letter from "../../components/letter";
import Calendar from "../../components/calendar";
import CountdownTimer from "../../components/timer";
import Location from "../../components/location";
import Album1 from "../../components/Album/album1";
import { WeddingDetail } from "../../api/weddingApi";
import CongratsForm from "../../components/CongratsForm";
import Album2 from "../../components/Album/album2";
import Intro3 from "../../components/intro/intro3";

const weddingImages = [
  `${config.BASE_PATH}template1/anhcuoi1.webp`,
  `${config.BASE_PATH}template1/anhcuoi1.webp`,
  `${config.BASE_PATH}template1/anhcuoi2.webp`,
  `${config.BASE_PATH}template1/anhcuoi3.webp`,
  `${config.BASE_PATH}template1/anhcuoi4.webp`,
  `${config.BASE_PATH}template1/anhcuoi5.jpg`,
  `${config.BASE_PATH}template1/anhcuoi6.jpg`,
];

const Template10 = (props: WeddingDetail) => {
  const {
    brideName,
    groomName,
    brideParents,
    groomParents,
    mapLink,
    location,
    venue,
    organizationDay,
  } = props;
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div className="text-black font-roboto overflow-x-hidden relative bg-white">
      <MusicPlayer />
      <Intro3 />
      <div>
        <p
          className="my-[20px] font-bold text-[30px] font-ephesis"
          data-aos="fade-down"
        >
          Thiệp mời cưới
        </p>
        <Parent groomParent={groomParents} brideParent={brideParents} />
        <img
          src={`${config.BASE_PATH}template1/line.png`}
          className="w-full rounded-t-[40%] my-3"
        />
        <Album2 weddingImages={weddingImages} />
        <Couple1 brideName={brideName} groomName={groomName} />
        <div>
          <Letter targetDate={organizationDay!} />
          <div className="p-5 pt-0">
            <CountdownTimer targetDate={organizationDay!} />
            <Calendar targetDate={organizationDay!} />
          </div>
        </div>
        <Location src={mapLink} address={location} home={venue} />
        <CongratsForm />
        <Album1 weddingImages={weddingImages} />
      </div>
    </div>
  );
};

export default Template10;
