import { cookies } from "next/headers";
import ProfilePage from "./profile";

export default function Profile() {
  const cookieStore = cookies();

  const token = cookieStore.get("strava-access-token");

  return (
    <main className="container mx-auto py-16 text-center">
      {token && <ProfilePage token={token.value} />}
    </main>
  );
}
