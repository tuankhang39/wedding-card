import clsx from "clsx";
import config from "../../config/envConfig";

const ThanksLetter = ({
  name,
  className = "bg-[#fff]",
}: {
  name: string;
  className?: string;
}) => {
  return (
    <div className={clsx("rounded-2xl m-5 text-black relative", className)}>
      <img
        src={`${config.BASE_PATH}template/chuong.gif`}
        className="absolute top-3 right-3 w-[40px]"
      />
      <p className="text-[40px] font-ephesis text-center">Lời cảm ơn</p>
      <p className="font-ephesis text-left px-5 font-bold">Gửi bạn của tôi,</p>
      <p className="font-ephesis text-left px-5">
        Chúng mình xin gửi lời cảm ơn chân thành đến bạn – người đã dành thời
        gian xem thiệp cưới này và cũng là người đã ở bên, đồng hành, sẻ chia
        cùng tụi mình trong suốt những năm tháng thanh xuân tươi đẹp.
        <br />
        Mỗi bước đi trong hành trình trưởng thành đều in dấu tình cảm, sự quan
        tâm và ủng hộ từ những người thân yêu như bạn. Dù ở gần hay xa, chỉ cần
        bạn nghĩ đến chúng mình với một nụ cười, đó đã là món quà vô giá rồi.
        Cảm ơn bạn vì đã là một phần trong tuổi trẻ của tụi mình.
        <br />
        Hy vọng sẽ có dịp gặp nhau, cùng nâng ly chúc mừng cho một khởi đầu mới
        đầy yêu thương ❤️
      </p>
      <p className="font-ephesis text-right p-5">{name}</p>
    </div>
  );
};

export default ThanksLetter;
