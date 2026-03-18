import BlackBitMark from "@/components/BlackBitMark";
import CertificateActions from "@/components/CertificateActions";
import DownloadCertificateButton from "@/components/DownloadCertificateButton";
import { db } from "@/lib/firebaseAdmin";
import { QRCodeSVG } from "qrcode.react";

type CertificateRecord = {
  id: string;
  traderName: string;
  accountSize: string;
  issuedAt: string;
  program: string;
  status: string;
  template: string;
  activationDate?: string;
  profit?: string;
  period?: string;
  winRate?: string;
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CertificatePage({ params }: Props) {
  const { id } = await params;

  const snap = await db.collection("certificates").doc(id).get();
  const cert = snap.exists ? (snap.data() as CertificateRecord) : null;

  if (!cert) {
    return (
      <main className="min-h-screen bg-[#050505] px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-black/40 p-8">
          <div className="flex items-center gap-4">
            <BlackBitMark className="h-14 w-14 shrink-0" />
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-white/50">
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
              This certificate does not exist in the BlackBit registry.
            </div>
            <div className="mt-3 break-all text-sm text-white/55">
              ID checked: {id}
            </div>
          </div>
        </div>
      </main>
    );
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const verifyUrl = `${baseUrl}/verify/${cert.id}`;

  const isFunded = cert.template === "funded-access";
  const isPerformance = cert.template === "performance-certificate";

  const accentText = isFunded
    ? "text-emerald-300"
    : isPerformance
      ? "text-cyan-300"
      : "text-violet-300";

  const accentLine = isFunded
    ? "from-transparent via-emerald-300 to-transparent"
    : isPerformance
      ? "from-transparent via-cyan-300 to-transparent"
      : "from-transparent via-violet-300 to-transparent";

  const accentGlow = isFunded
    ? "bg-[radial-gradient(circle,rgba(16,185,129,0.18),transparent_70%)]"
    : isPerformance
      ? "bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_70%)]"
      : "bg-[radial-gradient(circle,rgba(139,92,246,0.18),transparent_70%)]";

  const headerTag = isFunded
    ? "FUNDED ACCESS"
    : isPerformance
      ? "PERFORMANCE VERIFIED"
      : "EVALUATION PASSED";

  const heroMetric = isFunded
    ? cert.accountSize || "$120K"
    : isPerformance
      ? cert.profit || "+$18,420"
      : cert.accountSize || "$120K";

  const heroLabel = isFunded
    ? "FUNDED CAPITAL"
    : isPerformance
      ? "VERIFIED PROFIT"
      : "CHALLENGE CLEARED";

  const subtitle = isFunded
    ? "Capital access granted under BlackBit registry verification."
    : isPerformance
      ? "Verified trading result recorded in the BlackBit registry."
      : "Challenge cleared and validated within the BlackBit registry.";

  const proofLine = isFunded
    ? `${cert.accountSize} · VERIFIED · FUNDED`
    : isPerformance
      ? `${cert.winRate || "71% WIN RATE"} · ${cert.period || "30 DAYS"}`
      : `${cert.accountSize} · VERIFIED · ${cert.issuedAt}`;

  const secondaryMeta = cert.activationDate || cert.issuedAt;

  const stampText = isFunded
    ? "FUNDED VERIFIED"
    : isPerformance
      ? "PERFORMANCE VERIFIED"
      : "PASSED";

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-8 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
      
        <div className="mb-6 flex justify-center">
          <DownloadCertificateButton
            targetId="certificate-root"
            fileName={`${cert.id}-${cert.traderName}`}
          />
        </div>

        <div
          id="certificate-root"
          className="relative overflow-hidden rounded-[42px] border border-white/10 bg-[linear-gradient(180deg,#050505_0%,#09090b_100%)] shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
        >
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:34px_34px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(255,255,255,0.05),transparent_30%),radial-gradient(circle_at_80%_25%,rgba(255,255,255,0.03),transparent_24%)]" />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="relative opacity-[0.06]">
              <div className="absolute inset-0 blur-[18px]">
                <BlackBitMark className="h-[280px] w-[280px] text-emerald-300/20 md:h-[420px] md:w-[420px]" />
              </div>

              <div className="relative">
                <BlackBitMark className="h-[280px] w-[280px] text-white/[0.05] md:h-[420px] md:w-[420px]" />
              </div>
            </div>
          </div>

          <div className="relative grid min-h-[820px] gap-14 p-6 md:grid-cols-[1fr_470px] md:p-12">
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4">
                  <BlackBitMark className="h-14 w-14 shrink-0 md:h-16 md:w-16" />

                  <div>
                    <div className="text-[11px] uppercase tracking-[0.42em] text-white/45">
                      BLACKBIT REGISTRY
                    </div>
                    <div
                      className={`mt-3 text-sm uppercase tracking-[0.34em] ${accentText}`}
                    >
                      {headerTag}
                    </div>
                  </div>
                </div>

                <div className="mt-20">
                  <div className="text-[11px] uppercase tracking-[0.34em] text-white/28">
                    THIS CERTIFICATE CONFIRMS
                  </div>

                  <div className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.07em] text-white md:text-7xl">
                    {cert.traderName}
                  </div>

                  <div
                    className={`mt-8 h-px max-w-3xl bg-gradient-to-r ${accentLine}`}
                  />

                  <div className="mt-10">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/32">
                      {heroLabel}
                    </div>

                    <div
                      className={`mt-3 text-5xl font-semibold tracking-[-0.06em] md:text-7xl ${accentText}`}
                    >
                      {heroMetric}
                    </div>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/58 md:text-lg">
                      {subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 max-w-4xl">
                <div className="text-sm font-medium tracking-[0.24em] text-white/72">
                  {proofLine}
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-white/32">
                      Certificate ID
                    </div>
                    <div className="mt-3 break-all text-sm font-medium text-white">
                      {cert.id}
                    </div>
                  </div>

                  <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-white/32">
                      Issue Date
                    </div>
                    <div className="mt-3 text-sm font-medium text-white">
                      {cert.issuedAt}
                    </div>
                  </div>

                  <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-white/32">
                      Status
                    </div>
                    <div
                      className={`mt-3 text-sm font-semibold tracking-[0.18em] ${accentText}`}
                    >
                      {stampText}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="relative rounded-[36px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
                <div
                  className={`pointer-events-none absolute inset-0 rounded-[36px] blur-[80px] ${accentGlow}`}
                />

                <div className="relative">
                  <div className="mb-6 text-center">
                    <div
                      className={`text-[10px] uppercase tracking-[0.34em] ${accentText}`}
                    >
                      VERIFICATION PORTAL
                    </div>
                    <div className="mt-3 text-sm text-white/42">
                      Scan to validate registry access
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="rounded-[32px] border border-white/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
                      <QRCodeSVG
                        value={verifyUrl}
                        size={290}
                        bgColor="#ffffff"
                        fgColor="#000000"
                      />
                    </div>
                  </div>

                  <div className="mt-8 rounded-[22px] border border-white/10 bg-black/25 p-4">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-white/30">
                      Verify URL
                    </div>
                    <div className="mt-3 break-all text-xs leading-6 text-white/55">
                      {verifyUrl}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[22px] border border-white/10 bg-black/25 p-4">
                      <div className="text-[10px] uppercase tracking-[0.28em] text-white/30">
                        Verification
                      </div>
                      <div
                        className={`mt-3 text-sm font-semibold tracking-[0.18em] ${accentText}`}
                      >
                        {stampText}
                      </div>
                    </div>

                    <div className="rounded-[22px] border border-white/10 bg-black/25 p-4">
                      <div className="text-[10px] uppercase tracking-[0.28em] text-white/30">
                        Registry Date
                      </div>
                      <div className="mt-3 text-sm font-medium text-white">
                        {secondaryMeta}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative border-t border-white/10 px-6 py-5 text-center text-sm text-white/32 md:px-12">
            This certificate is immutably recorded within the BlackBit AI registry core.
          </div>
        </div>
      </div>
    </main>
  );
}