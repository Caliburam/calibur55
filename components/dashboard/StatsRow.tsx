import LevelCard from "./LevelCard";
import XPCard from "./XPCard";
import StreakCard from "./StreakCard";

interface StatsRowProps {
  xp: number;
  level: number;
}

export default function StatsRow({
  xp,
  level,
}: StatsRowProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        width: "100%",
      }}
    >
      <LevelCard
        level={level}
        currentXP={xp}
        requiredXP={1000}
      />

      <XPCard todayXP={180} />

      <StreakCard streak={12} />
    </div>
  );
}