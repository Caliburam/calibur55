interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({
  progress,
}: ProgressBarProps) {
  const safeProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div
      className="
        h-4
        w-full
        overflow-hidden
        rounded-full
        bg-slate-900
        border
        border-slate-700
      "
    >
      <div
        className="
          h-full
          rounded-full

          bg-gradient-to-r
          from-cyan-400
          via-sky-500
          to-blue-600

          transition-all
          duration-700
          ease-out

          shadow-lg
          shadow-cyan-500/30
        "
        style={{
          width: `${safeProgress}%`,
        }}
      />
    </div>
  );
}