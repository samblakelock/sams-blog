"use client";

import { useState } from "react";

type YouTubeProps = {
  id: string;
  title?: string;
};

export function YouTube({ id, title = "YouTube video" }: YouTubeProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full my-6 overflow-hidden rounded-lg bg-black">
      {playing ? (
        <iframe
          // eslint-disable-next-line no-secrets/no-secrets
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer border-0 p-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/70 transition-transform group-hover:scale-110 md:h-20 md:w-20">
              <svg
                viewBox="0 0 24 24"
                fill="white"
                className="ml-1 h-7 w-7 md:h-9 md:w-9"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
