import AuthButton from "@/components/auth/AuthButton";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="w-[420px] rounded-2xl bg-slate-900 p-10 shadow-2xl">

        <h1 className="text-4xl font-extrabold text-white">
          CALIBUR 55
        </h1>

        <p className="mt-2 mb-10 text-slate-200">
          Become 1% Better Every Day
        </p>

        <AuthButton
          text="Continue with Google"
          variant="google"
        />

        <div className="h-4" />

        <AuthButton
          text="Continue with Email"
          variant="email"
        />

      </div>
    </main>
  );
}