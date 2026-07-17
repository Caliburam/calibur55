export interface InputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
}: InputProps) {
  return (
    <label className="flex flex-col gap-2 w-full">
      <span className="text-sm font-semibold text-slate-300">
        {label}
      </span>

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          rounded-xl
          border
          border-slate-700
          bg-slate-900
          px-4
          py-4
          text-white
          placeholder:text-slate-500
          outline-none
          transition-all
          duration-300
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/20
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      />
    </label>
  );
}