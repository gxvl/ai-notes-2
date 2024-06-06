import Image from "next/image";
import logo from "@/app/assets/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function HomePage() {
  const { userId } = auth();

  if (userId) redirect("/notes");

  return <main className="flex flex-col h-screen items-center justify-center
  gap-5">
    <div className="flex items-center gap-4">
      <Image src={logo} alt="logo" width={100} height={100} />
      <span className="font-extrabold tracking-tight text-4xl 
      lg:text-5xl">
        ai-notes
      </span>
    </div>
    <p className="text-center max-w-prose">
      An intelligent note-taking app with AI integration built with OpenAI.
    </p>
    <Button size="lg" asChild>
      <Link href="/notes">
        Get started!
      </Link>
    </Button>
  </main>
}