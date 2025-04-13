import Card from "../../components/card";
import config from "../../config/envConfig";

const template = [
  {
    src: "mau3.jfif",
    cardName: "Mẫu 1",
    link: "/template1",
  },
  {
    src: "mau1.jpg",
    cardName: "Mẫu 2",
    link: "/template2",
  },
  {
    src: "mau2.jfif",
    cardName: "Mẫu 3",
    link: "/template3",
  },
  {
    src: "mau1.jpg",
    cardName: "Mẫu 4",
    link: "/template4",
  },
  {
    src: "mau1.jpg",
    cardName: "Mẫu 5",
    link: "/template5",
  },
  {
    src: "mau1.jpg",
    cardName: "Mẫu 6",
    link: "/template6",
  },
];

const Home = () => {
  return (
    <div className="font-ephesis">
      <div className="relative">
        <img src={`${config.BASE_PATH}home.jpg`} />
        <p className="flex absolute rounded-2xl opacity-80 bottom-2 transform -translate-x-1/2 text-white bg-[#990000] p-3 left-1/2">
          Thiệp cưới online <br /> Tuấn Khang
        </p>
      </div>
      <div className="mx-5 mt-5">
        <div className="text-left text-[20px] font-bold mb-3">
          🌸 Các mẫu hot
        </div>
        <div className="grid grid-cols-3 gap-1 p-1">
          {template.map((t, i) => (
            <Card key={i} {...t} />
          ))}
        </div>
      </div>
      <div className="text-left pt-5 mx-5">
        <p className="text-[20px] font-bold mb-3">✨ Về Chúng Tôi</p>
        <p>
          Chúng tôi tin rằng mỗi lời yêu, mỗi lời mời cưới… đều xứng đáng được
          lưu giữ thật đẹp. Từ những câu chuyện tỏ tình vụng về, cho đến lời mời
          cưới dành cho người bạn thân đang ở nửa kia địa cầu – mọi khoảnh khắc
          đều đáng trân trọng. Và đó là lý do chúng tôi tạo nên nền tảng này:
          Một không gian nơi bạn có thể gửi thiệp tỏ tình, thiệp mời cưới
          online, với thiết kế tinh tế, âm nhạc ấm áp, và cảm xúc trọn vẹn.
        </p>
        <img
          className="my-5 w-full"
          src="https://tuart.net/wp-content/uploads/2024/08/454496822_8137646862960539_1741187069971390791_n.jpg"
        />
      </div>
    </div>
  );
};
export default Home;
