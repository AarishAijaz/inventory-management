import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn routing="hash" />
    </div>
  );
}