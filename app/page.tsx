import { Github } from "lucide-react";
import { Button } from "./components/shadcn-ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <main>
      <section className="container py-24 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Next.js 14 Starter Template
        </h1>

        <p className="mx-auto mb-6 max-w-xl text-xl tracking-tight text-zinc-500 sm:text-2xl">
          Next.js 14 starter template using TypeScript, Tailwind CSS, Shadcn/ui
          and Clerk Auth.
        </p>
        <Link
          href="https://github.com/markslorach/next-starter-shadcn-ui-clerk.git"
          target="_blank"
        >
          <Button className="bg-blue-500 hover:bg-blue-500/90">
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
