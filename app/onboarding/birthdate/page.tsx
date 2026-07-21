"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { updateBirthday } from "@/lib/storage";

import OnboardingCard from "@/components/ui/OnboardingCard";
import DateSelect from "@/components/ui/DateSelect";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function BirthdatePage() {
  const router = useRouter();

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const isComplete =
    day !== "" &&
    month !== "" &&
    year !== "";

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#070B1A] px-6">
      <OnboardingCard
        currentStep={2}
        totalSteps={3}
        title={
          <>
            Choose your
            <br />
            Birth Date
          </>
        }
        description="Your birthday helps us celebrate you."
      >
        <DateSelect
          day={day}
          month={month}
          year={year}
          onDayChange={setDay}
          onMonthChange={setMonth}
          onYearChange={setYear}
        />

        <div className="mt-10">
          <PrimaryButton
            text="Next →"
            disabled={!isComplete}
            onClick={() => {
              updateBirthday({
                day: Number(day),
                month: Number(month),
                year: Number(year),
              });

              router.push("/onboarding/category");
            }}
          />
        </div>
      </OnboardingCard>
    </main>
  );
}