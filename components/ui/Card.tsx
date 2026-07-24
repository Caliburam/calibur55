import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        w-full
        rounded-3xl
        border
        border-slate-700
        bg-slate-800
        p-6
        transition-all
        duration-300
        hover:scale-[1.015]
        hover:border-sky-500/20
        ${className}
      `}
    >
      {children}
    </div>
  );
}