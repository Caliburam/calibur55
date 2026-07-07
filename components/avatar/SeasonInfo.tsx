interface SeasonInfoProps {
  season: string;
  currentDay: number;
  totalDays: number;
}

export default function SeasonInfo({
  season,
  currentDay,
  totalDays,
}: SeasonInfoProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
      }}
    >
      <div
        style={{
          color: "#E2E8F0",
          fontSize: "15px",
          fontWeight: 600,
          letterSpacing: "5px",
          textTransform: "uppercase",
        }}
      >
        {season}
      </div>

      <div
        style={{
          color: "#94A3B8",
          fontSize: "13px",
        }}
      >
        Day {currentDay} / {totalDays}
      </div>
    </div>
  );
}