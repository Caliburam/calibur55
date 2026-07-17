import { ReactNode } from "react";
import ProgressBar from "./ProgressBar";

interface OnboardingCardProps {
  currentStep: number;
  totalSteps: number;
  title: ReactNode;
  description: ReactNode;
  children: ReactNode;
}

export default function OnboardingCard({
  currentStep,
  totalSteps,
  title,
  description,
  children,
}: OnboardingCardProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-2xl">

      <ProgressBar progress={progress} />

      <p className="mt-5 text-sm text-slate-400">
        Step {currentStep} of {totalSteps}
      </p>

      <h1 className="mt-4 text-4xl font-black leading-tight text-white">
        {title}
      </h1>

      <p className="mt-4 leading-7 text-slate-400">
        {description}
      </p>

      <div className="mt-10">
        {children}
      </div>

    </div>
  );
}