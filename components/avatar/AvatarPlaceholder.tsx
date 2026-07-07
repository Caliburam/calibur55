console.log("Avatar Placeholder Loaded");
interface AvatarPlaceholderProps {
  initial?: string;
  size?: "sm" | "lg";
}

export default function AvatarPlaceholder({
  initial = "C",
  size = "lg",
}: AvatarPlaceholderProps) {
  const dimension = size === "lg" ? "180px" : "96px";

  return (
    <div
      style={{
        width: dimension,
        height: dimension,
        borderRadius: "9999px",
        background: "#334155",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: size === "lg" ? "48px" : "28px",
        fontWeight: "bold",
      }}
    >
      {initial}
    </div>
  );
}