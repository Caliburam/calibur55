import MissionCard from "./MissionCard";
import { missions } from "@/lib/missions";

export default function MissionGrid() {
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        gap: "20px",
      }}
    >
      {missions.map((mission) => (
        <MissionCard
          key={mission.title}
          title={mission.title}
          xp={mission.xp}
          duration={mission.duration}
          progress={mission.progress}
        />
      ))}
    </div>
  );
}