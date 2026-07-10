import LevelCard from "./LevelCard";
import XPCard from "./XPCard";
import StreakCard from "./StreakCard";

export default function StatsRow() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        width: "100%",
      }}
    >
      <LevelCard
        level={7}
        currentXP={420}
        requiredXP={1000}
      />

      <XPCard
        todayXP={180}
      />

      <StreakCard
        streak={12}
      />
    </div>
  );
}