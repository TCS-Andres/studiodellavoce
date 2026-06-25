"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";

export type FaqItem = { q: string; a: string };

export function Faq({
  eyebrow = "FAQ",
  title,
  items,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  items: FaqItem[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title ?? <>Frequently Asked <span className="text-brand">Questions</span></>}
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-line bg-white"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-medium text-ink">
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-mist text-purple transition-transform",
                      isOpen && "rotate-45"
                    )}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
