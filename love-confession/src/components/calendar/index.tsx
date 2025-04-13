import clsx from "clsx";

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
  month?: number;
  year?: number;
  headerClassName?: string;
}

const Calendar = (props: CalendarProps) => {
  const { month = 4, year = 2025, headerClassName } = props;
  const days = getDaysInMonth(month, year);

  return (
    <div className="mx-auto p-4 bg-white rounded-2xl shadow-xl">
      <h2
        className={clsx(
          "text-center text-2xl font-bold text-gray-800 mb-4",
          headerClassName
        )}
      >
        Tháng {month + 1} - {year}
      </h2>

      <div className="grid grid-cols-7 gap-1 text-center font-semibold text-[#514b45] mb-2">
        {weekdays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-gray-700">
        {days.map((day, index) => (
          <div
            key={index}
            className={`h-10 flex items-center justify-center rounded-lg ${
              day
                ? "hover:bg-blue-100 cursor-pointer"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
