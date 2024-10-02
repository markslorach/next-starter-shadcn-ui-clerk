import Link from "next/link";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto h-16 border-t">
      <div className="container flex h-full items-center justify-between">
        <small className="text-zinc-500">
          <Link href="https://www.markslorach.com/" target="_blank">
            &copy; 2024 Mark Slorach
          </Link>
        </small>

        <Link
          href="https://github.com/markslorach/next-starter-shadcn-ui.git"
          target="_blank"
        >
          <Github className="h-5 w-5" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
