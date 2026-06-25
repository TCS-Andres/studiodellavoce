"use client";

import { useEffect, useRef, useState } from "react";
import { Media } from "@/components/ui/media";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

/**
 * A video thumbnail that opens an embedded YouTube player in an on-site
 * lightbox (so visitors never leave the page). Closes on backdrop click,
 * the X button, or Escape.
 */
export function VideoThumb({
  youtubeId,
  title,
  image,
  rounded = "rounded-[2rem]",
}: {
  youtubeId: string;
  title: string;
  image?: string;
  rounded?: string;
}) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Play ${title} video`}
        className={cn(
          "group relative block w-full cursor-pointer overflow-hidden",
          rounded
        )}
      >
        <Media
          src={image}
          alt={`${title} — performance`}
          tone="brand"
          className="aspect-video w-full transition-transform duration-500 group-hover:scale-[1.04]"
          rounded={rounded}
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-purple shadow-lg transition-transform duration-200 group-hover:scale-110">
            <Icon.play className="ml-0.5 h-7 w-7" />
          </span>
        </span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} video`}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={title}
                allow="autoplay; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
