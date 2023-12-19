import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  cookies().delete("strava-refresh-token");
  cookies().delete("strava-access-token");

  return NextResponse.redirect(new URL("/", req.url));
}
