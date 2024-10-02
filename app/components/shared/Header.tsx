import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../shadcn/button";
import NavList from "./NavList";

const Header = () => {
  return (
    <header className="h-16 border-b text-lg">
      <div className="container flex h-full items-center justify-between">
        <div className="flex items-center space-x-12">
          <Link href="/" className="font-semibold">
            next<span className="text-blue-500">starter</span>.
          </Link>

          <NavList />
        </div>

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

export default Header;
