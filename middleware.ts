import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const token = req.cookies.get("strava-access-token");

  if (token && token.value && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  if ((!token || !token.value) && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/", "/profile"],
};
