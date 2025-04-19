import config from "../../../config/envConfig";

const Image2 = () => {
  return (
    <img
      src={`${config.BASE_PATH}template1/line.png`}
      className="w-full rounded-t-[40%] my-3"
    />
  );
};

export default Image2;
