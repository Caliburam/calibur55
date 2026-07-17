import Card from "@/components/ui/Card";
interface StatsRowProps {
  xp: number;
}

interface StreakCardProps {
  streak: number;
}

export default function StreakCard({
  streak,
}: StreakCardProps) {
  return (
    <Card>
      <div
        style={{
          fontSize: "14px",
          color: "#94A3B8",
          marginBottom: "8px",
        }}
      >
        Current Streak
      </div>

      <div
        style={{
          fontSize: "42px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        🔥 {streak} 
      </div>

      <div
        style={{
          marginTop: "10px",
          color: "#94A3B8",
          fontSize: "13px",
        }}
      >
        Days
      </div>
    </Card>
  );
}