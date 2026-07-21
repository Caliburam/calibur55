"use client";

import GreetingSection from "@/components/dashboard/GreetingSection";
import AvatarPanel from "@/components/avatar/AvatarPanel";
import StatsRow from "@/components/dashboard/StatsRow";
import TodaysMissions from "@/components/dashboard/Today'sMissions";
import ActionPanel from "@/components/dashboard/ActionPanel";
import { useProgression } from "@/hooks/useProgression";
import { useUser } from "@/hooks/useUser";



export default function Home() {
  const {
    user,
    loading,
    updateUser,
  } = useUser();

  if (loading) return null;

  const currentUser = user!;
  const {
  gainXP,
  loseXP,
  completeMission,
} = useProgression(currentUser, updateUser);

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-10">

      <GreetingSection
        nickname={currentUser.profile.nickname}
      />

      <AvatarPanel
        rankTitle="Iron Disciple"
        season="Season I"
        currentDay={1}
        totalDays={144}
      />

      <StatsRow
        xp={currentUser.progression.xp}
        level={currentUser.progression.level}
      />

      <ActionPanel
        onGainXP={() => gainXP(50)}
        onLoseXP={() => loseXP(50)}
      />

      <TodaysMissions
        missions={currentUser.missions}
        onCompleteMission={completeMission}
      />

    </main>
  );
}