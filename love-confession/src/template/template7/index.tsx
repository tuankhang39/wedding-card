import config from "../../config/envConfig";

const Template7 = () => {
  return (
    <div className="bg-[#e7d8c3] h-[100vh] text-center">
      <div className="font-ephesis py-[40px] text-[25px]">
        Together with my family
      </div>
      <img
        src={`${config.BASE_PATH}template7/tim.png`}
        className="w-[100px] m-auto mb-[40px]"
      />
      <div className="flex items-center justify-center">
        <div className="relative w-full">
          <div className="relative w-[90vw]">
            <div>
              <img
                src={`${config.BASE_PATH}template7/vet.png`}
                className="w-full h-[100px]"
              />
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-ephesis text-[35px]">
                Minh Thư
              </p>
            </div>
          </div>
          <div className="relative w-full flex justify-end mt-[-10px]">
            <div className="w-[90vw]">
              <img
                src={`${config.BASE_PATH}template7/vet.png`}
                className="w-full h-[100px]"
              />
              <p className="absolute top-1/2 left-[60%] transform -translate-x-[60%] -translate-y-1/2 font-ephesis text-[35px]">
                Minh Nhật
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="font-bold text-[30px] font-ephesis" data-aos="fade-down">
        Thiệp mời cưới
      </div>
    </div>
  );
};

export default Template7;
