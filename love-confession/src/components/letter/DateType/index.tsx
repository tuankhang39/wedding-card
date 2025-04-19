interface DateTypeProps {
  month: number;
  day: number;
  year: number;
}
const DateType = (props: DateTypeProps) => {
  const { month, day, year } = props;
  return (
    <div className="flex items-center m-auto text-center justify-center font-lustria">
      <p className="pr-5 font-bold">Tháng {month}</p>
      <div className="text-[50px] border-x-2 px-5">
        <p className="text-[25px]">Ngày</p>
        {day}
      </div>
      <p className="pl-5 font-bold text-[25px]">{year}</p>
    </div>
  );
};

export default DateType;
