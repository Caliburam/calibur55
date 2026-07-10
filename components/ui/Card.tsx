import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({
  children,
}: CardProps) {
  return (
    <div
      style={{
        background: "#1E293B",
        border: "1px solid rgba(255,255,255,.08)",
        borderRadius: "18px",
        padding: "24px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}