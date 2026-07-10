import GreetingSection from "@/components/dashboard/GreetingSection";
import AvatarPanel from "@/components/avatar/AvatarPanel";
import StatsRow from "@/components/dashboard/StatsRow";
import MissionGrid from "@/components/dashboard/MissionGrid";
import TodaysMissions from "@/components/dashboard/Today'sMissions";
import CounterDemo from "@/components/demo/CounterDemo";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-10">

      <GreetingSection />
      <AvatarPanel
        rankTitle="Iron Disciple"
        season="Season I"
        currentDay={1}
        totalDays={144}
      />
      <StatsRow />
      <TodaysMissions />
      <CounterDemo />
    </main>
  );
}