import Card from "@/components/ui/Card";
import ProgressBar from "@/components/ui/ProgressBar";

interface LevelCardProps {
  level: number;
  currentXP: number;
  requiredXP: number;
}

export default function LevelCard({
  level,
  currentXP,
  requiredXP,
}: LevelCardProps) {
  return (
    <Card>

      <div
        style={{
          fontSize: "14px",
          color: "#94A3B8",
          marginBottom: "8px",
        }}
      >
        Current Level
      </div>

      <div
        style={{
          fontSize: "42px",
          fontWeight: "bold",
          color: "white",
          marginBottom: "18px",
        }}
      >
        {level}
      </div>

      <ProgressBar
        value={currentXP}
        max={requiredXP}
      />

      <div
        style={{
          marginTop: "10px",
          color: "#94A3B8",
          fontSize: "13px",
        }}
      >
        {currentXP} / {requiredXP} XP
      </div>

    </Card>
  );
}