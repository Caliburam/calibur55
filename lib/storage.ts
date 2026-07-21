import { missions, Mission } from "@/lib/missions";

const STORAGE_KEY = "kaizen_user";

export interface Birthday {
  day: number;
  month: number;
  year: number;
}

export interface KaizenUser {
  profile: {
    nickname: string;
    birthday: Birthday | null;
    avatar: string | null;
    mentor: string | null;
  };

  progression: {
    xp: number;
    level: number;
    streak: number;
    todayXP: number;
  };

  preferences: {
    categories: string[];
  };

  missions: Mission[];

  createdAt: string;
}

/* ---------- Default User ---------- */

function createDefaultUser(): KaizenUser {
  return {
    profile: {
      nickname: "",
      birthday: null,
      avatar: null,
      mentor: null,
    },

    progression: {
      xp: 0,
      level: 1,
      streak: 0,
      todayXP: 0,
    },

    preferences: {
      categories: [],
    },

    missions: missions.map((mission) => ({
      ...mission,
    })),

    createdAt: new Date().toISOString(),
  };
}

/* ---------- Get User ---------- */

export function getUser(): KaizenUser {
  if (typeof window === "undefined") {
    return createDefaultUser();
  }

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return createDefaultUser();
  }

  try {
    return JSON.parse(data) as KaizenUser;
  } catch {
    return createDefaultUser();
  }
}

/* ---------- Save User ---------- */

export function saveUser(user: KaizenUser) {
  if (typeof window === "undefined") return;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

/* ---------- Update Nickname ---------- */

export function updateNickname(nickname: string) {
  const user = getUser();

  user.profile.nickname = nickname;

  saveUser(user);
}

/* ---------- Update Birthday ---------- */

export function updateBirthday(birthday: Birthday) {
  const user = getUser();

  user.profile.birthday = birthday;

  saveUser(user);
}

/* ---------- Update Categories ---------- */

export function updateCategories(categories: string[]) {
  const user = getUser();

  user.preferences.categories = categories;

  saveUser(user);
}

/* ---------- Progression ---------- */

export function addXP(amount: number) {
  const user = getUser();

  user.progression.xp += amount;

  saveUser(user);
}

export function setLevel(level: number) {
  const user = getUser();

  user.progression.level = level;

  saveUser(user);
}

export function setStreak(streak: number) {
  const user = getUser();

  user.progression.streak = streak;

  saveUser(user);
}

/* ---------- Profile ---------- */

export function setAvatar(avatar: string) {
  const user = getUser();

  user.profile.avatar = avatar;

  saveUser(user);
}

export function setMentor(mentor: string) {
  const user = getUser();

  user.profile.mentor = mentor;

  saveUser(user);
}

/* ---------- Reset ---------- */

export function clearUser() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(STORAGE_KEY);
}