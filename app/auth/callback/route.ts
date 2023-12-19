import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const TOKEN_ENDPOINT = "https://www.strava.com/oauth/token";

const getAccessToken = async (code: string) => {
  const body = JSON.stringify({
    client_id: process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID,
    client_secret: process.env.STRAVA_CLIENT_SECRET,
    code,
    grant_type: "authorization_code",
  });

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body,
  });

  return response.json();
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (code) {
    const result = await getAccessToken(code);
    cookies().set("strava-refresh-token", result.refresh_token);
    cookies().set("strava-access-token", result.access_token);
  }

  return NextResponse.redirect(new URL("/", req.url));
}
