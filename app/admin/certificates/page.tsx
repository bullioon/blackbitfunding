"use client";

import { useMemo, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import BlackBitMark from "@/components/BlackBitMark";

type TemplateType =
  | "evaluation-passed"
  | "funded-access"
  | "performance-certificate";

type CreatedCertificate = {
  id: string;
  traderName: string;
  accountSize: string;
  issuedAt: string;
  program: string;
  status: string;
  template: string;
  activationDate?: string | null;
  profit?: string | null;
  period?: string | null;
  winRate?: string | null;
};

export default function AdminCertificatesPage() {
  const [traderName, setTraderName] = useState("LUCASARRONTRADING");
  const [accountSize, setAccountSize] = useState("$120K");
  const [issuedAt, setIssuedAt] = useState("March 17, 2026");
  const [program, setProgram] = useState("BlackBit Evaluation Program");
  const [status, setStatus] = useState("Verified");
  const [template, setTemplate] = useState<TemplateType>("evaluation-passed");

  const [activationDate, setActivationDate] = useState("March 19, 2026");
  const [profit, setProfit] = useState("+$18,420");
  const [period, setPeriod] = useState("30 Days");
  const [winRate, setWinRate] = useState("71%");

  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [created, setCreated] = useState<CreatedCertificate | null>(null);
  const [verifyUrl, setVerifyUrl] = useState("");

  const showFundedFields = template === "funded-access";
  const showPerformanceFields = template === "performance-certificate";

  const absoluteVerifyUrl = useMemo(() => {
    if (!verifyUrl) return "";
    if (typeof window === "undefined") return verifyUrl;
    return `${window.location.origin}${verifyUrl}`;
  }, [verifyUrl]);

  async function handleCreate() {
    setLoading(true);
    setCopied(false);

    try {
      const res = await fetch("/api/certificates/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          traderName,
          accountSize,
          issuedAt,
          program,
          status,
          template,
          activationDate: showFundedFields ? activationDate : "",
          profit: showPerformanceFields ? profit : "",
          period: showPerformanceFields ? period : "",
          winRate: showPerformanceFields ? winRate : "",
        }),
      });

      const data = await res.json();

      if (!data.ok) {
        alert(data.error || "Failed to create certificate.");
        return;
      }

      setCreated(data.certificate);
      setVerifyUrl(data.verifyUrl);
    } catch (error) {
      console.error(error);
      alert("Something went wrong creating the certificate.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    if (!absoluteVerifyUrl) return;

    try {
      await navigator.clipboard.writeText(absoluteVerifyUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-10 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-4">
          <BlackBitMark className="h-14 w-14 shrink-0" />
          <div>
            <div className="text-[11px] uppercase tracking-[0.34em] text-violet-300/80">
              BlackBit Admin
            </div>
            <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">
              Certificate Generator
            </h1>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[420px_1fr]">
          <div className="rounded-[30px] border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
            <div className="text-[11px] uppercase tracking-[0.3em] text-violet-300/80">
              Builder
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm text-white/55">
                  Trader Name
                </label>
                <input
                  value={traderName}
                  onChange={(e) => setTraderName(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-violet-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/55">
                  Account Size
                </label>
                <input
                  value={accountSize}
                  onChange={(e) => setAccountSize(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-violet-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/55">
                  Issue Date
                </label>
                <input
                  value={issuedAt}
                  onChange={(e) => setIssuedAt(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-violet-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/55">
                  Program
                </label>
                <input
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-violet-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/55">
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-[#0c0a12] px-4 py-3 text-white outline-none focus:border-violet-400/40"
                >
                  <option value="Verified">Verified</option>
                  <option value="Internal">Internal</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/55">
                  Template
                </label>
                <select
                  value={template}
                  onChange={(e) => setTemplate(e.target.value as TemplateType)}
                  className="w-full rounded-2xl border border-white/10 bg-[#0c0a12] px-4 py-3 text-white outline-none focus:border-violet-400/40"
                >
                  <option value="evaluation-passed">Evaluation Passed</option>
                  <option value="funded-access">Funded Access</option>
                  <option value="performance-certificate">
                    Performance Certificate
                  </option>
                </select>
              </div>

              {showFundedFields && (
                <div>
                  <label className="mb-2 block text-sm text-white/55">
                    Activation Date
                  </label>
                  <input
                    value={activationDate}
                    onChange={(e) => setActivationDate(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-violet-400/40"
                  />
                </div>
              )}

              {showPerformanceFields && (
                <>
                  <div>
                    <label className="mb-2 block text-sm text-white/55">
                      Profit
                    </label>
                    <input
                      value={profit}
                      onChange={(e) => setProfit(e.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-violet-400/40"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/55">
                      Period
                    </label>
                    <input
                      value={period}
                      onChange={(e) => setPeriod(e.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-violet-400/40"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/55">
                      Win Rate
                    </label>
                    <input
                      value={winRate}
                      onChange={(e) => setWinRate(e.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-violet-400/40"
                    />
                  </div>
                </>
              )}

              <button
                onClick={handleCreate}
                disabled={loading}
                className="mt-2 w-full rounded-2xl bg-violet-500 px-5 py-3.5 font-medium text-white transition hover:bg-violet-400 disabled:opacity-60"
              >
                {loading ? "Creating..." : "Generate Certificate"}
              </button>
            </div>
          </div>

          <div className="rounded-[30px] border border-violet-400/20 bg-[linear-gradient(135deg,#0c0a12,#060608)] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            {!created ? (
              <div className="flex min-h-[520px] items-center justify-center rounded-[24px] border border-white/10 bg-white/[0.02] text-white/40">
                Generate a certificate to see the verification QR and live link.
              </div>
            ) : (
              <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                  <div className="text-[11px] uppercase tracking-[0.3em] text-violet-300/80">
                    Created Certificate
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                        Certificate ID
                      </div>
                      <div className="mt-2 text-lg font-semibold text-white">
                        {created.id}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                        Trader
                      </div>
                      <div className="mt-2 text-lg font-semibold text-white">
                        {created.traderName}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                        Account Size
                      </div>
                      <div className="mt-2 text-lg font-semibold text-white">
                        {created.accountSize}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                        Program
                      </div>
                      <div className="mt-2 text-lg font-semibold text-white">
                        {created.program}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                        Status
                      </div>
                      <div className="mt-2 text-lg font-semibold text-white">
                        {created.status}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                        Template
                      </div>
                      <div className="mt-2 text-lg font-semibold capitalize text-white">
                        {created.template}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-violet-300/80">
                      Verification URL
                    </div>
                    <div className="mt-3 break-all text-sm text-white/80">
                      {absoluteVerifyUrl}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <button
                        onClick={handleCopy}
                        className="rounded-2xl border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 transition hover:bg-violet-500/20"
                      >
                        {copied ? "Copied" : "Copy URL"}
                      </button>

                      <a
                        href={verifyUrl}
                        target="_blank"
                        className="rounded-2xl border border-white/10 px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white/5"
                      >
                        Open Verify Page
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                  <div className="text-[11px] uppercase tracking-[0.3em] text-violet-300/80">
                    Verification QR
                  </div>

                  <div className="mt-6 flex justify-center rounded-[24px] border border-white/10 bg-white p-5">
                    <QRCodeCanvas
                      value={absoluteVerifyUrl || verifyUrl}
                      size={220}
                      bgColor="#ffffff"
                      fgColor="#000000"
                    />
                  </div>

                  <div className="mt-5 text-sm leading-6 text-white/55">
                    Put this QR on the diploma. When scanned, it opens the official
                    verification page for this exact certificate ID.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}