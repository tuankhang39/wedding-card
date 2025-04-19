import config from "../../../config/envConfig";
import Couple2 from "../../couple/couple2";

import "./style.scss";
const Intro3 = () => {
  return (
    <div>
      <div className="relative w-full overflow-hidden">
        <img
          src={`${config.BASE_PATH}template1/anhcuoi1.jpg`}
          alt="Ảnh"
          className="w-full h-auto relative z-0"
        />
      </div>
      <div className="grid grid-cols-12 mt-[-80px] z-10 relative">
        <div className="col-span-4 pl-4">
          <div className="relative w-full aspect-[3/4]">
            <img
              className="w-full h-full object-cover pb-1 rounded-tr-[50%]"
              src="https://tuart.net/wp-content/uploads/2024/08/454756973_8137644389627453_430199620212241148_n.jpg"
            />
          </div>
          <div className="relative w-full aspect-[3/4]">
            <img
              className="w-full h-full object-cover pb-1"
              src="https://tuart.net/wp-content/uploads/2024/08/454756973_8137644389627453_430199620212241148_n.jpg"
            />
          </div>
          <div className="relative w-full aspect-[3/4]">
            <img
              className="w-full h-full object-cover pb-1"
              src="https://tuart.net/wp-content/uploads/2024/08/454756973_8137644389627453_430199620212241148_n.jpg"
            />
          </div>
        </div>
        <div className="flex col-span-8 items-">
          <Couple2 brideName="Huong Thanh" groomName="Thanh Nghia" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 m-5 text-black"></div>
    </div>
  );
};

export default Intro3;
