"use client";

import { Mission } from "@/lib/missions";
import { KaizenUser } from "@/lib/storage";

import {
  gainUserXP,
  loseUserXP,
} from "@/game/progression";

import { completeMission } from "@/game/missions";

export function useProgression(
  user: KaizenUser,
  updateUser: (user: KaizenUser) => void
) {
  function gainXP(amount: number) {
    const updatedUser = gainUserXP(user, amount);

    updateUser(updatedUser);
  }

  function loseXP(amount: number) {
    const updatedUser = loseUserXP(user, amount);

    updateUser(updatedUser);
  }

  function complete(mission: Mission) {
    if (mission.progress === 100) {
      return;
    }

    const updatedUser = completeMission(user, mission);

    updateUser(updatedUser);
  }

  return {
    gainXP,
    loseXP,
    completeMission: complete,
  };
}