export default function BlackBitMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="18"
        stroke="rgba(167,139,250,0.35)"
        strokeWidth="2"
      />

      <path
        d="M24 16V48"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M24 18H34C40 18 42 21 42 25C42 29 39 31 35 31H24"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M24 31H36C41 31 44 34 44 38C44 43 40 46 34 46H24"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}