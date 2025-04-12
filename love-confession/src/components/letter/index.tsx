import DateType from "./DateType";

const Letter = () => {
  return (
    <div>
      <p
        className="text-[50px] font-ephesis w-fit m-auto px-5 border-t-2"
        data-aos="zoom-in"
      >
        Thư mời
      </p>
      <p className="uppercase text-[10px] mb-5" data-aos="zoom-in">
        Chúng tôi mời bạn tham dự lễ cưới của chúng tôi vào ngày
      </p>
      <DateType />
      <p className="my-5 font-lustria">Nhằm ngày 20 tháng 4 năm Ất Tỵ</p>
      <p
        className="text-[20px] border-t-[1px] border-b-[1px] w-fit m-auto font-lustria"
        data-aos="zoom-in"
      >
        Thứ 7 lúc 6:00PM
      </p>
    </div>
  );
};

export default Letter;
