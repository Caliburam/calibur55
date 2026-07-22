interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function PrimaryButton({
  text,
  onClick,
  disabled = false,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        w-full
        rounded-xl

        bg-blue-600

        py-4
        text-base
        font-bold
        text-white

        transition-all
        duration-300

        hover:bg-blue-500

        group-hover:bg-blue-500
        group-hover:shadow-lg
        group-hover:shadow-blue-500/30

        
        active:scale-[0.98]
        
        disabled:cursor-not-allowed
        disabled:bg-slate-700
        disabled:text-slate-400
        disabled:shadow-none
      "
    >
      {text}
    </button>
  );
}