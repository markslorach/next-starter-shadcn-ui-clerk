import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../shadcn/button";

const NavBar = () => {
  return (
    <header className="h-16 border-b text-lg">
      <div className="container flex h-full items-center justify-between">
        <Link href="/" className="font-semibold">
          Next<span className="text-blue-500">Starter</span>.
        </Link>

        <SignedOut>
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default NavBar;
