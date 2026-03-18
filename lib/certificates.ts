export type CertificateRecord = {
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

export const certificateRecords: Record<string, CertificateRecord> = {
  "BB-EVAL-2026-0001": {
    id: "BB-EVAL-2026-0001",
    traderName: "Cripi Ureynols",
    accountSize: "$120K",
    issuedAt: "March 16, 2026",
    program: "BlackBit Evaluation Program",
    status: "Verified",
    template: "evaluation-passed",
  },

  "BB-FUNDED-2026-0002": {
    id: "BB-FUNDED-2026-0002",
    traderName: "LUCASARRONTRADING",
    accountSize: "$120K",
    issuedAt: "March 16, 2026",
    activationDate: "March 18, 2026",
    program: "BlackBit Funded Access",
    status: "Verified",
    template: "funded-access",
  },

  "BB-PERF-2026-0003": {
    id: "BB-PERF-2026-0003",
    traderName: "LUCASARRONTRADING",
    accountSize: "$120K",
    issuedAt: "March 16, 2026",
    profit: "+$18,420",
    period: "30 Days",
    winRate: "71%",
    program: "BlackBit Performance Registry",
    status: "Verified",
    template: "performance-certificate",
  },
};