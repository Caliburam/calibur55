export interface Mission {
  title: string;
  xp: number;
  duration: number;
  progress: number;
}

export const missions: Mission[] = [
  {
    title: "Exercise",
    xp: 150,
    duration: 45,
    progress: 0,
  },

  {
    title: "Spanish",
    xp: 80,
    duration: 30,
    progress: 20,
  },

  {
    title: "AI Laboratory",
    xp: 250,
    duration: 90,
    progress: 60,
  },

  {
    title: "Reading",
    xp: 60,
    duration: 20,
    progress: 15,
  },

  {
    title: "Creator Studio",
    xp: 200,
    duration: 75,
    progress: 0,
  },

  {
    title: "Recovery",
    xp: 40,
    duration: 15,
    progress: 100,
  },
];