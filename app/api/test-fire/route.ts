import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";

export async function GET() {
  try {
    console.log("DB VALUE:", db);

    await db.collection("certificates").doc("ping").set({
      ok: true,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("FIREBASE TEST ERROR:", error);
    return NextResponse.json(
      { ok: false, error: "Firebase connection failed" },
      { status: 500 }
    );
  }
}