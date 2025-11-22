import { incrementVisits, getVisits } from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function POST() {
  const newCount = incrementVisits();
  return NextResponse.json({ visits: newCount });
}

export async function GET() {
  const currentCount = getVisits();
  return NextResponse.json({ visits: currentCount });
}
