import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../shadcn-ui/button";
import NavList from "./NavList";
import { Citrus, LogInIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="h-16 text-lg">
      <div className="container flex h-full items-center justify-between">
        <div className="flex items-center gap-x-6 sm:gap-x-12">
          <Link href="/" className="flex items-center font-semibold">
            <Citrus className="mr-2 h-6 w-6 text-blue-500" />
            <span className="hidden sm:block">
              next<span className="text-blue-500">starter</span>
            </span>
          </Link>

          <NavList />
        </div>

        <SignedOut>
          <SignInButton>
            <Button className="hidden rounded-sm bg-blue-500 px-6 hover:bg-blue-500/90 sm:block">
              Sign In
            </Button>
          </SignInButton>

          <SignInButton>
            <Button
              size="icon"
              className="rounded-sm bg-blue-500 hover:bg-blue-500/90 sm:hidden"
            >
              <LogInIcon className="h-5 w-5" />
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
