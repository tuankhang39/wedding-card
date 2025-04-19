import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Intro2 from "../../components/intro/intro2";
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
import Album2 from "../../components/Album/album2";
import ThanksLetter from "../../components/thanks";
import { Helmet } from "react-helmet";

const Template3 = (props: WeddingDetail) => {
  const {
    brideName,
    groomName,
    brideParents,
    groomParents,
    mapLink,
    location,
    venue,
    organizationDay,
    images = [],
  } = props;
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>
          {brideName}💍{groomName}
        </title>
      </Helmet>
      <div className="text-black font-roboto overflow-x-hidden relative bg-white">
        <MusicPlayer />
        <Intro2 img1={images[0]} img2={images[1]} />
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
          <Album2 weddingImages={images.slice(2, 5)} />
          <Couple1 brideName={brideName} groomName={groomName} />
          <div>
            <Letter targetDate={organizationDay!} />
            <div className="p-5 pt-0">
              <CountdownTimer targetDate={organizationDay!} />
              <Calendar
                targetDate={organizationDay!}
                calendarClassName="border border-gray"
                dayClassName="bg-[#ff0080]"
              />
            </div>
          </div>
          <Location src={mapLink} address={location} home={venue} />
          <Album1 weddingImages={images} />
          <ThanksLetter
            name={brideName + " & " + groomName}
            className="border border-gray"
          />
        </div>
      </div>
    </>
  );
};

export default Template3;
