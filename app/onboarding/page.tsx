import PrimaryButton from "@/components/ui/PrimaryButton";

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-[#070B1A] flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-2xl">

        <div className="text-center">

          <div className="text-6xl mb-6">
            🥷
          </div>

          <h1 className="text-4xl font-black text-white">
            Your Journey Begins.
          </h1>

          <p className="mt-4 text-slate-400 leading-7">
            Every master was once a beginner.
          </p>

          <p className="mt-8 text-slate-300 leading-7">
            Calibur55 will guide you to become
            <br />
            1% better every single day.
          </p>

        </div>

        

      </div>
    </main>
  );
}