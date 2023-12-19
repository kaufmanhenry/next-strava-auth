import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto py-16 text-center">
      <Button asChild>
        <Link href="/">Login with Strava</Link>
      </Button>
    </main>
  );
}
