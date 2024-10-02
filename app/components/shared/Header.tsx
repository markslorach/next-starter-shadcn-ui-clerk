import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../shadcn-ui/button";
import NavList from "./NavList";

const Header = () => {
  return (
    <header className="h-16 border-b text-lg">
      <div className="container flex h-full items-center justify-between">
        <div className="flex items-center gap-x-6 sm:gap-x-12">
          <Link href="/" className="font-semibold">
            next<span className="text-blue-500">starter</span>.
          </Link>

          <NavList />
        </div>

        <SignedOut>
          <SignInButton>
            <Button className="bg-blue-500 hover:bg-blue-500/90">
              Sign In
            </Button>
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
