import { Routes, Route } from "react-router-dom";
import AppLayout from "../pages/layout";
import Home from "../pages/home";
import Template from "../template";
import Template1 from "../template/template1";
import Template2 from "../template/template2";
import Template3 from "../template/template3";
import Template4 from "../template/template4";
import Template5 from "../template/template5";
import Template6 from "../template/template6";
import Template7 from "../template/template7";
import Template8 from "../template/template8";
import Template9 from "../template/template9";
import CreateForm from "../pages/manager/createForm";
import WeddingCard from "../pages/wedding-card";
import { WeddingDetail } from "../api/weddingApi";
import config from "../config/envConfig";
import Template10 from "../template/template10";

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
    fatherName: "Nguyễn Văn Thành Đô",
    motherName: "Nguyễn Thị Hồng Nhung",
  },
  groomParents: {
    fatherName: "Lê Nguyễn Văn Quân",
    motherName: "Trần Lệ Thu Hiền",
  },
  organizationDay: tomorrow,
  venue: "Tư gia chúng tôi",
  invitationText: "Invitation Text",
  location: "Location",
  mapLink:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.856673772879!2d105.78448421476315!3d21.02851109314102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc123456789%3A0x123456789abcdef!2zSOG6o2kgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1sen!2s!4v1611234567890!5m2!1sen!2s",
  theme: "red",
  images: weddingImages,
};

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="template" element={<Template />} />
      </Route>
      <Route path="/template1" element={<Template1 {...data} />} />
      <Route path="/template2" element={<Template2 {...data} />} />
      <Route path="/template3" element={<Template3 {...data} />} />
      <Route path="/template4" element={<Template4 />} />
      <Route path="/template5" element={<Template5 />} />
      <Route path="/template6" element={<Template6 />} />
      <Route path="/template7" element={<Template7 />} />
      <Route path="/template8" element={<Template8 />} />
      <Route path="/template9" element={<Template9 />} />
      <Route path="/template10" element={<Template10 {...data} />} />
      <Route path="/add-wedding" element={<CreateForm />} />
      <Route path="/happy-wedding/:path" element={<WeddingCard />} />
    </Routes>
  );
};

export default Routers;
