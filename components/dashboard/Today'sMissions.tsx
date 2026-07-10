import MissionGrid from "./MissionGrid";

export default function TodaysMissions() {
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

      <MissionGrid />
    </section>
  );
}