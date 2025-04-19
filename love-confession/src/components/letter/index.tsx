import DateType from "./DateType";
import CalendarCalculator from "viet-lunar-calendar";

interface LetterProp {
  targetDate: string | Date;
}
const Letter = (props: LetterProp) => {
  const { targetDate } = props;
  const date = new Date(targetDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const week = date.getDay();
  const hour = date.getHours();
  const minute = date.getMinutes();

  const lunnarCalendar = new CalendarCalculator().getLunarDate(date);
  const lunarDate = lunnarCalendar.day;
  const lunarMonth = lunnarCalendar.month;
  const lunarYear = lunnarCalendar.yearStemBranch?.say;
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
      <DateType day={day} month={month} year={year} />
      <p className="my-5 font-lustria">
        Nhằm ngày {lunarDate} tháng {lunarMonth} năm {lunarYear}
      </p>
      <p
        className="text-[20px] border-t-[1px] border-b-[1px] w-fit m-auto font-lustria"
        data-aos="zoom-in"
      >
        Thứ {week} lúc {hour}: {minute} phút
      </p>
    </div>
  );
};

export default Letter;
