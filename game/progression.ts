import { KaizenUser } from "@/lib/storage";
import { gainXP, loseXP } from "./xp";

/* ---------- Public API ---------- */

export function gainUserXP(
  user: KaizenUser,
  amount: number
): KaizenUser {
  return addXP(user, amount);
}

export function loseUserXP(
  user: KaizenUser,
  amount: number
): KaizenUser {
  return removeXP(user, amount);
}

/* ---------- Internal Engine ---------- */

function addXP(
  user: KaizenUser,
  amount: number
): KaizenUser {
  const result = gainXP(
    user.progression.xp,
    user.progression.level,
    amount
  );

  return {
    ...user,

    progression: {
      ...user.progression,

      xp: result.xp,
      level: result.level,
      todayXP: user.progression.todayXP + amount,
    },
  };
}

function removeXP(
  user: KaizenUser,
  amount: number
): KaizenUser {
  const result = loseXP(
    user.progression.xp,
    user.progression.level,
    amount
  );

  return {
    ...user,

    progression: {
      ...user.progression,

      xp: result.xp,
      level: result.level,
    },
  };
}