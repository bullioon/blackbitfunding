"use client";

import BlackBitMark from "@/components/BlackBitMark";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-[#050505] text-white">
      {/* SIDEBAR */}
      <aside className="hidden w-[250px] border-r border-white/10 bg-[#060606] p-6 lg:block">
        <div className="flex items-center gap-3">
          <BlackBitMark className="h-10 w-10" />
          <div className="text-sm font-semibold tracking-[0.25em]">
            BLACKBIT
          </div>
        </div>

        <nav className="mt-12 space-y-4 text-sm">
          <div className="text-violet-400">Overview</div>

          <div className="cursor-pointer text-white/70 hover:text-white">
            Accounts
          </div>

          <div className="cursor-pointer text-white/70 hover:text-white">
            Positions
          </div>

          <div className="cursor-pointer text-white/70 hover:text-white">
            Execution
          </div>

          <div className="cursor-pointer text-white/70 hover:text-white">
            Wallet
          </div>

          <Link
            href="/certificate/"
            className="block text-white/70 hover:text-white"
          >
            Certificates
          </Link>

          <div className="cursor-pointer text-white/70 hover:text-white">
            Settings
          </div>
        </nav>
      </aside>

      {/* MAIN */}
      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-white/10 px-8 py-4">
          <div className="text-xs uppercase tracking-[0.3em] text-white/40">
            BlackBit Terminal
          </div>

          <div className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
            LIVE
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-8 py-10">
          {/* STATS */}
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["Balance", "$104,420"],
              ["Equity", "$107,210"],
              ["Floating PnL", "+$3,210"],
              ["Win Rate", "71%"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="text-[10px] uppercase tracking-[0.28em] text-white/40">
                  {label}
                </div>
                <div className="mt-2 text-2xl font-semibold">{value}</div>
              </div>
            ))}
          </div>

          {/* CERTIFICATE CTA */}
          <div className="mt-8">
            <Link
              href="/certificate"
              className="block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.05]"
            >
              <div className="text-xs uppercase tracking-[0.28em] text-white/35">
                Certificates
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                View Trading Certificate
              </div>
              <div className="mt-1 text-sm text-white/55">
                Open certificate builder and verification system
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}