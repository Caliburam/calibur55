import Card from "@/components/ui/Card";
import Button from "@/components/ui/PrimaryButton";
import ProgressBar from "@/components/ui/ProgressBar";

interface MissionCardProps {
  title: string;
  xp: number;
  duration: number;
  progress: number;
  onComplete: () => void;
}

export default function MissionCard({
  title,
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

      <div
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          color: "white",
          marginBottom: "8px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: "#94A3B8",
          marginBottom: "18px",
        }}
      >
        {duration} min
      </div>

      <div
        style={{
          color: "#38BDF8",
          fontWeight: "bold",
          fontSize: "20px",
          marginBottom: "18px",
        }}
      >
        +{xp} XP
      </div>

      <ProgressBar
        value={progress}
        max={100}
      />

      <div
        style={{
          marginTop: "10px",
          marginBottom: "20px",
          color: "#94A3B8",
        }}
      >
        {progress}% Complete
      </div>

      <Button
        onClick={onComplete}
        disabled={progress === 100}
      >
        {buttonText}
      </Button>

    </Card>
  );
}