import { Routes, Route } from "react-router-dom";
import AppLayout from "../pages/layout";
import Home from "../pages/home";
import Template from "../template";
import WeddingCard from "../pages/wedding-card";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="template" element={<Template />} /> */}
      </Route>
      <Route path="/template/:path" element={<Template />} />
      <Route path="/happy-wedding/:path" element={<WeddingCard />} />
    </Routes>
  );
};

export default Routers;
