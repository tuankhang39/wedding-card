import config from "../../config/envConfig";

const Line1 = () => {
  return (
    <img
      src={`${config.BASE_PATH}template1/line.png`}
      className="w-full rounded-t-[40%] my-3"
    />
  );
};

export default Line1;
