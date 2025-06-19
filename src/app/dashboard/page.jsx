import { getAuthSession } from "@/lib/auth";
import { notFound } from "next/navigation";

export default async function Dashboard() {
  const session = await getAuthSession();
  if (!session) {
    return (
      <section className="flex justify-center items-center h-screen w-full">
        Not Authenticated
      </section>
    );
  }
  return (
    <section className="flex justify-center items-center h-screen w-full">
      Welcome back {session.user.name}
    </section>
  );
}
