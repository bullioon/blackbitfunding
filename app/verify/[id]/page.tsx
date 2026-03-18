import BlackBitMark from "@/components/BlackBitMark";
import { db } from "@/lib/firebaseAdmin";
import Link from "next/link";

type VerifyPageProps = {
  params: Promise<{ id: string }>;
};

export default async function VerifyCertificatePage({
  params,
}: VerifyPageProps) {
  const { id } = await params;

  const snap = await db.collection("certificates").doc(id).get();
  const cert = snap.exists ? snap.data() : null;

  if (!cert) {
    return (
      <main className="min-h-screen bg-[#050505] px-6 py-16 pb-28 text-white">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-black/40 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <div className="flex items-center gap-4">
            <BlackBitMark className="h-14 w-14 shrink-0" />
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-violet-300/80">
                BlackBit Registry
              </div>
              <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">
                Certificate Not Found
              </h1>
            </div>
          </div>

          <div className="mt-8 rounded-[24px] border border-red-400/20 bg-red-500/10 p-5">
            <div className="text-[10px] uppercase tracking-[0.26em] text-red-300/80">
              Verification Result
            </div>
            <div className="mt-3 text-lg font-medium text-white">
              This certificate ID does not exist in the BlackBit registry.
            </div>
            <div className="mt-3 break-all text-sm text-white/55">
              ID checked: {id}
            </div>
          </div>
        </div>

        {/* CTA */}
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

              <Link
                href="/"
                className="rounded-xl bg-emerald-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-emerald-300"
              >
                Start
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const serialNumber = `${cert.id}-SN-78421`;

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-16 pb-28 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[34px] border border-violet-400/20 bg-[linear-gradient(135deg,#0c0a12,#060608)] shadow-[0_30px_120px_rgba(0,0,0,0.55)]">
          
          {/* HEADER */}
          <div className="border-b border-white/10 bg-black/30 px-8 py-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <BlackBitMark className="h-14 w-14 shrink-0" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.34em] text-violet-300/80">
                    BlackBit Registry
                  </div>
                  <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">
                    Certificate Verified
                  </h1>
                </div>
              </div>

              <div className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
                {cert.status}
              </div>
            </div>
          </div>

          {/* GRID */}
          <div className="px-8 py-10">
            <div className="grid gap-6 md:grid-cols-3">
              
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <div className="text-[10px] uppercase tracking-[0.26em] text-white/35">
                  Trader
                </div>
                <div className="mt-3 text-3xl font-semibold text-white">
                  {cert.traderName}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <div className="text-[10px] uppercase tracking-[0.26em] text-white/35">
                  Account Size
                </div>
                <div className="mt-3 text-2xl font-semibold text-violet-300">
                  {cert.accountSize}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <div className="text-[10px] uppercase tracking-[0.26em] text-white/35">
                  Program
                </div>
                <div className="mt-3 text-xl font-semibold text-white">
                  {cert.program}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <div className="text-[10px] uppercase tracking-[0.26em] text-white/35">
                  Certificate ID
                </div>
                <div className="mt-3 text-lg font-semibold text-white">
                  {cert.id}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <div className="text-[10px] uppercase tracking-[0.26em] text-white/35">
                  Issued
                </div>
                <div className="mt-3 text-xl font-semibold text-white">
                  {cert.issuedAt}
                </div>
              </div>

              <div className="rounded-[24px] border border-violet-400/20 bg-violet-500/10 p-5">
                <div className="text-[10px] uppercase tracking-[0.26em] text-violet-300/80">
                  Registry Serial
                </div>
                <div className="mt-3 text-lg font-semibold text-white">
                  {serialNumber}
                </div>
              </div>

              {cert.activationDate && (
                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-[10px] uppercase tracking-[0.26em] text-white/35">
                    Activation Date
                  </div>
                  <div className="mt-3 text-xl font-semibold text-white">
                    {cert.activationDate}
                  </div>
                </div>
              )}

              {cert.profit && (
                <div className="rounded-[24px] border border-emerald-400/20 bg-emerald-500/10 p-5">
                  <div className="text-[10px] uppercase tracking-[0.26em] text-emerald-300/80">
                    Profit
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-white">
                    {cert.profit}
                  </div>
                </div>
              )}

              {cert.period && (
                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-[10px] uppercase tracking-[0.26em] text-white/35">
                    Period
                  </div>
                  <div className="mt-3 text-xl font-semibold text-white">
                    {cert.period}
                  </div>
                </div>
              )}

              {cert.winRate && (
                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-[10px] uppercase tracking-[0.26em] text-white/35">
                    Win Rate
                  </div>
                  <div className="mt-3 text-xl font-semibold text-white">
                    {cert.winRate}
                  </div>
                </div>
              )}
            </div>
          </div>


          <div className="border-t border-white/10 bg-black/25 px-8 py-5 text-sm text-white/40">
            BLACKBIT FUNDING · CERTIFICATE REGISTRY
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      
<div className="mt-6 flex justify-center gap-3">
  <Link
    href={`/certificate/${id}`}
    className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
  >
    View Certificate
  </Link>

</div>


      {/* CTA */}
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

            <Link
              href="/"
              className="rounded-xl bg-emerald-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-emerald-300"
            >
              Start
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}