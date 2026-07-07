import AvatarPlaceholder from "./AvatarPlaceholder";
import RankBadge from "./RankBadge";
import SeasonInfo from "./SeasonInfo";

interface AvatarPanelProps {
  rankTitle: string;
  season: string;
  currentDay: number;
  totalDays: number;
}

export default function AvatarPanel({
  rankTitle,
  season,
  currentDay,
  totalDays,
}: AvatarPanelProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <AvatarPlaceholder />

      <RankBadge title={rankTitle} />

      <SeasonInfo
        season={season}
        currentDay={currentDay}
        totalDays={totalDays}
      />
    </div>
  );
}