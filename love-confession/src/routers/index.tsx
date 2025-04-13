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

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="template" element={<Template />} />
      </Route>
      <Route path="/template1" element={<Template1 />} />
      <Route path="/template2" element={<Template2 />} />
      <Route path="/template3" element={<Template3 />} />
      <Route path="/template4" element={<Template4 />} />
      <Route path="/template5" element={<Template5 />} />
      <Route path="/template6" element={<Template6 />} />
    </Routes>
  );
};

export default Routers;
