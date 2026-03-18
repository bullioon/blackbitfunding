import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";

function slugifyType(template: string) {
  if (template === "evaluation-passed") return "EVAL";
  if (template === "funded-access") return "FUNDED";
  if (template === "performance-certificate") return "PERF";
  return "CERT";
}

function generateCertificateId(template: string) {
  const year = new Date().getFullYear();
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `BB-${slugifyType(template)}-${year}-${rand}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const traderName = String(body.traderName || "").trim();
    const accountSize = String(body.accountSize || "").trim();
    const issuedAt = String(body.issuedAt || "").trim();
    const program = String(body.program || "").trim();
    const status = String(body.status || "Verified").trim();
    const template = String(body.template || "evaluation-passed").trim();
    const activationDate = body.activationDate ? String(body.activationDate).trim() : "";
    const profit = body.profit ? String(body.profit).trim() : "";
    const period = body.period ? String(body.period).trim() : "";
    const winRate = body.winRate ? String(body.winRate).trim() : "";

    if (!traderName || !accountSize || !issuedAt || !program || !template) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const id = generateCertificateId(template);

    const cert = {
      id,
      traderName,
      accountSize,
      issuedAt,
      program,
      status,
      template,
      activationDate: activationDate || null,
      profit: profit || null,
      period: period || null,
      winRate: winRate || null,
      createdAt: new Date().toISOString(),
    };

    await db.collection("certificates").doc(id).set(cert);

    return NextResponse.json({
      ok: true,
      certificate: cert,
      verifyUrl: `/verify/${id}`,
    });
  } catch (error) {
    console.error("CREATE CERTIFICATE ERROR:", error);

    return NextResponse.json(
      { ok: false, error: "Failed to create certificate." },
      { status: 500 }
    );
  }
}