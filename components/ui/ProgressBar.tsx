interface ProgressBarProps {
  value: number;
  max: number;
}

export default function ProgressBar({
  value,
  max,
}: ProgressBarProps) {
  const percentage = (value / max) * 100;

  return (
    <div
      style={{
        width: "100%",
        height: "14px",
        background: "#1E293B",
        borderRadius: "9999px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${percentage}%`,
          height: "100%",
          background: "#2563EB",
        }}
      />
    </div>
  );
}