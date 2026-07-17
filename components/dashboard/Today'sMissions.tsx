import MissionGrid from "./MissionGrid";
import { Mission } from "@/lib/missions";

interface TodaysMissionsProps {
  missions: Mission[];
  onCompleteMission: (mission:Mission) => void;
}

export default function TodaysMissions({
  missions,
  onCompleteMission,
}: TodaysMissionsProps) {
  console.log("I AM THE NEW FILE");
  console.log(missions);
  return (
    <section
      style={{
        width: "100%",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          Today's Missions
        </div>

        <div
          style={{
            color: "#94A3B8",
            marginTop: "6px",
          }}
        >
          Complete every mission to earn XP.
        </div>
      </div>

      <MissionGrid
        missions={missions}
        onCompleteMission={onCompleteMission}
      />
    </section>
  );
}