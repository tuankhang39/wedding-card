import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Template1 from "./template1";
import Template2 from "./template2";
import Template3 from "./template3";
import Template4 from "./template4";
import Template5 from "./template5";
import Template6 from "./template6";
import Template7 from "./template7";
import Template8 from "./template8";
import Template9 from "./template9";
import Template10 from "./template10";
import Loading from "../components/loading";
import config from "../config/envConfig";
import { WeddingDetail } from "../api/weddingApi";

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const weddingImages = [
  `${config.BASE_PATH}template1/anhcuoi1.webp`,
  `${config.BASE_PATH}template1/anhcuoi1.webp`,
  `${config.BASE_PATH}template1/anhcuoi2.webp`,
  `${config.BASE_PATH}template1/anhcuoi3.webp`,
  `${config.BASE_PATH}template1/anhcuoi4.webp`,
  `${config.BASE_PATH}template1/anhcuoi5.jpg`,
  `${config.BASE_PATH}template1/anhcuoi6.jpg`,
];
const data: WeddingDetail = {
  brideName: "Diệu Nhi",
  groomName: "Anh Tú",
  path: "path",
  template: "template1",
  brideParents: {
    fatherName: "Nguyễn Văn Thành",
    motherName: "Nguyễn Thị Hồng",
  },
  groomParents: {
    fatherName: "Lê Nguyễn Quân",
    motherName: "Trần Thu Hiền",
  },
  organizationDay: tomorrow,
  venue: "Tư gia chúng tôi",
  invitationText: "Invitation Text",
  location: "418/8 Nguyễn Thái Sơn, Quận Gò vấp, Thành phố Hồ Chí Minh",
  mapLink:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.856673772879!2d105.78448421476315!3d21.02851109314102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc123456789%3A0x123456789abcdef!2zSOG6o2kgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1sen!2s!4v1611234567890!5m2!1sen!2s",
  theme: "red",
  images: weddingImages,
};

function preloadImages(urls: string[]): Promise<void> {
  return new Promise((resolve) => {
    let loaded = 0;
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loaded++;
        if (loaded === urls.length) {
          resolve();
        }
      };
      img.onerror = () => {
        loaded++; // vẫn tiếp tục nếu có lỗi
        if (loaded === urls.length) {
          resolve();
        }
      };
    });
  });
}

const WeddingCard = () => {
  const { path } = useParams();

  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    preloadImages(data.images ?? []).then(() => {
      setAllImagesLoaded(true);
    });
  }, [data.images]);
  if (!allImagesLoaded) return <Loading />;
  switch (path) {
    case "template1":
      return <Template1 {...data} />;
    case "template2":
      return <Template2 {...data} />;
    case "template3":
      return (
        <Template3
          {...{
            ...data,
            images: weddingImages.slice(1, weddingImages.length),
          }}
        />
      );
    case "template4":
      return <Template4 />;
    case "template5":
      return <Template5 />;
    case "template6":
      return <Template6 />;
    case "template7":
      return <Template7 />;
    case "template8":
      return <Template8 />;
    case "template9":
      return <Template9 />;
    case "template10":
      return <Template10 {...data} />;
  }
  return <div>Page not found!</div>;
};

export default WeddingCard;
