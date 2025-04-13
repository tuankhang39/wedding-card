import Snowfall from "../../components/iconFall";
import FlipBookFullScreen from "../../components/scrollByPointer";
import config from "../../config/envConfig";
import "./styles.scss";

const CoverLetter = () => {
  return (
    <div className="bg-[#00221a] w-full h-full font-ephesis border-[10px] relative">
      <Snowfall icon={`${config.BASE_PATH}template1/hoaanhdao.png`} />
      <div>
        <img
          src={`${config.BASE_PATH}template1/line.png`}
          className="w-full rounded-t-[40%] my-3"
        />
        <p className="text-[45px] mt-16 text-center">Thiệp Mời</p>

        <div className="m-5 relative mt-[70px]">
          <p className="text-left absolute left-[20px]">Minh Thư</p>
          <img
            src={`${config.BASE_PATH}template4/heard.png`}
            className="w-10 flex m-auto heart-container"
          />
          <p className="text-right absolute bottom-0 right-[20px]">Minh Nhựt</p>
        </div>
        <img
          src={`${config.BASE_PATH}template4/board.png`}
          className="w-[100px] flex m-auto"
        />
        <p className="text-center mt-16">Kính mời bạn</p>
        <p className="text-center mt-5 text-[11px]">{"Lướt sang nhé >>>"}</p>
      </div>
      <img
        src={`${config.BASE_PATH}template/viengoc1.png`}
        className="absolute bottom-0 left-0 w-[40%] rotate-90"
      />
    </div>
  );
};

const Template4 = () => {
  return (
    <div className="text-white font-roboto overflow-x-hidden relative bg-white">
      <FlipBookFullScreen cards={[<CoverLetter />, <CoverLetter />]} id={0} />
    </div>
  );
};

export default Template4;
