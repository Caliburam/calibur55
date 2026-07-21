import { KaizenUser } from "@/lib/storage";
import { Mission } from "@/lib/missions";

import { gainUserXP } from "./progression";

export function completeMission(
  user: KaizenUser,
  mission: Mission
): KaizenUser {

  // قبلاً کامل شده
  if (mission.progress >= 100) {
    return user;
  }

  const updatedMissions = user.missions.map((m) => {
    if (m.title !== mission.title) {
      return m;
    }

    return {
      ...m,
      progress: Math.min(m.progress + 20, 100),
    };
  });

  const updatedUser: KaizenUser = {
    ...user,
    missions: updatedMissions,
  };

  return gainUserXP(updatedUser, mission.xp);
}