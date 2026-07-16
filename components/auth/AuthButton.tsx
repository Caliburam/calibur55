import { FcGoogle } from "react-icons/fc";
import { HiOutlineEnvelope } from "react-icons/hi2";

interface AuthButtonProps {
  text: string;
  variant: "google" | "email";
}

export default function AuthButton({
  text,
  variant,
}: AuthButtonProps) {
  const variantClasses =
    variant === "google"
      ? "bg-white text-slate-900 border border-slate-200 hover:bg-slate-100"
      : "bg-blue-600 text-white hover:bg-blue-700";

  const icon =
    variant === "google" ? (
      <FcGoogle size={22} />
    ) : (
      <HiOutlineEnvelope size={22} />
    );

  return (
    <button
      className={`
        w-full
        p-4
        rounded-xl
        font-bold
        text-base
        shadow-lg
        text-slate-400
        transition-all
        duration-300
        cursor-pointer
        flex
        items-center
        justify-center
        gap-3
        ${variantClasses}
      `}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}