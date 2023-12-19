import { Button } from "@/components/ui/button";
import { getAuthUrl } from "@/lib/getAuthUrl";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto py-16 text-center">
      <Button asChild>
        <Link href={getAuthUrl()}>Login with Strava</Link>
      </Button>
    </main>
  );
}
