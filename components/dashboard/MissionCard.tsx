import Card from "@/components/ui/Card";
import Button from "@/components/ui/PrimaryButton";
import ProgressBar from "@/components/ui/ProgressBar";

interface MissionCardProps {
  title: string;

  category: {
    name: string;
    icon: string;
  };

  xp: number;
  duration: number;
  progress: number;

  onComplete: () => void;
}

export default function MissionCard({
  title,
  category,
  xp,
  duration,
  progress,
  onComplete,
}: MissionCardProps) {
  let buttonText = "Start Mission";

  if (progress > 0) {
    buttonText = "Continue";
  }

  if (progress === 100) {
    buttonText = "Completed ✅";
  }

  return (
    <Card>
      <div className="flex flex-col gap-5">

        {/* Category */}
        <div>
          <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
            {category.icon} {category.name}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white leading-tight">
          {title}
        </h3>

        {/* XP + Duration */}
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-sky-400">
            +{xp} XP
          </span>

          <span className="flex items-center gap-1 text-slate-400">
            <span>⏱</span>
            <span>{duration} min</span>
          </span>
        </div>

        {/* Progress */}
        <div className="space-y-2">

          <div className="flex items-center gap-3">

            <div className="flex-1">
              <ProgressBar progress={progress} />
            </div>

            <span
              className="
        text-xs
        font-semibold
        text-slate-400
        w-10
        text-right
      "
            >
              {progress}%
            </span>

          </div>

        </div>

        {/* Button */}
        <Button
          text={buttonText}
          onClick={onComplete}
          disabled={progress === 100}
        />

      </div>
    </Card>
  );
}