"use client";
import { useState } from "react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/PrimaryButton";

interface DailyRewardModalProps {
    onClaim: () => void;
}

export default function DailyRewardModal({
    onClaim,
}: DailyRewardModalProps) {
    const [claiming, setClaiming] = useState(false);
    return (
        <div
            className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/60
        backdrop-blur-md
        px-4
      "
        >
            <Card className="w-full max-w-md p-0 overflow-hidden">
                <div
                    className="
            relative
            flex
            flex-col
            items-center
            gap-6
            rounded-[32px]
            border
            border-sky-500/20
            bg-slate-900
            p-10
            shadow-[0_20px_80px_rgba(0,0,0,.45)]
          "
                >
                    {/* Gift */}

                    <div
                        className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              border
              border-sky-500/30
              bg-sky-500/10
              text-5xl
              animate-pulse
            "
                    >
                        🎁
                    </div>

                    <div className="text-center">

                        <p
                            className="
                text-sm
                font-bold
                uppercase
                tracking-[0.35em]
                text-sky-400
              "
                        >
                            Daily Reward
                        </p>

                        <h2
                            className="
                mt-4
                text-5xl
                font-extrabold
                leading-tight
                text-white
              "
                        >
                            Welcome Back,
                            <br />
                            Warrior
                        </h2>

                        <p
                            className="
                mt-5
                text-lg
                leading-8
                text-slate-400
              "
                        >
                            Every day you return,
                            <br />
                            you become harder to defeat.
                        </p>

                    </div>

                    {/* Reward */}

                    <div
                        className="
              w-full
              rounded-3xl
              border
              border-slate-700
              bg-slate-800
              p-8
              text-center
            "
                    >
                        <p
                            className="
                text-sm
                font-bold
                uppercase
                tracking-[0.3em]
                text-slate-400
              "
                        >
                            Today's Reward
                        </p>

                        <h3
                            className="
                mt-4
                text-6xl
                font-black
                text-cyan-400
              "
                        >
                            ✨ +50 XP
                        </h3>

                    </div>

                    {/* Button */}

                    <div
                        className="
              w-full
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:shadow-[0_0_30px_rgba(59,130,246,.45)]
            "
                    >
                        <Button
                            text={claiming ? "Claiming..." : "Claim Reward"}
                            disabled={claiming}
                            onClick={() => {
                                setClaiming(true);

                                setTimeout(() => {
                                    onClaim();
                                }, 2500);
                            }}

                        />
                    </div>

                    <p
                        className="
              text-xs
              text-slate-500
            "
                    >
                        Claim once per day.
                    </p>

                </div>
            </Card>
        </div>
    );
}