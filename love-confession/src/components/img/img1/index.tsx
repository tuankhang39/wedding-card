import config from "../../../config/envConfig";

const Image1 = () => {
  return (
    <img
      className="p-5 w-[120px] m-auto"
      src={`${config.BASE_PATH}template/Picture3.png`}
    />
  );
};

export default Image1;
