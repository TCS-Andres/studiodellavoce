"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";

export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
};

const defaults: Testimonial[] = [
  {
    quote:
      "When I first started I had an issue with my tongue, but after my trainings with Dr. Marcella I was able to gain control over the muscles in my face and discover a new voice that I never knew I had inside of me.",
    name: "Marlon V",
    role: "Vocalist",
  },
];

export function Testimonials({
  eyebrow = "Testimonials",
  title,
  body = "Our students' journeys are at the heart of what we do. Hear from singers who have experienced remarkable growth, confidence, and freedom in their voice through personalized guidance at Studio della Voce.",
  items = defaults,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  body?: string;
  items?: Testimonial[];
}) {
  const [index, setIndex] = useState(0);
  const count = items.length;
  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);
  const active = items[index];

  return (
    <section className="bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={
            title ?? (
              <>
                Real Voices, <span className="text-brand">Real Transformation</span>
              </>
            )
          }
          body={body}
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="relative rounded-card bg-white px-8 py-12 text-center shadow-[0_30px_80px_-40px_rgba(42,21,56,0.4)] sm:px-14">
            <span
              aria-hidden
              className="pointer-events-none absolute left-6 top-3 select-none font-display text-[5rem] leading-none text-magenta/20"
            >
              &ldquo;
            </span>
            <blockquote className="relative">
              <p className="text-balance text-lg font-semibold italic leading-relaxed text-brand sm:text-xl">
                {active.quote}
              </p>
              <div className="mx-auto mt-7 h-px w-40 bg-slate/40" />
              <footer className="mt-5 text-base">
                <span className="font-bold text-slate">{active.name}</span>
                {active.role ? (
                  <span className="text-slate/70"> | {active.role}</span>
                ) : null}
              </footer>
            </blockquote>
          </div>

          {count > 1 && (
            <>
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="absolute -left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-purple shadow-md transition-colors hover:bg-purple hover:text-white sm:flex lg:-left-6"
              >
                <Arrow dir="left" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="absolute -right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-purple shadow-md transition-colors hover:bg-purple hover:text-white sm:flex lg:-right-6"
              >
                <Arrow dir="right" />
              </button>

              <div className="mt-7 flex items-center justify-center gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      i === index ? "w-7 bg-brand" : "w-2 bg-purple/25 hover:bg-purple/40"
                    )}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {dir === "left" ? <path d="m15 6-6 6 6 6" /> : <path d="m9 6 6 6-6 6" />}
    </svg>
  );
}
