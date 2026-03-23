"use client";

import { useRouter } from "next/navigation";

export default function VerifyCTA() {
  const router = useRouter();

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,0,0,0.6)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(16,185,129,0.12),transparent_70%)]" />

        <div className="relative flex items-center justify-between gap-4 px-5 py-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Start trading
            </div>
            <div className="text-sm font-medium text-white">
              Get your challenge now
            </div>
          </div>

          <button
            onClick={() => router.push("/")}
            className="rounded-xl bg-emerald-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-emerald-300"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}