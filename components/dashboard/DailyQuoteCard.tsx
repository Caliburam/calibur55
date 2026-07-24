import Card from "@/components/ui/Card";

interface DailyQuoteCardProps {
  quote: string;
}

export default function DailyQuoteCard({
  quote,
}: DailyQuoteCardProps) {
  return (
    <Card>
      <div className="flex flex-col gap-6">

        {/* Header */}
        <div className="flex items-center gap-2">

          <span className="text-xl">
            📜
          </span>

          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-slate-400
            "
          >
            Daily Wisdom
          </span>

        </div>

        {/* Quote */}
        <blockquote
          className="
            max-w-3xl
            text-2xl
            italic
            leading-10
            text-slate-100
          "
        >
          "{quote}"
        </blockquote>

        {/* Author */}
        <span
          className="
            text-sm
            font-medium
            text-slate-500
          "
        >
          — Kaizen Wisdom
        </span>

      </div>
    </Card>
  );
}