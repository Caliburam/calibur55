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
      className="
      w-full
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      gap-5
    "
    >
      {missions.map((mission) => (
        <MissionCard
          key={mission.title}
          title={mission.title}
          category={mission.category}
          xp={mission.xp}
          duration={mission.duration}
          progress={mission.progress}
          onComplete={() => onCompleteMission(mission)}
        />
      ))}
    </div>
  );
}