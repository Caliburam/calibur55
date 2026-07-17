import MissionCard from "./MissionCard";
import { Mission } from "@/lib/missions";

interface MissionGridProps {
  missions: Mission[];
  onCompleteMission: (mission:Mission) => void;
}

export default function MissionGrid({
  missions,
  onCompleteMission,
}: MissionGridProps) {
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
          onComplete={() => onCompleteMission(mission)}
        />
      ))}
    </div>
  );
}