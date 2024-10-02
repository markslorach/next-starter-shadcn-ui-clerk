"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const routes = [
  { route: "server", path: "/protected/server" },
  { route: "client", path: "/protected/client" },
];

const NavList = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex space-x-4">
        {routes.map(({ route, path }) => (
          <li
            key={route}
            className={cn({
              "text-base text-zinc-600 transition hover:text-blue-500": true,
              "text-blue-500": pathname === path,
            })}
          >
            <Link href={path}>{route}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
