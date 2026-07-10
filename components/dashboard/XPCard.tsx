import Card from "@/components/ui/Card";

interface XPCardProps {
  todayXP: number;
}

export default function XPCard({
  todayXP,
}: XPCardProps) {
  return (
    <Card>
      <div
        style={{
          fontSize: "14px",
          color: "#94A3B8",
          marginBottom: "8px",
        }}
      >
        Today's XP
      </div>

      <div
        style={{
          fontSize: "42px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        +{todayXP}
      </div>
    </Card>
  );
}