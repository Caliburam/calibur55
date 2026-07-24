

interface DashboardHeroProps {
  nickname: string;
  level: number;
  xp: number;
  streak: number;
}

export default function DashboardHero({
  nickname,
  level,
  xp,
  streak,
}: DashboardHeroProps) {
  const hour = new Date().getHours();

  let greeting = "Welcome Back";

  if (hour >= 5 && hour < 12) {
    greeting = "🌅 Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "☀️ Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    greeting = "🌇 Good Evening";
  } else {
    greeting = "🌙 Good Night";
  }

  

  return (
    <section
      className="
        w-full
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        p-8
      "
    >
      <div className="flex items-center justify-between gap-8">

        {/* Left */}
        <div className="flex-1">

          <p className="text-sm text-slate-400">
            {greeting}
          </p>

          <h1
            className="
              mt-2
              text-4xl
              font-extrabold
              text-white
            "
          >
            {nickname || "Warrior"}
          </h1>

          <p
            className="
              mt-3
              font-semibold
              text-sky-400
            "
          >
            🥷 Iron Disciple
          </p>

          {/* XP Progress */}

          <div className="mt-6">

            <div
              className="
                h-4
                w-full
                overflow-hidden
                rounded-full
                border
                border-slate-700
                bg-slate-800
              "
            >
              <div
                className="
                  h-full
                  rounded-full

                  bg-gradient-to-r
                  from-cyan-400
                  via-sky-500
                  to-blue-600

                  transition-all
                  duration-700
                  ease-out

                  shadow-lg
                  shadow-cyan-500/30
                "
                style={{
                  width: `${Math.min((xp % 1000) / 10, 100)}%`,
                }}
              />
            </div>

            <div
              className="
                mt-2
                flex
                justify-between
                text-sm
                text-slate-400
              "
            >
              <span>{xp} XP</span>

              <span>Next Level</span>
            </div>

          </div>

        </div>

        {/* Avatar */}

        <div
          className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-slate-800
            text-5xl
          "
        >
          🥷
        </div>

      </div>

      {/* Bottom */}

      <div
        className="
          mt-8
          grid
          grid-cols-2
          gap-4
        "
      >

        <div
          className="
            rounded-2xl
            bg-slate-800
            p-4
          "
        >
          <p className="text-xs text-slate-400">
            Level
          </p>

          <p className="mt-1 text-2xl font-bold text-white">
            {level}
          </p>
        </div>

        <div
          className="
            rounded-2xl
            bg-slate-800
            p-4
          "
        >
          <p className="text-xs text-slate-400">
            Streak
          </p>

          <p className="mt-1 text-2xl font-bold text-orange-400">
            🔥 {streak}
          </p>
        </div>

      </div>

    </section>
  );
}