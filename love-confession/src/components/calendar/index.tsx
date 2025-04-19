import clsx from "clsx";
import config from "../../config/envConfig";

import "./styles.scss";

const weekdays = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

const getDaysInMonth = (month: number, year: number) => {
  const date = new Date(year, month, 1);
  const days = [];

  const firstDay = date.getDay(); // day of week 0 (Sun) - 6 (Sat)
  const totalDays = new Date(year, month + 1, 0).getDate(); // total days in month

  // Fill empty days before 1st
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Fill actual days
  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }

  return days;
};

interface CalendarProps {
  targetDate: string | Date;
  calendarClassName?: string;
  headerClassName?: string;
  dayClassName?: string;
}

const Calendar = (props: CalendarProps) => {
  const { targetDate, calendarClassName, headerClassName, dayClassName } =
    props;
  const date = new Date(targetDate);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const days = getDaysInMonth(month, year);

  return (
    <div
      className={clsx(
        "heart-wrapper mx-auto p-4 bg-white rounded-2xl shadow-xl",
        calendarClassName
      )}
    >
      <h2
        className={clsx(
          "text-center text-2xl font-bold text-gray-800 mb-4 !font-ephesis",
          headerClassName
        )}
      >
        Tháng {month + 1} - {year}
      </h2>

      <div
        className={clsx(
          "grid grid-cols-7 gap-1 text-center font-semibold text-[#514b45] mb-2"
        )}
      >
        {weekdays.map((day) => (
          <div className={clsx("px-1 rounded-lg", dayClassName)} key={day}>
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-gray-700">
        {days.map((d, index) => (
          <div
            key={index}
            className={`relative h-12 w-12 flex items-center justify-center rounded-lg`}
          >
            {d}
            {day === d && (
              <img
                className="absolute w-10 heart"
                src={`${config.BASE_PATH}template/heard.png`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
