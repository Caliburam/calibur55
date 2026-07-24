"use client";

import { useState } from "react";

import DashboardHero from "@/components/dashboard/DashboardHero";
import DailyQuoteCard from "@/components/dashboard/DailyQuoteCard";
import TodaysMissions from "@/components/dashboard/Today'sMissions";
import DailyRewardModal from "@/components/dashboard/DailyRewardModal";

import { quotes } from "@/data/quotes";

import { useProgression } from "@/hooks/useProgression";
import { useUser } from "@/hooks/useUser";

export default function Home() {
  const {
    user,
    loading,
    updateUser,
  } = useUser();
  const [showReward, setShowReward] = useState(true);

  if (loading || !user) return null;
  
  const currentUser = user;

  

  const dailyQuote =
    quotes[new Date().getDate() % quotes.length];

  const {
    gainXP,
    completeMission,
  } = useProgression(currentUser, updateUser);

  return (
    <main
      className="
        min-h-screen
        bg-slate-950
        px-6
        py-10
        flex
        flex-col
        items-center
      "
    >
      <div
        className="
          w-full
          max-w-5xl
          flex
          flex-col
          gap-8
        "
      >
        <DashboardHero
          nickname={currentUser.profile.nickname}
          level={currentUser.progression.level}
          xp={currentUser.progression.xp}
          streak={currentUser.progression.streak}
        />

        <DailyQuoteCard
          quote={dailyQuote}
        />

        <TodaysMissions
          missions={currentUser.missions}
          onCompleteMission={completeMission}
        />
      </div>

      {showReward && (
        <DailyRewardModal
          onClaim={() => {
            gainXP(50);
            setShowReward(false);
          }}
        />
      )}

    </main>
  );
}