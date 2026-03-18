"use client";

import { useEffect, useMemo, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import BlackBitMark from "@/components/BlackBitMark";

type Review = {
  name: string;
  rating: number;
  text: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type CurvePoint = {
  x: number;
  y: number;
  label: string;
  value: string;
  pnl: string;
};

type Account = {
  size: string;
  price: number;
  oldPrice: number;
  phase1: string;
  phase2: string;
  drawdown: string;
  dailyLoss: string;
  split: string;
  tag: string;
  description: string;
};

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentCoin, setPaymentCoin] = useState("USDT");
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [curvePoint, setCurvePoint] = useState<CurvePoint | null>(null);

  const [reviews, setReviews] = useState<Review[]>([
    {
      name: "Daniel M.",
      rating: 5,
      text: "The site feels premium and the evaluation structure is clear. Much better than most generic crypto firms.",
    },
    {
      name: "Sofia R.",
      rating: 5,
      text: "What builds trust for me is the clean rules and the fact that it feels made for crypto, not just copied from forex.",
    },
    {
      name: "Marcus T.",
      rating: 4,
      text: "Strong visual identity, serious account structure and a much more institutional feeling than most new props.",
    },
  ]);

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);

  const accounts = useMemo<Account[]>(
    () => [
      {
        size: "$30K",
        price: 189,
        oldPrice: 270,
        phase1: "8%",
        phase2: "5%",
        drawdown: "8%",
        dailyLoss: "5%",
        split: "80%",
        tag: "Starter",
        description:
          "Entry access for disciplined traders starting with a clean structure.",
      },
      {
        size: "$60K",
        price: 329,
        oldPrice: 470,
        phase1: "8%",
        phase2: "5%",
        drawdown: "8%",
        dailyLoss: "5%",
        split: "80%",
        tag: "Most Popular",
        description:
          "Balanced pricing and scale. Built as the best-value evaluation path.",
      },
      {
        size: "$120K",
        price: 549,
        oldPrice: 785,
        phase1: "8%",
        phase2: "5%",
        drawdown: "8%",
        dailyLoss: "5%",
        split: "80%",
        tag: "Pro",
        description:
          "Higher capital allocation for traders and systems ready to scale.",
      },
    ],
    []
  );

  const trustItems = [
    "Forex / Futures / Crypto",
    "Manual + Automated Systems",
    "Transparent Risk Parameters",
    "30% New User Access",
  ];

const whyBlackBit = [
  "Built for serious Forex, Futures, and Crypto traders — not adapted from a generic prop firm template.",
  "Seamlessly compatible with MT5, TradeLocker, and cTrader for discretionary and systematic execution.",
  "Institutional two-phase evaluation model with clean targets, controlled risk parameters, and premium structure.",
  "Structured capital access for traders and automated systems that need credibility, flexibility, and scale.",
];

  const cardFeatures = [
    "Your funded account includes a debit card",
    "No payout delays or manual withdrawal waiting",
    "Spend instantly in physical stores and online",
    "Built to feel like direct capital access, not a slow payout pipeline",
  ];

  const faqItems: FaqItem[] = [
    {
      question: "Are automated systems allowed?",
      answer:
        "Yes. BlackBit is built for both discretionary traders and automated systems, as long as activity respects the platform rules and evaluation structure.",
    },
    {
      question: "How many phases are required to get funded?",
      answer:
        "Two. BlackBit uses a two-phase evaluation model. Funding is the outcome of passing both phases, not a third stage.",
    },
    {
      question: "What account sizes are available?",
      answer:
        "Current evaluation sizes are 30K, 60K, and 120K. Each one has clear pricing, targets, and risk parameters.",
    },
    {
      question: "How does the spending card work?",
      answer:
        "The BlackBit card concept is designed to create direct spending access, reducing the friction of traditional payout-only models and enabling instant usage online and in physical stores.",
    },
    {
      question: "What makes BlackBit different from other props?",
      answer:
        "The positioning is crypto-native, infrastructure-led, and premium by design. BlackBit aims to feel like capital architecture rather than a generic challenge website.",
    },
  ];

  const equityPoints: CurvePoint[] = [
    { x: 2, y: 88, label: "Day 01", value: "$101,240", pnl: "+$240" },
    { x: 10, y: 82, label: "Day 04", value: "$101,980", pnl: "+$980" },
    { x: 18, y: 78, label: "Day 07", value: "$102,420", pnl: "+$1,420" },
    { x: 26, y: 72, label: "Day 10", value: "$103,050", pnl: "+$2,050" },
    { x: 34, y: 70, label: "Day 12", value: "$103,210", pnl: "+$2,210" },
    { x: 42, y: 62, label: "Day 15", value: "$104,040", pnl: "+$3,040" },
    { x: 50, y: 58, label: "Day 18", value: "$104,480", pnl: "+$3,480" },
    { x: 58, y: 52, label: "Day 21", value: "$105,120", pnl: "+$4,120" },
    { x: 66, y: 44, label: "Day 24", value: "$105,980", pnl: "+$4,980" },
    { x: 74, y: 38, label: "Day 26", value: "$106,420", pnl: "+$5,420" },
    { x: 82, y: 28, label: "Day 28", value: "$106,980", pnl: "+$5,980" },
    { x: 90, y: 20, label: "Day 29", value: "$107,120", pnl: "+$6,120" },
    { x: 98, y: 12, label: "Day 30", value: "$107,210", pnl: "+$6,210" },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const paymentOptions = {
    USDT: {
      network: "TRC20",
      address: "TUQchphni4S5tgzssLpbghKBDERUoVoyML",
      symbol: "USDT",
      multiplier: 1,
    },
    USDC: {
      network: "Solana",
      address: "6A7UUr1x9kK1gkPmE1ys2s7H2zii289j27KvRsBX1q3f",
      symbol: "USDC",
      multiplier: 1,
    },
    BTC: {
      network: "Bitcoin",
      address: "bc1pdy4kzyknk0dqsdcna2lmv2emg88p45r3ln2fs96nxj9tqc5hf68qhchzl9",
      symbol: "BTC",
      multiplier: 1 / 68000,
    },
    ETH: {
      network: "ERC20",
      address: "0x9c78dca9bdb271cb56cf5d3cadc85507b5e4625e",
      symbol: "ETH",
      multiplier: 1 / 3400,
    },
  } as const;

  const selectedPayment =
    paymentOptions[paymentCoin as keyof typeof paymentOptions];

  const cryptoAmount = selectedAccount
    ? (selectedAccount.price * selectedPayment.multiplier).toFixed(
        paymentCoin === "BTC" || paymentCoin === "ETH" ? 6 : 2
      )
    : "0";

  const qrValue =
    paymentCoin === "BTC"
      ? `bitcoin:${selectedPayment.address}?amount=${cryptoAmount}`
      : paymentCoin === "ETH"
        ? `ethereum:${selectedPayment.address}?value=${cryptoAmount}`
        : selectedPayment.address;

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(selectedPayment.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const handleAddReview = () => {
    const cleanName = reviewName.trim();
    const cleanText = reviewText.trim();

    if (!cleanName || !cleanText) return;

    const newReview: Review = {
      name: cleanName,
      rating: reviewRating,
      text: cleanText,
    };

    setReviews((prev) => [newReview, ...prev].slice(0, 6));
    setReviewName("");
    setReviewText("");
    setReviewRating(5);
    setReviewModalOpen(false);
  };

  const openPaymentForAccount = (account: Account, coin = "USDT") => {
    setSelectedAccount(account);
    setPaymentCoin(coin);
    setCopied(false);
    setPaymentModalOpen(true);
  };

  const openDetailsForAccount = (account: Account) => {
    setSelectedAccount(account);
    setPaymentModalOpen(false);
    setCopied(false);
  };

  return (
    <main className="mouse-glow min-h-screen bg-[#050505] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-3">
  <BlackBitMark className="h-9 w-9 shrink-0" />

  <div className="text-[15px] font-semibold tracking-[0.28em] sm:text-lg">
    <span className="text-white">BLACKBIT</span>{" "}
    <span className="text-violet-400">FUNDING</span>
  </div>
</div>

          <nav className="hidden gap-8 text-sm text-white/65 md:flex">
            <a href="#accounts" className="transition hover:text-white">
              Accounts
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
            <a href="#card" className="transition hover:text-white">
              Card
            </a>
            <a href="#reviews" className="transition hover:text-white">
              Terminal
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </nav>

          <a
            href="#accounts"
            className="rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 transition hover:bg-violet-500/20"
          >
            Start Challenge
          </a>
        </div>
      </header>

      <section className="hero-chip-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.22),transparent_24%),radial-gradient(circle_at_left,rgba(124,58,237,0.13),transparent_22%)]" />
        <div className="absolute inset-0 bg-hero-grid opacity-[0.13]" />
        <div className="absolute inset-0 bg-chip-network opacity-[0.22]" />
        <div className="absolute inset-0 bg-chip-nodes opacity-[0.18]" />
        <div className="absolute inset-0 bg-chip-corners opacity-[0.18]" />

        <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-14 px-6 py-16 md:grid-cols-2 md:py-20">
          <div className="relative z-10">
            <div className="mb-5 inline-flex rounded-full border border-violet-400/20 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-violet-300">
              Institutional Crypto Prop
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              Access Up To $120K
              <span className="text-violet-400"> → In Trading Capital</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/62 md:text-lg">
              BlackBit Funding is built for serious crypto traders and automated
              systems. Pass a clear two-phase evaluation and unlock structured
              capital access up to $120,000.
            </p>

<div className="mt-8 max-w-2xl">
  <div className="text-xl font-semibold tracking-[-0.03em] text-white md:text-2xl">
    Forex / Futures / Crypto
  </div>

  <div className="mt-2 text-sm uppercase tracking-[0.26em] text-violet-300/85 md:text-base">
    Compatible with MT5, TradeLocker, and cTrader
  </div>

  <div className="mt-3 text-sm text-white/45 md:text-base">
    Built for discretionary traders, funded accounts, and automated execution.
  </div>
</div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#accounts"
                className="rounded-2xl bg-violet-500 px-6 py-3.5 font-medium text-white transition hover:bg-violet-400"
              >
                Start Challenge
              </a>
              <a
                href="#process"
                className="rounded-2xl border border-white/15 px-6 py-3.5 font-medium text-white/85 transition hover:border-violet-400/40 hover:bg-white/5"
              >
                View Rules
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/45">
              <div>$4.2M Paid to Traders</div>
              <div>2,184 Active Traders</div>
              <div>71% Avg Win Rate</div>
              <div>Crypto Native</div>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs uppercase tracking-[0.16em] text-white/68"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/45">
              <div>Accounts: 30K / 60K / 120K</div>
              <div className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />
              <div>2-Phase Evaluation</div>
              <div className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />
              <div>Up to 80% Split</div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative mx-auto flex aspect-square w-full max-w-[650px] items-center justify-center">
              <div className="absolute h-[94%] w-[94%] rounded-full bg-violet-500/12 blur-3xl animate-orbDrift" />
              <div className="absolute h-[84%] w-[84%] rounded-full border border-violet-400/18 animate-ringSlow" />
              <div className="absolute h-[64%] w-[64%] rounded-full border border-violet-300/26 animate-ringReverse" />
              <div className="absolute h-[43%] w-[43%] rounded-full border border-violet-200/34 bg-violet-400/8 shadow-[0_0_120px_rgba(139,92,246,0.22)] animate-ringSlow" />
              <div className="absolute h-[14px] w-[14px] rounded-full bg-violet-300 shadow-[0_0_35px_rgba(196,181,253,1)] animate-corePulse" />

              <div className="absolute left-[7%] top-[16%] rounded-2xl border border-white/10 bg-black/65 px-5 py-4 backdrop-blur-md shadow-[0_10px_60px_rgba(0,0,0,0.35)]">
                <div className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                  Liquidity
                </div>
                <div className="mt-2 text-2xl font-semibold text-violet-300">
                  Active
                </div>
              </div>

              <div className="absolute right-[10%] top-[16%] rounded-2xl border border-white/10 bg-black/65 px-5 py-4 backdrop-blur-md shadow-[0_10px_60px_rgba(0,0,0,0.35)]">
                <div className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                  Access
                </div>
                <div className="mt-2 text-2xl font-semibold text-white/90">
                  120K Max
                </div>
              </div>

              <div className="absolute left-[8%] bottom-[16%] rounded-2xl border border-white/10 bg-black/65 px-5 py-4 backdrop-blur-md shadow-[0_10px_60px_rgba(0,0,0,0.35)]">
                <div className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                  Crypto
                </div>
                <div className="mt-2 text-2xl font-semibold text-white/90">
                  Native
                </div>
              </div>

              <div className="absolute right-[8%] bottom-[16%] rounded-2xl border border-white/10 bg-black/65 px-5 py-4 backdrop-blur-md shadow-[0_10px_60px_rgba(0,0,0,0.35)]">
                <div className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                  Evaluation
                </div>
                <div className="mt-2 text-2xl font-semibold text-violet-300">
                  2 Phases
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-4 overflow-hidden px-6 py-4">
          <div className="ticker-mask relative overflow-hidden">
            <div className="ticker-track flex min-w-max gap-10 whitespace-nowrap text-sm uppercase tracking-[0.24em] text-white/45">
              {[
                "BTCUSD",
                "ETHUSD",
                "SOLUSD",
                "AVAXUSD",
                "ARBUSD",
                "LINKUSD",
                "MATICUSD",
                "OPUSD",
                "BTCUSD",
                "ETHUSD",
                "SOLUSD",
                "AVAXUSD",
                "ARBUSD",
                "LINKUSD",
                "MATICUSD",
                "OPUSD",
              ].map((item, index) => (
                <div key={`${item}-${index}`}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-6 md:grid-cols-4">
          {[
            "Two-Phase Structure",
            "Built For Pro Traders",
            "Manual & Bot Friendly",
            "Transparent Pricing & Rules",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-black/35 px-4 py-4 text-sm text-white/72"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="accounts" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <div className="text-sm uppercase tracking-[0.3em] text-violet-300/80">
            Funding Programs
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            Choose Your Account Size
          </h2>
          <p className="mt-4 text-white/60">
            Clear pricing, clear targets, clear risk logic. Every BlackBit
            evaluation includes 30% new user access pricing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {accounts.map((account) => (
            <div
              key={account.size}
              className={`group rounded-[28px] border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(139,92,246,0.16)] ${
                account.tag === "Most Popular"
                  ? "border-violet-400/45 bg-gradient-to-b from-violet-500/10 to-white/[0.03]"
                  : "border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.025]"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="text-sm uppercase tracking-[0.24em] text-white/35">
                  Account
                </div>
                <div className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                  {account.tag}
                </div>
              </div>

              <div className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-violet-400">
                {account.size}
              </div>

              <p className="mt-4 min-h-[52px] text-sm leading-6 text-white/52">
                {account.description}
              </p>

              <div className="mt-6 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-violet-300/80">
                  New User Access
                </div>
                <div className="mt-2 flex items-end gap-3">
                  <span className="text-3xl font-semibold text-white">
                    ${account.price}
                  </span>
                  <span className="pb-1 text-sm text-white/35 line-through">
                    ${account.oldPrice}
                  </span>
                  <span className="pb-1 text-sm font-medium text-violet-300">
                    30% OFF
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-4 text-sm text-white/72">
                <div className="flex items-center justify-between border-b border-white/8 pb-3">
                  <span>Phase 1 Target</span>
                  <span className="font-medium text-white">{account.phase1}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/8 pb-3">
                  <span>Phase 2 Target</span>
                  <span className="font-medium text-white">{account.phase2}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/8 pb-3">
                  <span>Max Drawdown</span>
                  <span className="font-medium text-white">{account.drawdown}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/8 pb-3">
                  <span>Daily Loss</span>
                  <span className="font-medium text-white">{account.dailyLoss}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Profit Split</span>
                  <span className="font-medium text-white">{account.split}</span>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-sm text-white/60">
                <div>✔ Instant Funding After Passing</div>
                <div>✔ No Minimum Trading Days</div>
                <div>✔ Crypto Pairs Only</div>
                <div>✔ Instant Spend Card Access</div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <button
                  onClick={() => openPaymentForAccount(account, "USDT")}
                  className="rounded-2xl bg-violet-500 px-5 py-3 font-medium text-white transition hover:bg-violet-400"
                >
                  Buy Now
                </button>

                <button
                  onClick={() => openDetailsForAccount(account)}
                  className="rounded-2xl border border-white/12 px-5 py-3 font-medium text-white/85 transition hover:bg-white/5"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="border-y border-white/8 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-3xl">
            <div className="text-sm uppercase tracking-[0.3em] text-violet-300/80">
              Evaluation Model
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
              Two Evaluation Phases
            </h2>
            <p className="mt-4 text-white/60">
              Funding is the outcome of passing both phases, not a third stage.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-black/40 p-7">
              <div className="text-6xl font-semibold tracking-[-0.05em] text-violet-400/80">
                01
              </div>
              <h3 className="mt-5 text-2xl font-medium">Phase One</h3>
              <p className="mt-3 max-w-lg text-white/60">
                Reach the first target while respecting drawdown and daily loss
                controls. This stage validates initial performance discipline.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-black/40 p-7">
              <div className="text-6xl font-semibold tracking-[-0.05em] text-violet-400/80">
                02
              </div>
              <h3 className="mt-5 text-2xl font-medium">Phase Two</h3>
              <p className="mt-3 max-w-lg text-white/60">
                Confirm consistency and prove your trading process or system is
                stable enough for funded access.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-violet-400/20 bg-violet-500/10 p-7">
            <div className="text-sm uppercase tracking-[0.3em] text-violet-300/80">
              Outcome
            </div>
            <h3 className="mt-3 text-2xl font-semibold">
              Pass Both Phases → Get Funded
            </h3>
            <p className="mt-3 max-w-2xl text-white/62">
              BlackBit is built around a clean capital-access model: two clear
              phases, then structured funded evaluation approval.
            </p>
          </div>
        </div>
      </section>

      <section
        id="card"
        className="relative overflow-hidden border-y border-white/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(139,92,246,0.16),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 md:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-violet-300/80">
              Instant Spend Card
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
              Funded Access That Feels Like Real Money
            </h2>
            <p className="mt-5 max-w-xl text-white/62">
              Your BlackBit account is designed to go beyond slow payout cycles.
              Funded users get debit-card style spending access for a much more
              direct capital experience.
            </p>

            <div className="mt-8 space-y-4">
              {cardFeatures.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white/74"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#accounts"
                className="rounded-2xl bg-violet-500 px-6 py-3.5 font-medium text-white transition hover:bg-violet-400"
              >
                Explore Access
              </a>

              <a
                href="#anti-payout"
                className="rounded-2xl border border-white/12 px-6 py-3.5 font-medium text-white/85 transition hover:bg-white/5"
              >
                See Card Benefits
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[36px] bg-violet-500/10 blur-3xl" />
            <div className="card-3d relative mx-auto max-w-[540px] rounded-[36px] border border-violet-400/25 bg-gradient-to-br from-[#121018] via-[#0c0a12] to-[#050505] p-8 shadow-[0_25px_120px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-0 rounded-[36px] bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_35%,transparent_65%,rgba(139,92,246,0.08))]" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.35em] text-white/35">
                      Funded Trading Card
                    </div>
                    <div className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                      Instant Spend
                    </div>
                  </div>
                  <div className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                    Active
                  </div>
                </div>

                <div className="mt-12 rounded-[28px] border border-violet-400/20 bg-black/50 p-6 backdrop-blur-sm">
                  <div className="text-[11px] uppercase tracking-[0.3em] text-white/30">
                    Linked Balance
                  </div>
                  <div className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-violet-300">
                    $18,420.70
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-white/55">
                    Profits from your funded account become available on this
                    card instead of waiting for traditional payout withdrawals.
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-[11px] uppercase tracking-[0.3em] text-white/30">
                      Payout Delay
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-white">
                      None
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-[11px] uppercase tracking-[0.3em] text-white/30">
                      Spend Access
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-white">
                      Instant
                    </div>
                  </div>
                </div>

                <div className="mt-6 h-[1px] w-full bg-white/10" />

                <div className="mt-6 flex items-center justify-between text-sm text-white/50">
                  <span>Physical Stores</span>
                  <span>Online Payments</span>
                  <span>Global Use</span>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-sm text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
                No Payouts. Instant Spend.
              </div>

              <div className="mt-2 text-sm leading-relaxed text-white/50">
                Pass the evaluation and use funded profits instantly without
                waiting for traditional withdrawal cycles.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="anti-payout"
        className="border-y border-violet-400/15 bg-[linear-gradient(180deg,rgba(139,92,246,0.12),rgba(139,92,246,0.03))]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[34px] border border-violet-400/20 bg-black/35 p-8 shadow-[0_20px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-10">
            <div className="max-w-4xl">
              <div className="text-sm uppercase tracking-[0.34em] text-violet-300/80">
                Anti Payout Prop Firm
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
                Better than payout waiting.
                <br />
                <span className="text-violet-300">
                  Spend funded profits with direct card access.
                </span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
                Traditional firms make traders wait, request, and hope. BlackBit
                is designed around a cleaner experience: pass, get funded, and
                move into a system built for instant usability instead of payout
                friction.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                "No payout queue delays",
                "Mastercard-style spending narrative",
                "Capital that feels usable, not locked",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 text-white/78"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#accounts"
                className="rounded-2xl bg-violet-500 px-6 py-3.5 font-medium text-white transition hover:bg-violet-400"
              >
                Pick Your Account
              </a>
              <a
                href="#card"
                className="rounded-2xl border border-white/12 px-6 py-3.5 font-medium text-white/85 transition hover:bg-white/5"
              >
                Back To Card Section
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-violet-300/80">
              Why BlackBit
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
             Multi-Market Access 
             Built For Serious Traders
            </h2>
          </div>

          <div className="space-y-4">
            {whyBlackBit.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white/72"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="border-y border-white/8 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-3xl">
            <div className="text-sm uppercase tracking-[0.3em] text-violet-300/80">
              Funded Trader Environment
            </div>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
              The BlackBit Trading Terminal
            </h2>

            <p className="mt-4 text-white/60">
              After passing the evaluation you access a real capital environment
              with performance analytics, open positions and instant profit
              usability.
            </p>
          </div>

          <div className="rounded-[34px] border border-violet-400/20 bg-gradient-to-br from-[#0e0c14] via-[#09090d] to-[#050505] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.35em] text-white/28">
                  Trader Session
                </div>
                <div className="mt-2 text-2xl font-semibold text-white">
                  Funded Account
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                  Live
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/55">
                  Global Use Enabled
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {[
                ["Balance", "$104,420"],
                ["Equity", "$107,210"],
                ["Floating PnL", "+3,210"],
                ["Win Rate", "71%"],
                ["Trades Today", "12"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="text-[10px] uppercase tracking-[0.28em] text-white/28">
                    {label}
                  </div>

                  <div className="mt-2 text-2xl font-semibold text-white">
                    {value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[28px] border border-white/10 bg-black/25 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.3em] text-white/28">
                      Equity Curve
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-white">
                      {curvePoint ? curvePoint.value : "$107,210"}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-white/38">
                      30 Day Performance
                    </div>
                    <div className="mt-2 text-sm font-medium text-violet-300">
                      {curvePoint ? curvePoint.pnl : "+$6,210"}
                    </div>
                  </div>
                </div>

                <div className="mt-5 h-[320px] rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(139,92,246,0.12),rgba(139,92,246,0.015))] p-5">
                  <div
                    className="relative h-full w-full overflow-hidden rounded-xl border border-white/5 bg-black/20"
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

                    <div className="absolute left-3 top-3 text-[10px] uppercase tracking-[0.24em] text-white/20">
                      BlackBit Performance
                    </div>

                    <svg
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      className="absolute inset-0 h-full w-full"
                    >
                      <defs>
                        <linearGradient
                          id="equityArea"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="rgba(196,181,253,0.36)" />
                          <stop offset="60%" stopColor="rgba(139,92,246,0.14)" />
                          <stop offset="100%" stopColor="rgba(139,92,246,0.01)" />
                        </linearGradient>

                        <linearGradient
                          id="equityStroke"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="rgba(139,92,246,0.85)" />
                          <stop offset="45%" stopColor="rgba(167,139,250,0.95)" />
                          <stop offset="100%" stopColor="rgba(255,255,255,0.98)" />
                        </linearGradient>

                        <filter id="glowLine">
                          <feGaussianBlur stdDeviation="1.8" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      <path
                        d="M2,88 L10,82 L18,78 L26,72 L34,70 L42,62 L50,58 L58,52 L66,44 L74,38 L82,28 L90,20 L98,12 L98,100 L2,100 Z"
                        fill="url(#equityArea)"
                        opacity="0.95"
                      />

                      <path
                        d="M2,88 L10,82 L18,78 L26,72 L34,70 L42,62 L50,58 L58,52 L66,44 L74,38 L82,28 L90,20 L98,12"
                        fill="none"
                        stroke="url(#equityStroke)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#glowLine)"
                      />
                    </svg>

                    {equityPoints.map((point) => (
                      <button
                        key={point.label}
                        type="button"
                        onMouseEnter={() => setCurvePoint(point)}
                        className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{
                          left: `${point.x}%`,
                          top: `${point.y}%`,
                        }}
                      >
                        <span className="absolute inset-0 rounded-full bg-transparent" />
                      </button>
                    ))}

                    {curvePoint && (
                      <>
                        <div
                          className="absolute bottom-0 top-0 w-px bg-violet-300/45"
                          style={{ left: `${curvePoint.x}%` }}
                        />

                        <div
                          className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-violet-200 shadow-[0_0_22px_rgba(196,181,253,1)]"
                          style={{
                            left: `${curvePoint.x}%`,
                            top: `${curvePoint.y}%`,
                          }}
                        />

                        <div
                          className="absolute z-20 w-[190px] rounded-2xl border border-violet-400/20 bg-[#0d0b12]/95 p-3 text-left shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
                          style={{
                            left: `calc(${curvePoint.x}% + 12px)`,
                            top: `calc(${curvePoint.y}% - 24px)`,
                          }}
                        >
                          <div className="text-[10px] uppercase tracking-[0.28em] text-white/30">
                            {curvePoint.label}
                          </div>
                          <div className="mt-2 text-lg font-semibold text-white">
                            {curvePoint.value}
                          </div>
                          <div className="mt-1 text-sm font-medium text-violet-300">
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

                <div className="mt-6 rounded-[30px] border border-violet-400/20 bg-gradient-to-br from-[#171322] via-[#0d0b12] to-[#050505] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.32em] text-white/35">
                        BlackBit Card
                      </div>
                      <div className="mt-2 text-2xl font-semibold text-white">
                        Instant Spend Access
                      </div>
                    </div>

                    <div className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                      Active
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <div className="h-10 w-14 rounded-xl border border-white/10 bg-white/[0.05]" />
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-[#ff5f00]/80" />
                      <div className="-ml-3 h-8 w-8 rounded-full bg-[#eb001b]/80" />
                      <span className="ml-2 text-sm text-white/70">Mastercard</span>
                    </div>
                  </div>

                  <div className="mt-8 text-[26px] font-medium tracking-[0.22em] text-white">
                    5355 • 1944 • 8021 • 6721
                  </div>

                  <div className="mt-6 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.28em] text-white/30">
                        Card Holder
                      </div>
                      <div className="mt-1 text-sm text-white">FUNDED USER</div>
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-[0.28em] text-white/30">
                        Status
                      </div>
                      <div className="mt-1 text-sm text-violet-300">Instant Spend</div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-violet-400/20 bg-violet-500/10 px-4 py-3 text-sm text-white/70">
                    No payouts. Direct card access for funded profits.
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-[10px] uppercase tracking-[0.26em] text-white/28">
                      Best Day
                    </div>
                    <div className="mt-2 text-xl font-semibold text-violet-300">
                      +$1,180
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-[10px] uppercase tracking-[0.26em] text-white/28">
                      Avg R:R
                    </div>
                    <div className="mt-2 text-xl font-semibold text-white">
                      1 : 2.4
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-[10px] uppercase tracking-[0.26em] text-white/28">
                      Session State
                    </div>
                    <div className="mt-2 text-xl font-semibold text-white">
                      Trending
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[28px] border border-white/10 bg-black/25 p-5">
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] uppercase tracking-[0.3em] text-white/28">
                      Open Positions
                    </div>

                    <div className="text-xs text-white/38">3 Active</div>
                  </div>

                  <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
                    <div className="grid grid-cols-5 bg-white/[0.04] px-4 py-3 text-[11px] uppercase tracking-[0.2em] text-white/40">
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
                    ].map((t, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-5 border-t border-white/5 px-4 py-3 text-sm"
                      >
                        <div className="text-white">{t[0]}</div>
                        <div className="text-violet-300">{t[1]}</div>
                        <div className="text-white/70">{t[2]}</div>
                        <div className="text-white/70">{t[3]}</div>
                        <div className="text-right font-medium text-violet-300">
                          {t[4]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-black/25 p-5">
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] uppercase tracking-[0.3em] text-white/28">
                      Live Execution Feed
                    </div>
                    <div className="text-xs text-white/38">Auto Updating</div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {[
                      ["09:41", "BTCUSD Long Opened", "+$120 unrealized"],
                      ["09:44", "ETHUSD Partial Close", "+$180 realized"],
                      ["09:47", "SOLUSD Breakout Entry", "Risk locked"],
                      ["09:52", "BTCUSD Position Scaling", "+$420 floating"],
                    ].map(([time, event, status], index) => (
                      <div
                        key={`${time}-${index}`}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-xs uppercase tracking-[0.22em] text-white/30">
                              {time}
                            </div>
                            <div className="mt-2 font-medium text-white">
                              {event}
                            </div>
                          </div>
                          <div className="text-sm text-violet-300">{status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-violet-300/80">
                    Trader Access
                  </div>

                  <div className="mt-2 text-xl font-semibold text-white">
                    No Payouts. Instant Spend.
                  </div>

                  <div className="mt-1 text-sm text-white/55">
                    Use funded profits without waiting for withdrawal cycles.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.3em] text-violet-300/80">
                    Trader Feedback
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    Early Community Response
                  </h3>
                </div>

                <button
                  onClick={() => setReviewModalOpen(true)}
                  className="rounded-2xl border border-violet-400/30 bg-violet-500/10 px-5 py-3 font-medium text-violet-300 transition hover:bg-violet-500/20"
                >
                  Leave a Review
                </button>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {reviews.map((review, index) => (
                  <div
                    key={`${review.name}-${index}`}
                    className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
                  >
                    <div className="text-violet-400">
                      {"★".repeat(review.rating)}
                      <span className="text-white/15">
                        {"★".repeat(5 - review.rating)}
                      </span>
                    </div>

                    <p className="mt-4 text-white/72">{review.text}</p>
                    <div className="mt-6 text-sm text-white/42">{review.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold md:text-5xl">
          Ready To Get Funded?
        </h2>

        <p className="mt-4 text-white/60">
          Start your evaluation and unlock up to $120,000 in trading capital.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#accounts"
            className="rounded-2xl bg-violet-500 px-6 py-3 text-white transition hover:bg-violet-400"
          >
            Start $30K Challenge
          </a>

          <a
            href="#accounts"
            className="rounded-2xl bg-violet-500 px-6 py-3 text-white transition hover:bg-violet-400"
          >
            Start $60K Challenge
          </a>

          <a
            href="#accounts"
            className="rounded-2xl bg-violet-500 px-6 py-3 text-white transition hover:bg-violet-400"
          >
            Start $120K Challenge
          </a>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <div className="text-sm uppercase tracking-[0.3em] text-violet-300/80">
            FAQ
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            Questions Serious Traders Actually Ask
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03]"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-medium text-white">
                    {item.question}
                  </span>
                  <span className="ml-6 text-2xl text-violet-300">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/8 px-6 py-5 text-white/62">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_34%)]" />
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <div className="text-sm uppercase tracking-[0.3em] text-violet-300/80">
            Start Now
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            Access Capital Through A Cleaner Crypto Model
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Built for serious traders, structured for trust, and designed to
            feel like premium capital infrastructure from day one.
          </p>
          <a
            href="#accounts"
            className="mt-8 inline-block rounded-2xl bg-violet-500 px-8 py-4 font-medium text-white transition hover:bg-violet-400"
          >
            Claim 30% Off
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <div>
            Created by <span className="text-white/72">Anatomic Inc.</span>
          </div>
          <div>Offices in San Francisco, California</div>
        </div>
      </footer>

      {reviewModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
          <div className="w-full max-w-xl rounded-[32px] border border-violet-400/20 bg-[#0a0a0d] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-violet-300/80">
                  Leave a Review
                </div>
                <h3 className="mt-2 text-2xl font-semibold">Share Feedback</h3>
              </div>

              <button
                onClick={() => setReviewModalOpen(false)}
                className="rounded-xl border border-white/10 px-3 py-2 text-white/70 transition hover:bg-white/5"
              >
                Close
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm text-white/55">Name</label>
                <input
                  value={reviewName}
                  onChange={(e) => setReviewName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-violet-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/55">
                  Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewRating(star)}
                      className={`rounded-xl px-3 py-2 text-xl transition ${
                        star <= reviewRating
                          ? "bg-violet-500/15 text-violet-300"
                          : "border border-white/10 text-white/30"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/55">
                  Review
                </label>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Write your feedback"
                  rows={5}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-violet-400/40"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={handleAddReview}
                className="rounded-2xl bg-violet-500 px-5 py-3 font-medium text-white transition hover:bg-violet-400"
              >
                Submit Review
              </button>
              <button
                onClick={() => setReviewModalOpen(false)}
                className="rounded-2xl border border-white/10 px-5 py-3 font-medium text-white/75 transition hover:bg-white/5"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedAccount && !paymentModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md">
          <div className="w-full max-w-2xl rounded-[32px] border border-violet-400/20 bg-[#0a0a0d] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.5)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-violet-300/80">
                  Account Details
                </div>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  {selectedAccount.size} Evaluation
                </h3>
                <p className="mt-3 max-w-xl text-white/55">
                  {selectedAccount.description}
                </p>
              </div>

              <button
                onClick={() => setSelectedAccount(null)}
                className="rounded-xl border border-white/10 px-3 py-2 text-white/70 transition hover:bg-white/5"
              >
                Close
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-5">
              <div className="text-xs uppercase tracking-[0.24em] text-violet-300/80">
                New User Access
              </div>
              <div className="mt-2 flex items-end gap-3">
                <span className="text-4xl font-semibold text-white">
                  ${selectedAccount.price}
                </span>
                <span className="pb-1 text-sm text-white/35 line-through">
                  ${selectedAccount.oldPrice}
                </span>
                <span className="pb-1 text-sm font-medium text-violet-300">
                  30% OFF
                </span>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between border-b border-white/8 pb-3 text-sm">
                  <span className="text-white/65">Phase 1 Target</span>
                  <span className="font-medium text-white">{selectedAccount.phase1}</span>
                </div>
                <div className="mt-3 flex items-center justify-between border-b border-white/8 pb-3 text-sm">
                  <span className="text-white/65">Phase 2 Target</span>
                  <span className="font-medium text-white">{selectedAccount.phase2}</span>
                </div>
                <div className="mt-3 flex items-center justify-between border-b border-white/8 pb-3 text-sm">
                  <span className="text-white/65">Max Drawdown</span>
                  <span className="font-medium text-white">{selectedAccount.drawdown}</span>
                </div>
                <div className="mt-3 flex items-center justify-between border-b border-white/8 pb-3 text-sm">
                  <span className="text-white/65">Daily Loss</span>
                  <span className="font-medium text-white">{selectedAccount.dailyLoss}</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-white/65">Profit Split</span>
                  <span className="font-medium text-white">{selectedAccount.split}</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-sm uppercase tracking-[0.24em] text-violet-300/80">
                  Included
                </div>
                <div className="mt-4 space-y-3 text-sm text-white/68">
                  <div>✔ Two-phase evaluation model</div>
                  <div>✔ Crypto-native trading structure</div>
                  <div>✔ Manual and bot friendly</div>
                  <div>✔ Instant spend card concept</div>
                  <div>✔ Clear risk parameters</div>
                  <div>✔ Premium funded environment</div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                onClick={() => openPaymentForAccount(selectedAccount, "USDT")}
                className="rounded-2xl bg-violet-500 px-5 py-3.5 font-medium text-white transition hover:bg-violet-400"
              >
                Start Challenge
              </button>

              <button
                onClick={() => openPaymentForAccount(selectedAccount, "USDT")}
                className="rounded-2xl border border-violet-400/30 bg-violet-500/10 px-5 py-3.5 font-medium text-violet-300 transition hover:bg-violet-500/20"
              >
                Pay With Crypto
              </button>
            </div>
          </div>
        </div>
      )}

      {paymentModalOpen && selectedAccount && (
        <div
          className="fixed inset-0 z-[120] overflow-y-auto bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setPaymentModalOpen(false)}
        >
          <div className="flex min-h-full items-start justify-center py-8">
            <div
              className="relative w-full max-w-3xl rounded-[32px] border border-violet-400/20 bg-[#0a0a0d] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.3em] text-violet-300/80">
                    Crypto Payment
                  </div>
                  <h3 className="mt-2 text-3xl font-semibold text-white">
                    Pay {selectedAccount.size} Challenge
                  </h3>
                  <p className="mt-3 max-w-xl text-white/55">
                    Send the exact amount to the wallet below. After payment is
                    received, your order can be reviewed and activated.
                  </p>
                </div>

                <button
                  onClick={() => setPaymentModalOpen(false)}
                  className="shrink-0 rounded-xl border border-white/10 px-3 py-2 text-white/70 transition hover:bg-white/5"
                >
                  Close
                </button>
              </div>

              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-xs uppercase tracking-[0.24em] text-violet-300/80">
                    Payment Method
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {(["USDT", "USDC", "BTC", "ETH"] as const).map((coin) => (
                      <button
                        key={coin}
                        onClick={() => {
                          setPaymentCoin(coin);
                          setCopied(false);
                        }}
                        className={`rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                          paymentCoin === coin
                            ? "border-violet-400/40 bg-violet-500/15 text-violet-300"
                            : "border-white/10 bg-white/[0.02] text-white/70 hover:bg-white/[0.05]"
                        }`}
                      >
                        {coin}
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-violet-300/80">
                      Order Summary
                    </div>

                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="text-white/55">Account</span>
                      <span className="font-medium text-white">
                        {selectedAccount.size}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-sm">
                      <span className="text-white/55">USD Price</span>
                      <span className="font-medium text-white">
                        ${selectedAccount.price}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-sm">
                      <span className="text-white/55">Coin</span>
                      <span className="font-medium text-white">{paymentCoin}</span>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-sm">
                      <span className="text-white/55">Network</span>
                      <span className="font-medium text-white">
                        {selectedPayment.network}
                      </span>
                    </div>

                    <div className="mt-4 border-t border-white/10 pt-4">
                      <div className="text-[11px] uppercase tracking-[0.24em] text-violet-300/80">
                        Exact Amount
                      </div>
                      <div className="mt-2 text-3xl font-semibold text-white">
                        {cryptoAmount} {selectedPayment.symbol}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center justify-between">
                    <div className="text-xs uppercase tracking-[0.24em] text-violet-300/80">
                      Scan QR
                    </div>
                    <div className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                      {selectedPayment.network}
                    </div>
                  </div>

                  <div className="mt-5 flex justify-center rounded-[28px] border border-white/10 bg-white p-5">
                    <QRCodeCanvas
                      value={qrValue}
                      size={190}
                      bgColor="#ffffff"
                      fgColor="#000000"
                    />
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                      Wallet Address
                    </div>

                    <div className="mt-3 break-all text-sm leading-6 text-white/80">
                      {selectedPayment.address}
                    </div>

                    <button
                      onClick={handleCopyAddress}
                      className="mt-4 rounded-2xl border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 transition hover:bg-violet-500/20"
                    >
                      {copied ? "Copied" : "Copy Address"}
                    </button>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/58">
                    Send only{" "}
                    <span className="font-medium text-white">{paymentCoin}</span>{" "}
                    via{" "}
                    <span className="font-medium text-white">
                      {selectedPayment.network}
                    </span>{" "}
                    to this address. Sending through the wrong network may result
                    in lost funds.
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-2xl bg-violet-500 px-5 py-3 font-medium text-white transition hover:bg-violet-400">
                  I Have Paid
                </button>

                <button
                  onClick={() => setPaymentModalOpen(false)}
                  className="rounded-2xl border border-white/10 px-5 py-3 font-medium text-white/75 transition hover:bg-white/5"
                >
                  Back
                </button>

                <button
                  onClick={() => {
                    setPaymentModalOpen(false);
                    setSelectedAccount(null);
                    setCopied(false);
                  }}
                  className="rounded-2xl border border-white/10 px-5 py-3 font-medium text-white/75 transition hover:bg-white/5"
                >
                  Close All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}