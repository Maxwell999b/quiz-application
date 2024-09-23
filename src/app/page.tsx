import Quiz from "@/components/quiz";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-60 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-zinc-400 to-slate-500 animate-moving-background z-0" />
      <div className="relative z-10">
        <Quiz />
      </div>
    </div>
  );
}
