export interface Mission {
  title: string;

  category: {
    name: string;
    icon: string;
  };

  xp: number;
  duration: number;
  progress: number;
}

export const missions: Mission[] = [
  {
    title: "Exercise",
    category: {
      name: "Fitness",
      icon: "🏋️",
    },
    xp: 150,
    duration: 45,
    progress: 0,
  },

  {
    title: "Spanish",
    category: {
      name: "Language",
      icon: "🇪🇸",
    },
    xp: 80,
    duration: 30,
    progress: 20,
  },

  {
    title: "AI Laboratory",
    category: {
      name: "Coding",
      icon: "💻",
    },
    xp: 250,
    duration: 90,
    progress: 60,
  },

  {
    title: "Reading",
    category: {
      name: "Mind",
      icon: "📖",
    },
    xp: 60,
    duration: 20,
    progress: 15,
  },

  {
    title: "Creator Studio",
    category: {
      name: "Creative",
      icon: "🎨",
    },
    xp: 200,
    duration: 75,
    progress: 0,
  },

  {
    title: "Recovery",
    category: {
      name: "Recovery",
      icon: "🛌",
    },
    xp: 40,
    duration: 15,
    progress: 100,
  },
];