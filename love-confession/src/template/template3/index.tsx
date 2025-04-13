import { useEffect } from "react";
import Typewriter from "../../components/typeWriter";
import AOS from "aos";
import "aos/dist/aos.css";

const Template3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div className="text-black font-roboto overflow-x-hidden relative bg-white">
      <div className="h-[100vh]">
        <div className="grid grid-cols-2 gap-2 m-5">
          <div>
            <img
              className="w-full"
              src="https://tuart.net/wp-content/uploads/2024/08/454582265_8137642162961009_8518844859338484168_n.jpg"
            />
          </div>
          <div className="flex items-center">
            <Typewriter
              className="!mx-1"
              text="Hôn nhân không tìm người hoàn hảo, mà là cùng nhau hoàn thiện, yêu thương và bước tiếp qua mọi thăng trầm"
              speed={30}
            />
          </div>
        </div>
        <div>
          <p className="font-bold text-[40px] font-ephesis">Saved the day</p>
        </div>
        <div className="grid grid-cols-2 gap-2 m-5">
          <div className="flex items-center">
            <Typewriter
              className="!mx-1"
              text="Hôn nhân không phải là điểm đến, mà là hành trình tìm một người bạn đồng hành, học cách yêu và được yêu một cách trưởng thành."
              speed={30}
            />
          </div>
          <div>
            <img
              className="w-full"
              src="https://tuart.net/wp-content/uploads/2024/08/454582265_8137642162961009_8518844859338484168_n.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template3;
