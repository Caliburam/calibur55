"use client";

import { useRouter } from "next/navigation";

import OnboardingCard from "@/components/ui/OnboardingCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CompletePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#070B1A] flex items-center justify-center px-6">
      <OnboardingCard
        currentStep={3}
        totalSteps={3}
        title={
          <>
            Welcome,
            <br />
            Ninja.
          </>
        }
        description={
          <>
            Your journey begins now.
            <br />
            Small steps.
            <br />
            Big changes.
          </>
        }
      >
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

          <p className="text-sm text-slate-400">
            Remember...
          </p>

          <p className="mt-3 text-white leading-7">
            Every mission you complete brings you one step closer
            to becoming your best self.
          </p>

        </div>

        <div className="mt-10">
          <PrimaryButton
            text="Start your Kaizen Journey →"
            onClick={() => router.push("/")}
          />
        </div>

      </OnboardingCard>
    </main>
  );
}