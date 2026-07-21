interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;

  selected: boolean;

  onClick: () => void;
}

export default function CategoryCard({
  title,
  description,
  icon,
  selected,
  onClick,
}: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        min-h-[180px]
        rounded-2xl
        border
        p-6
        text-left
        transition-all
        duration-300
        cursor-pointer

        ${
          selected
            ? "border-red-500 bg-slate-800 shadow-lg shadow-red-500/20"
            : "border-slate-700 bg-slate-900 hover:border-slate-500 hover:-translate-y-1"
        }
      `}
    >
      <div className="text-5xl">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>
    </button>
  );
}