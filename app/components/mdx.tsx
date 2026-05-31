"use client";

import Link from "next/link";
import Image from "next/image";
import Markdown from "markdown-to-jsx";
import { highlight } from "sugar-high";
import React from "react";
import { YouTube } from "./youtube";

function CustomLink({ href = "", children, ...props }) {
  // Internal route → client-side navigation.
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  // Same-page anchor.
  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  // External link: only allow safe protocols so a `javascript:`/`data:` href
  // (e.g. from a future untrusted content source) can't execute on click.
  const isSafe = /^(https?:|mailto:)/i.test(href);
  return (
    <a
      href={isSafe ? href : "#"}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}

function RoundedImage(props) {
  return <Image alt={props.alt} width={800} height={600} {...props} />;
}

function Code({ children, ...props }) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    const slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

export function CustomMDX({ source }: { source: string }) {
  return (
    <Markdown
      options={{
        overrides: {
          h1: createHeading(1),
          h2: createHeading(2),
          h3: createHeading(3),
          h4: createHeading(4),
          h5: createHeading(5),
          h6: createHeading(6),
          img: RoundedImage,
          a: CustomLink,
          code: Code,
          YouTube,
          table: ({ children }) => (
            <table className="w-full border-collapse border-spacing-0 text-sm table-fixed">
              {children}
            </table>
          ),
          thead: ({ children }) => (
            <thead className="border-b border-neutral-200">{children}</thead>
          ),
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => (
            <tr className="border-b border-neutral-200">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="text-left py-2 pr-4 font-medium text-neutral-900 break-words align-top">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="py-2 pr-4 text-neutral-700 break-words align-top">
              {children}
            </td>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-neutral-300 pl-4 mb-4 text-neutral-600 italic">
              {children}
            </blockquote>
          ),
        },
      }}
    >
      {source}
    </Markdown>
  );
}
