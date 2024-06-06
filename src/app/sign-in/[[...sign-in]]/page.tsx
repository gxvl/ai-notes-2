import { SignIn } from "@clerk/nextjs";
import logo from "@/app/assets/logo.png";
import Image from "next/image";

export default function SignInPage() {
  return <div className="flex h-screen items-center justify-center">
    <SignIn appearance={{ variables: { colorPrimary: "#0F172A" } }} />
  </div>
}