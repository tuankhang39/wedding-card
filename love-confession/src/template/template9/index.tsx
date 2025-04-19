import DateType2 from "../../components/letter/DateType2";
import config from "../../config/envConfig";

const Template9 = () => {
  return (
    <div className="bg-[#d5d1c6] h-[100vh] text-center">
      <p className="py-[40px] text-[25px] font-belleza">_THIỆP MỜI_</p>
      <img
        src={`${config.BASE_PATH}template8/chaucay.png`}
        className="w-[100px] m-auto"
      />
      <p className="font-ephesis text-[32px] py-5">Đông Nhi - Cao Thắng</p>
      <DateType2 />
      <p className="py-5 font-belleza">Trận trọng kính mời</p>
    </div>
  );
};

export default Template9;
