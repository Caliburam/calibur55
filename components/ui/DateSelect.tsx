interface DateSelectProps {
  day: string;
  month: string;
  year: string;

  onDayChange: (value: string) => void;
  onMonthChange: (value: string) => void;
  onYearChange: (value: string) => void;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = Array.from(
  { length: new Date().getFullYear() - 1940 + 1 },
  (_, i) => String(new Date().getFullYear() - i)
);

export default function DateSelect({
  day,
  month,
  year,
  onDayChange,
  onMonthChange,
  onYearChange,
}: DateSelectProps) {
  return (
    <div className="space-y-3">

      <label className="block text-sm font-medium text-slate-300">
        Date of Birth
      </label>

      <div className="grid grid-cols-3 gap-3">

        {/* Day */}
        <select
          value={day}
          onChange={(e) => onDayChange(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-red-500"
        >
          <option value="">Day</option>

          {Array.from({ length: 31 }, (_, i) => (
            <option key={i + 1} value={String(i + 1)}>
              {i + 1}
            </option>
          ))}
        </select>

        {/* Month */}
        <select
          value={month}
          onChange={(e) => onMonthChange(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-red-500"
        >
          <option value="">Month</option>

          {months.map((m,index) => (
            <option
             key={m} 
             value={String(index + 1)}
             >
              {m}
            </option>
          ))}
        </select>

        {/* Year */}
        <select
          value={year}
          onChange={(e) => onYearChange(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-red-500"
        >
          <option value="">Year</option>

          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>

      </div>
    </div>
  );
}