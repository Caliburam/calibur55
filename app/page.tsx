"use client";

import { useState } from "react";

import GreetingSection from "@/components/dashboard/GreetingSection";
import AvatarPanel from "@/components/avatar/AvatarPanel";
import StatsRow from "@/components/dashboard/StatsRow";
import TodaysMissions from "@/components/dashboard/Today'sMissions";
import ActionPanel from "@/components/dashboard/ActionPanel";

import { gainXP, loseXP } from "@/game/xp";
import { Mission, missions } from "@/lib/missions";

export default function Home() {
  const [xp, setXP] = useState(980);
  const [level, setLevel] = useState(7);
  const [missionList, setMissionList] = useState(missions);

  function handleGainXP(amount: number) {
    const result = gainXP(xp, level, amount);

    setXP(result.xp);
    setLevel(result.level);
  }

  function handleLoseXP(amount: number) {
    const result = loseXP(xp, level, amount);

    setXP(result.xp);
    setLevel(result.level);
  }

  function handleCompleteMission(mission: Mission) {
    // اگر قبلاً کامل شده، دوباره XP نده
    if (mission.progress === 100) {
      return;
    }

    const updatedMissions = missionList.map((m) => {
      if (m.title === mission.title) {
        const newProgress = m.progress + 20;
        if (newProgress >= 100) {
          return {
            ...m,
            progress: 100,
          };
        }

        return {
          ...m,
          progress : newProgress,

        };
      }

      return m;
    });

    setMissionList(updatedMissions);

    // جایزه XP
    handleGainXP(mission.xp);
  }

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-10">
      <GreetingSection />

      <AvatarPanel
        rankTitle="Iron Disciple"
        season="Season I"
        currentDay={1}
        totalDays={144}
      />

      <StatsRow
        xp={xp}
        level={level}
      />

      {/* دکمه‌های تست XP */}
      <ActionPanel
        onGainXP={() => handleGainXP(50)}
        onLoseXP={() => handleLoseXP(50)}
      />

      <TodaysMissions
        missions={missionList}
        onCompleteMission={handleCompleteMission}
      />
    </main>
  );
}