"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Input from "@/components/ui/Input";
import PrimaryButton from "@/components/ui/PrimaryButton";
import OnboardingCard from "@/components/ui/OnboardingCard";

export default function NicknamePage() {
  const router = useRouter();

  const [nickname, setNickname] = useState("");

  return (
    <main className="min-h-screen bg-[#070B1A] flex items-center justify-center px-6">
      <OnboardingCard
        step="Step 1 of 3"
        title={
          <>
            Choose your
            <br />
            Ninja Name
          </>
        }
        description="Your journey begins with a name."
      >
        <Input
          label="Nickname"
          placeholder="Your ninja name..."
          value={nickname}
          onChange={setNickname}
        />

        <div className="mt-10">
          <PrimaryButton
            text="Next →"
            disabled={nickname.trim() === ""}
            onClick={() => router.push("/onboarding/birthdate")}
          />
        </div>
      </OnboardingCard>
    </main>
  );
}