interface RankBadgeProps {
  title: string;
}

export default function RankBadge({ title }: RankBadgeProps) {
  return (
    <div
      style={{
        padding: "8px 18px",
        border: "1px solid rgba(255,255,255,.15)",
        borderRadius: "9999px",
        color: "white",
        fontSize: "13px",
        fontWeight: 600,
        letterSpacing: "3px",
        textTransform: "uppercase",
        background: "rgba(255,255,255,.05)",
      }}
    >
      {title}
    </div>
  );
}