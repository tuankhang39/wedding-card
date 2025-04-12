import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../pages/layout";
import Home from "../pages/home";
import Template1 from "../template/template1";
import Template2 from "../template/template2";
import Template from "../template";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // layout chính có Header
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "template",
        element: <Template />,
      },
      {
        path: "/template1",
        element: <Template1 />,
      },
      {
        path: "/template2",
        element: <Template2 />,
      },
    ],
  },
]);

export default router;
