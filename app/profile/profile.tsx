"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type ProfileProps = {
  token: string;
};

export default function ProfilePage({ token }: ProfileProps) {
  const [profile, setProfile] = useState<Record<string, any> | undefined>(
    undefined
  );

  const fetchStravaDetails = useCallback(async (token: string) => {
    try {
      const data = await fetch("https://www.strava.com/api/v3/athlete", {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await data.json();
      setProfile(result);
    } catch (err) {
      throw err;
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetchStravaDetails(token);
    }
  }, [token, fetchStravaDetails]);

  return (
    <>
      {profile && (
        <div>
          <h2 className="text-xl text-neutral-900 font-medium">
            {profile.firstname} {profile.lastname}
          </h2>
          <p className="text-neutral-600 mt-1 mb-4">
            {profile.city}, {profile.state}
          </p>
          <Button asChild variant="outline">
            <Link href="/auth/signout">Logout</Link>
          </Button>
        </div>
      )}
    </>
  );
}
