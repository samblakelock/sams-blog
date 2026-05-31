"use client";

import { ArrowIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/samblakelock/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">linkedin</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600" suppressHydrationWarning>
        © {new Date().getFullYear()} Sam Blakelock
      </p>
    </footer>
  );
}
