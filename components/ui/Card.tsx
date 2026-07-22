import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({
  children,
}: CardProps) {
  return (
    <div
      className="
        group
        w-full
        box-border
        rounded-3xl
        border
        border-white/10
        bg-slate-800
        p-6

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1
        hover:scale-[1.015]
        hover:border-blue-500/40
        hover:shadow-2xl
        hover:shadow-blue-500/10
      "
    >
      {children}
    </div>
  );
}