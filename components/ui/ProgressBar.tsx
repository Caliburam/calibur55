interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({
  progress,
}: ProgressBarProps) {
  const safeProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="w-full h-2 overflow-hidden rounded-full bg-slate-800">
      <div
        className="h-full rounded-full bg-blue-600 transition-all duration-500 ease-out"
        style={{
          width: `${safeProgress}%`,
        }}
      />
    </div>
  );
}