import { Github } from "lucide-react";
import { Button } from "./components/shadcn-ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <main>
      <section className="container flex py-16 text-center md:py-32">
        <div className="mx-auto">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Next.js 14 Starter Template
          </h1>

          <p className="mb-6 max-w-xl text-xl tracking-tight text-zinc-500">
            Next.js 14 starter template using TypeScript, Tailwind CSS,
            Shadcn/ui and Clerk Auth.
          </p>
          <Link
            href="https://github.com/markslorach/next-starter-shadcn-ui-clerk.git"
            target="_blank"
          >
            <Button className="rounded-sm bg-blue-500 px-6 hover:bg-blue-500/90">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
