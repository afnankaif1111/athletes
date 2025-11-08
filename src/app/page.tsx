import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ui/ModeToggle";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SignedOut>
              <SignInButton mode="modal"/>
              <Button>Sign in</Button>
      </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <ModeToggle/>
    </div>
  );
}
