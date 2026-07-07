import GreetingSection from "@/components/dashboard/GreetingSection";
import AvatarPlaceholder from "@/components/avatar/AvatarPlaceholder";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-10">
      <GreetingSection />
      <AvatarPlaceholder />
    </main>
  );
}