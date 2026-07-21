import { getTimeBasedGreeting } from "@/lib/greeting";

interface GreetingSectionProps {
  nickname: string;
}

export default function GreetingSection({
  nickname,
}: GreetingSectionProps) {
  const greeting = getTimeBasedGreeting();

  return (
    <section className="text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
        {greeting}
      </p>

      <h1 className="mt-2 text-5xl font-bold text-white">
        {nickname}
      </h1>
    </section>
  );
}