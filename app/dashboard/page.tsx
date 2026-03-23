"use client";

import BlackBitMark from "@/components/BlackBitMark";
import Link from "next/link";
import { useMemo, useState } from "react";

type CurvePoint = {
  x: number;
  y: number;
  label: string;
  equity: string;
  pnl: string;
};

export default function DashboardPage() {
  const [hoverPoint, setHoverPoint] = useState<CurvePoint | null>(null);
  const [chartMode, setChartMode] = useState<"perTrade" | "daily">("perTrade");

  const points = useMemo<CurvePoint[]>(
    () => [
      { x: 4, y: 86, label: "Trade 01", equity: "$120,000", pnl: "$0" },
      { x: 10, y: 84, label: "Trade 05", equity: "$120,180", pnl: "+$180" },
      { x: 16, y: 85, label: "Trade 09", equity: "$120,120", pnl: "+$120" },
      { x: 22, y: 81, label: "Trade 12", equity: "$120,420", pnl: "+$420" },
      { x: 28, y: 79, label: "Trade 16", equity: "$120,680", pnl: "+$680" },
      { x: 34, y: 80, label: "Trade 19", equity: "$120,590", pnl: "+$590" },
      { x: 40, y: 76, label: "Trade 22", equity: "$120,980", pnl: "+$980" },
      { x: 46, y: 73, label: "Trade 27", equity: "$121,260", pnl: "+$1,260" },
      { x: 52, y: 71, label: "Trade 31", equity: "$121,520", pnl: "+$1,520" },
      { x: 58, y: 72, label: "Trade 34", equity: "$121,430", pnl: "+$1,430" },
      { x: 64, y: 67, label: "Trade 38", equity: "$121,980", pnl: "+$1,980" },
      { x: 70, y: 63, label: "Trade 42", equity: "$122,460", pnl: "+$2,460" },
      { x: 76, y: 61, label: "Trade 46", equity: "$122,720", pnl: "+$2,720" },
      { x: 82, y: 58, label: "Trade 50", equity: "$123,040", pnl: "+$3,040" },
      { x: 88, y: 56, label: "Trade 54", equity: "$123,280", pnl: "+$3,280" },
      { x: 96, y: 52, label: "Trade 60", equity: "$123,890", pnl: "+$3,890" },
    ],
    []
  );

  const positions = [
    {
      pair: "XAUUSD",
      side: "BUY",
      size: "0.60",
      entry: "3028.1",
      mark: "3032.3",
      pnl: "+$248",
    },
    {
      pair: "US30",
      side: "SELL",
      size: "0.90",
      entry: "41984",
      mark: "41861",
      pnl: "+$176",
    },
    {
      pair: "BTCUSD",
      side: "BUY",
      size: "0.12",
      entry: "84210",
      mark: "85390",
      pnl: "+$318",
    },
  ];

  const feed = [
    { time: "09:12", text: "XAUUSD continuation entry", status: "Execution confirmed" },
    { time: "09:24", text: "US30 short reduced", status: "+$86 secured" },
    { time: "09:39", text: "BTCUSD risk adjusted", status: "Stop moved to protect" },
    { time: "10:03", text: "Gold trail tightened", status: "Floating protected" },
  ];

  const recentTrades = [
    { pair: "XAUUSD", result: "+$184", time: "08:18", side: "BUY" },
    { pair: "US30", result: "+$96", time: "08:44", side: "SELL" },
    { pair: "EURUSD", result: "-$34", time: "09:02", side: "BUY" },
    { pair: "BTCUSD", result: "+$210", time: "09:28", side: "BUY" },
  ];

  const areaPath =
    "M4,86 C7,85 8,84 10,84 C13,84 14,85 16,85 C18,84 20,82 22,81 C24,80 26,79 28,79 C30,79 32,80 34,80 C36,79 38,77 40,76 C42,75 44,74 46,73 C48,72 50,71 52,71 C54,71 56,72 58,72 C60,71 62,68 64,67 C66,66 68,64 70,63 C72,62 74,61 76,61 C78,60 80,59 82,58 C84,57 86,56 88,56 C91,55 93,53 96,52 L96,100 L4,100 Z";

  const linePath =
    "M4,86 C7,85 8,84 10,84 C13,84 14,85 16,85 C18,84 20,82 22,81 C24,80 26,79 28,79 C30,79 32,80 34,80 C36,79 38,77 40,76 C42,75 44,74 46,73 C48,72 50,71 52,71 C54,71 56,72 58,72 C60,71 62,68 64,67 C66,66 68,64 70,63 C72,62 74,61 76,61 C78,60 80,59 82,58 C84,57 86,56 88,56 C91,55 93,53 96,52";

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="flex min-h-screen">
        <aside className="hidden w-[270px] border-r border-white/10 bg-[#060606] lg:flex lg:flex-col">
          <div className="border-b border-white/10 px-6 py-6">
            <div className="flex items-center gap-3">
              <BlackBitMark className="h-11 w-11 shrink-0" />
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-white/40">
                  Trading Terminal
                </div>
                <div className="mt-1 text-sm font-semibold tracking-[0.22em] text-white">
                  BLACKBIT
                </div>
              </div>
            </div>
          </div>

          <nav className="px-4 py-6">
            <div className="space-y-2">
              <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 px-4 py-3 text-sm font-medium text-violet-300">
                Overview
              </div>

              <div className="rounded-2xl px-4 py-3 text-sm text-white/65 transition hover:bg-white/[0.04] hover:text-white">
                Accounts
              </div>

              <div className="rounded-2xl px-4 py-3 text-sm text-white/65 transition hover:bg-white/[0.04] hover:text-white">
                Positions
              </div>

              <div className="rounded-2xl px-4 py-3 text-sm text-white/65 transition hover:bg-white/[0.04] hover:text-white">
                Performance
              </div>

              <div className="rounded-2xl px-4 py-3 text-sm text-white/65 transition hover:bg-white/[0.04] hover:text-white">
                Wallet
              </div>

              <Link
                href="/certificate"
                className="block rounded-2xl px-4 py-3 text-sm text-white/65 transition hover:bg-white/[0.04] hover:text-white"
              >
                Certificates
              </Link>

              <div className="rounded-2xl px-4 py-3 text-sm text-white/65 transition hover:bg-white/[0.04] hover:text-white">
                Settings
              </div>
            </div>
          </nav>

          <div className="mt-auto p-4">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5">
              <div className="text-[10px] uppercase tracking-[0.28em] text-white/30">
                Account Status
              </div>
              <div className="mt-3 text-2xl font-semibold text-emerald-300">
                Funded Live
              </div>
              <div className="mt-2 text-sm leading-6 text-white/50">
                BlackBit funded environment active. Capital deployed under live
                execution conditions.
              </div>
            </div>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="border-b border-white/10 bg-black/40 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-white/35">
                  BlackBit Funded Terminal
                </div>
                <h1 className="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                  Funded Account Overview
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
                  FUNDED
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/55">
                  $120,000
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/55">
                  NY SESSION
                </div>
              </div>
            </div>
          </header>

          <section className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
              {[
                ["Balance", "$123,890"],
                ["Equity", "$123,890"],
                ["Daily PnL", "+$640"],
                ["Total Profit", "+$3,890"],
                ["Win Rate", "71%"],
                ["Max Drawdown", "2.9%"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
                >
                  <div className="text-[10px] uppercase tracking-[0.28em] text-white/30">
                    {label}
                  </div>
                  <div className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
              <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#0b0b0d,#070709)] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                      Balance Chart
                    </div>
                    <div className="mt-2 text-3xl font-semibold tracking-[-0.04em]">
                      {hoverPoint ? hoverPoint.equity : "$123,890"}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-right">
                      <div className="text-xs text-white/35">
                        30 Day Performance
                      </div>
                      <div className="mt-2 text-sm font-medium text-emerald-300">
                        {hoverPoint ? hoverPoint.pnl : "+$3,890"}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-1">
                      <button
                        type="button"
                        onClick={() => setChartMode("perTrade")}
                        className={`rounded-xl px-3 py-2 text-xs font-medium transition ${
                          chartMode === "perTrade"
                            ? "bg-violet-500/15 text-violet-300"
                            : "text-white/45 hover:text-white"
                        }`}
                      >
                        Per Trade
                      </button>
                      <button
                        type="button"
                        onClick={() => setChartMode("daily")}
                        className={`rounded-xl px-3 py-2 text-xs font-medium transition ${
                          chartMode === "daily"
                            ? "bg-violet-500/15 text-violet-300"
                            : "text-white/45 hover:text-white"
                        }`}
                      >
                        Daily
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className="relative mt-6 h-[360px] overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(99,102,241,0.10),rgba(99,102,241,0.02))]"
                  onMouseLeave={() => setHoverPoint(null)}
                >
                  <div className="absolute inset-x-0 top-[20%] border-t border-white/5" />
                  <div className="absolute inset-x-0 top-[40%] border-t border-white/5" />
                  <div className="absolute inset-x-0 top-[60%] border-t border-white/5" />
                  <div className="absolute inset-x-0 top-[80%] border-t border-white/5" />

                  <div className="absolute inset-y-0 left-[20%] border-l border-white/5" />
                  <div className="absolute inset-y-0 left-[40%] border-l border-white/5" />
                  <div className="absolute inset-y-0 left-[60%] border-l border-white/5" />
                  <div className="absolute inset-y-0 left-[80%] border-l border-white/5" />

                  <div className="absolute left-4 top-4 text-[11px] text-white/18">
                    124,000
                  </div>
                  <div className="absolute left-4 top-[27%] text-[11px] text-white/18">
                    123,500
                  </div>
                  <div className="absolute left-4 top-[47%] text-[11px] text-white/18">
                    123,000
                  </div>
                  <div className="absolute left-4 top-[67%] text-[11px] text-white/18">
                    122,500
                  </div>
                  <div className="absolute left-4 bottom-4 text-[11px] text-white/18">
                    122,000
                  </div>

                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full"
                  >
                    <defs>
                      <linearGradient id="equityStrokePro" x1="0%" x2="100%">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="55%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#f8fafc" />
                      </linearGradient>

                      <linearGradient
                        id="equityFillPro"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="rgba(99,102,241,0.34)" />
                        <stop offset="45%" stopColor="rgba(99,102,241,0.18)" />
                        <stop offset="100%" stopColor="rgba(99,102,241,0.02)" />
                      </linearGradient>

                      <filter id="glowPro">

  <feGaussianBlur stdDeviation="0.9" result="blur" />
  <feMerge>
    <feMergeNode in="blur" />
    <feMergeNode in="SourceGraphic" />
  </feMerge>
</filter>

                    </defs>

                    <path d={areaPath} fill="url(#equityFillPro)" />

                   
                   <path
  d={linePath}
  fill="none"
  stroke="url(#equityStrokePro)"
  strokeWidth="1.45"
  strokeLinecap="round"
  strokeLinejoin="round"
  filter="url(#glowPro)"
/>

                  </svg>

                  {points.map((point) => (
                    <button
                      key={point.label}
                      type="button"
                      onMouseEnter={() => setHoverPoint(point)}
                      className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full"
                      style={{ left: `${point.x}%`, top: `${point.y}%` }}
                    />
                  ))}

                  {hoverPoint && (
                    <>
                      <div
                        className="absolute bottom-0 top-0 w-px bg-violet-300/30"
                        style={{ left: `${hoverPoint.x}%` }}
                      />
                      <div
                        className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-violet-200 shadow-[0_0_24px_rgba(196,181,253,1)]"
                        style={{
                          left: `${hoverPoint.x}%`,
                          top: `${hoverPoint.y}%`,
                        }}
                      />
                      <div
                        className="absolute z-20 w-[190px] rounded-2xl border border-violet-400/20 bg-[#0d0b12]/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                        style={{
                          left: `calc(${hoverPoint.x}% + 12px)`,
                          top: `calc(${hoverPoint.y}% - 20px)`,
                        }}
                      >
                        <div className="text-[10px] uppercase tracking-[0.24em] text-white/30">
                          {hoverPoint.label}
                        </div>
                        <div className="mt-1 text-lg font-semibold">
                          {hoverPoint.equity}
                        </div>
                        <div className="text-sm text-emerald-300">
                          {hoverPoint.pnl}
                        </div>
                      </div>
                    </>
                  )}

                  <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.22em] text-white/20">
                    Start
                  </div>
                  <div className="absolute bottom-3 right-4 text-[10px] uppercase tracking-[0.22em] text-white/20">
                    Live
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#0b0b0d,#070709)] p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                      Funded Account
                    </div>
                    <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                      Passed
                    </div>
                  </div>

                  <div className="mt-4 rounded-[26px] border border-emerald-400/20 bg-emerald-500/10 p-5">
                    <div className="text-[10px] uppercase tracking-[0.26em] text-emerald-300/75">
                      Capital Size
                    </div>
                    <div className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-white">
                      $120,000
                    </div>
                    <div className="mt-3 text-sm text-white/55">
                      Funded access approved under BlackBit capital conditions.
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/75">
                      Status: <span className="text-emerald-300">Funded Verified</span>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/75">
                      Broker: <span className="text-white">BlackBit Live Routing</span>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/75">
                      Session: <span className="text-white">New York Open</span>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/75">
                      Split: <span className="text-white">80%</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#0b0b0d,#070709)] p-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                    Risk Summary
                  </div>

                  <div className="mt-5 grid gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-white/30">
                        Today&apos;s Permitted Loss
                      </div>
                      <div className="mt-2 text-2xl font-semibold text-white">
                        $5,000
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-white/30">
                        Max Permitted Loss
                      </div>
                      <div className="mt-2 text-2xl font-semibold text-white">
                        $10,000
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                     <div className="text-[10px] uppercase tracking-[0.22em] text-white/30">
  Today&apos;s Profit
</div>
                      <div className="mt-2 text-2xl font-semibold text-emerald-300">
                        +$640
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_1fr]">
              <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#0b0b0d,#070709)] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                      Open Positions
                    </div>
                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                      Active Trades
                    </h2>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10">
                  <div className="hidden grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] bg-white/[0.04] px-5 py-4 text-[11px] uppercase tracking-[0.22em] text-white/35 md:grid">
                    <div>Pair</div>
                    <div>Side</div>
                    <div>Size</div>
                    <div>Entry</div>
                    <div>Mark</div>
                    <div>PnL</div>
                  </div>

                  <div className="divide-y divide-white/5">
                    {positions.map((item) => (
                      <div
                        key={item.pair}
                        className="grid gap-3 px-5 py-4 md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] md:items-center"
                      >
                        <div className="text-sm font-medium text-white">{item.pair}</div>
                        <div className="text-sm text-emerald-300">{item.side}</div>
                        <div className="text-sm text-white/75">{item.size}</div>
                        <div className="text-sm text-white/55">{item.entry}</div>
                        <div className="text-sm text-white/55">{item.mark}</div>
                        <div className="text-sm font-medium text-emerald-300">
                          {item.pnl}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#0b0b0d,#070709)] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                        Execution Feed
                      </div>
                      <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                        Live Activity
                      </h2>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {feed.map((item, index) => (
                      <div
                        key={`${item.time}-${index}`}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-[10px] uppercase tracking-[0.24em] text-white/30">
                              {item.time}
                            </div>
                            <div className="mt-2 text-sm font-medium text-white">
                              {item.text}
                            </div>
                          </div>
                          <div className="text-sm text-violet-300">
                            {item.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#0b0b0d,#070709)] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                        Recent Trades
                      </div>
                      <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                        Closed Activity
                      </h2>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {recentTrades.map((item, index) => (
                      <div
                        key={`${item.time}-${index}`}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="text-sm font-medium text-white">
                              {item.pair} · {item.side}
                            </div>
                            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/30">
                              {item.time}
                            </div>
                          </div>

                          <div
                            className={`text-sm font-medium ${
                              item.result.startsWith("+")
                                ? "text-emerald-300"
                                : "text-red-300"
                            }`}
                          >
                            {item.result}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}