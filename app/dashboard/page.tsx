"use client";

import BlackBitMark from "@/components/BlackBitMark";
import { useMemo, useState } from "react";

type CurvePoint = {
  x: number;
  y: number;
  label: string;
  value: string;
  pnl: string;
};

export default function DashboardPage() {
  const [curvePoint, setCurvePoint] = useState<CurvePoint | null>(null);

  const equityPoints: CurvePoint[] = useMemo(
    () => [
      { x: 4, y: 90, label: "Day 1", value: "$101,200", pnl: "+$200" },
      { x: 12, y: 84, label: "Day 4", value: "$102,000", pnl: "+$1,000" },
      { x: 20, y: 78, label: "Day 7", value: "$102,500", pnl: "+$1,500" },
      { x: 30, y: 72, label: "Day 10", value: "$103,000", pnl: "+$2,000" },
      { x: 42, y: 64, label: "Day 15", value: "$104,200", pnl: "+$3,200" },
      { x: 56, y: 54, label: "Day 20", value: "$105,200", pnl: "+$4,200" },
      { x: 70, y: 40, label: "Day 24", value: "$106,200", pnl: "+$5,200" },
      { x: 84, y: 24, label: "Day 28", value: "$106,900", pnl: "+$5,900" },
      { x: 96, y: 12, label: "Day 30", value: "$107,200", pnl: "+$6,200" },
    ],
    []
  );

  return (
    <main className="flex min-h-screen bg-[#050505] text-white">
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
          <a
            href="/certificate"
            className="block text-white/70 hover:text-white"
          >
            Certificates
          </a>
          <div className="cursor-pointer text-white/70 hover:text-white">
            Settings
          </div>
        </nav>
      </aside>

      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-white/10 px-8 py-4">
          <div className="text-xs uppercase tracking-[0.3em] text-white/40">
            BlackBit Terminal
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
              LIVE
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-8 py-10">
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

          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Equity Curve
                  </div>
                  <div className="mt-2 text-3xl font-semibold">
                    {curvePoint ? curvePoint.value : "$107,210"}
                  </div>
                </div>

                <div className="text-sm text-violet-300">
                  {curvePoint ? curvePoint.pnl : "+$6,200"}
                </div>
              </div>

              <div
                className="relative mt-6 h-[340px]"
                onMouseLeave={() => setCurvePoint(null)}
              >
                <div className="absolute inset-x-0 top-[20%] border-t border-white/5" />
                <div className="absolute inset-x-0 top-[40%] border-t border-white/5" />
                <div className="absolute inset-x-0 top-[60%] border-t border-white/5" />
                <div className="absolute inset-x-0 top-[80%] border-t border-white/5" />

                <div className="absolute inset-y-0 left-[20%] border-l border-white/5" />
                <div className="absolute inset-y-0 left-[40%] border-l border-white/5" />
                <div className="absolute inset-y-0 left-[60%] border-l border-white/5" />
                <div className="absolute inset-y-0 left-[80%] border-l border-white/5" />

                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full"
                >
                  <defs>
                    <linearGradient id="equityStroke" x1="0%" x2="100%">
                      <stop offset="0%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>

                    <linearGradient
                      id="equityFill"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="rgba(139,92,246,0.4)"
                      />
                      <stop
                        offset="100%"
                        stopColor="rgba(139,92,246,0.02)"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M4,90 L12,84 L20,78 L30,72 L42,64 L56,54 L70,40 L84,24 L96,12 L96,100 L4,100 Z"
                    fill="url(#equityFill)"
                  />

                  <path
                    d="M4,90 L12,84 L20,78 L30,72 L42,64 L56,54 L70,40 L84,24 L96,12"
                    fill="none"
                    stroke="url(#equityStroke)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>

                {equityPoints.map((point) => (
                  <button
                    key={point.label}
                    onMouseEnter={() => setCurvePoint(point)}
                    className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                    }}
                  />
                ))}

                {curvePoint && (
                  <>
                    <div
                      className="absolute bottom-0 top-0 w-px bg-violet-300/40"
                      style={{ left: `${curvePoint.x}%` }}
                    />

                    <div
                      className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-violet-200 shadow-[0_0_22px_rgba(196,181,253,1)]"
                      style={{
                        left: `${curvePoint.x}%`,
                        top: `${curvePoint.y}%`,
                      }}
                    />

                    <div
                      className="absolute z-20 w-[170px] rounded-2xl border border-violet-400/20 bg-[#0d0b12]/95 p-3 text-left shadow-xl"
                      style={{
                        left: `calc(${curvePoint.x}% + 12px)`,
                        top: `calc(${curvePoint.y}% - 20px)`,
                      }}
                    >
                      <div className="text-[10px] uppercase tracking-[0.28em] text-white/30">
                        {curvePoint.label}
                      </div>

                      <div className="mt-1 text-lg font-semibold">
                        {curvePoint.value}
                      </div>

                      <div className="text-sm text-violet-300">
                        {curvePoint.pnl}
                      </div>
                    </div>
                  </>
                )}

                <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.22em] text-white/20">
                  Start
                </div>
                <div className="absolute bottom-3 right-4 text-[10px] uppercase tracking-[0.22em] text-white/20">
                  Funded
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-violet-400/20 bg-violet-500/10 p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-violet-300">
                  Wallet Access
                </div>

                <div className="mt-2 text-2xl font-semibold">
                  Instant Spend
                </div>

                <div className="mt-6 text-xl tracking-[0.3em]">
                  5355 • 1944 • 8021 • 6721
                </div>

                <div className="mt-4 text-sm text-white/60">
                  Mastercard linked to funded balance
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Execution Feed
                </div>

                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>BTCUSD Long Opened</span>
                    <span className="text-violet-300">+420</span>
                  </div>

                  <div className="flex justify-between">
                    <span>ETH Partial Close</span>
                    <span className="text-violet-300">+180</span>
                  </div>

                  <div className="flex justify-between">
                    <span>SOL Breakout Entry</span>
                    <span className="text-violet-300">Risk Locked</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-violet-400/30 bg-violet-500/10 p-4">
                <div className="text-xs uppercase tracking-[0.28em] text-violet-300">
                  Anti-Payout Prop Model
                </div>

                <div className="mt-2 text-sm text-white">
                  Most prop firms delay withdrawals. BlackBit lets you spend
                  profits instantly via card access.
                </div>
              </div>

              <a
                href="/certificate"
                className="block rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:bg-white/[0.05]"
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
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-black/40 p-6">
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              Open Positions
            </div>

            <div className="grid grid-cols-5 border-b border-white/10 pb-3 text-sm text-white/60">
              <div>Pair</div>
              <div>Side</div>
              <div>Size</div>
              <div>Entry</div>
              <div className="text-right">PnL</div>
            </div>

            {[
              ["BTCUSD", "Long", "0.25", "62410", "+420"],
              ["ETHUSD", "Long", "1.2", "3120", "+180"],
              ["SOLUSD", "Long", "40", "132", "+95"],
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-5 border-b border-white/5 py-4 text-sm"
              >
                <div>{row[0]}</div>
                <div className="text-violet-300">{row[1]}</div>
                <div>{row[2]}</div>
                <div>{row[3]}</div>
                <div className="text-right text-violet-300">
                  {row[4]}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}