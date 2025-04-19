import Typewriter from "../../typeWriter";

const Intro2 = ({ img1, img2 }: { img1: string; img2: string }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 m-5">
        <div>
          <img className="w-full" src={img1} />
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
          <img className="w-full" src={img2} />
        </div>
      </div>
    </div>
  );
};

export default Intro2;
