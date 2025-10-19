"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkedInIcon, InstagramIcon, YouTubeIcon } from "./icons";

const navItems = {
  "/": {
    name: "Sam Blakelock",
  },
  "/writing": {
    name: "Writing",
  },
  "/music": {
    name: "Music",
  },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="-ml-[8px] mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-5">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive =
                pathname === path ||
                (path === "/writing" && pathname.startsWith("/writing/"));

              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 ${
                    isActive
                      ? "text-neutral-800 dark:text-neutral-200"
                      : "text-neutral-600 dark:text-neutral-400"
                  }`}
                >
                  {name}
                  {isActive && (
                    <div className="absolute bottom-0 left-2 right-2 h-px bg-neutral-800 dark:bg-neutral-200 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-row space-x-2">
            <a
              href="https://www.linkedin.com/in/samblakelock/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative p-1"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.instagram.com/samblakelock"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative p-1"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.youtube.com/@samblakelockofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative p-1"
              aria-label="YouTube"
            >
              <YouTubeIcon />
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}
