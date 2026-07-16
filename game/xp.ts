export interface XPResult {
    xp: number;
    level: number;
}

export function gainXP(
    xp: number,
    level: number,
    amount: number
): XPResult {

    const newXP = xp + amount;
    if (newXP >= 1000) {
        return {
            xp: newXP - 1000,
            level: level + 1,
        };
    }

    return {
        xp: newXP,
        level: level,
    };
}
export function loseXP(
  xp: number,
  level: number,
  amount: number
): XPResult {

  const newXP = xp - amount;

  if (newXP < 0) {
    return {
      xp: 0,
      level: level,
    };
  }

  return {
    xp: newXP,
    level: level,
  };

}
