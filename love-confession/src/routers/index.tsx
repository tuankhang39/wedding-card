import { Routes, Route } from "react-router-dom";
import AppLayout from "../pages/layout";
import Home from "../pages/home";
import Template from "../template";
import Template1 from "../template/template1";
import Template2 from "../template/template2";
import Template3 from "../template/template3";
import Template4 from "../template/template4";

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
    </Routes>
  );
};

export default Routers;
