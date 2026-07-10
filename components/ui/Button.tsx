import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({
  children,
}: ButtonProps) {
  return (
    <button
      style={{
        background: "#2563EB",
        color: "white",
        border: "none",
        borderRadius: "12px",
        padding: "14px 28px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}