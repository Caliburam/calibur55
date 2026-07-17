interface ActionPanelProps {
  onGainXP: () => void;
  onLoseXP: () => void;
}
export default function ActionPanel({
  onGainXP,
  onLoseXP,
}: ActionPanelProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "24px",
      }}
    >
      <button
        onClick={onGainXP}
        style={{
          padding: "12px 24px",
          background: "#0ed429",
          color: "black",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Gain 50 XP
      </button>
      <button
        onClick={onLoseXP}
        style={{
          padding: "12px 24px",
          background: "#DC2626",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Lose 50 XP
      </button>
    </div>
  );
}