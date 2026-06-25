"use client";

import { useState } from "react";
import { ButtonEl } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const interests = [
  "Individual Lessons",
  "Group Lessons",
  "Ministerial Choir Development",
  "Online Community and Masterclass",
  "Other / General Questions",
];

const sources = [
  "Social Media",
  "Word of Mouth",
  "Referred by a Friend or Current Student",
  "Church",
  "Other",
];

const fieldCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-purple focus:ring-2 focus:ring-purple/15";
const labelCls = "mb-1.5 block text-sm font-medium text-ink";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [checked, setChecked] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const toggle = (v: string) =>
    setChecked((c) => (c.includes(v) ? c.filter((x) => x !== v) : [...c, v]));

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (checked.length === 0) {
      setError("Please select at least one option under “Interested In”.");
      return;
    }
    setError(null);
    // Front-end only: no backend wired yet. Swap in a handler (Resend / Formspree / route handler) here.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-card border border-line bg-white p-10 text-center shadow-sm">
        <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl text-ink">Thank you!</h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted">
          Your message has been received. We&apos;re excited to be part of your
          vocal journey and will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-card border border-line bg-white p-7 shadow-[0_30px_80px_-50px_rgba(42,21,56,0.4)] sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="firstName">
            First Name <Req />
          </label>
          <input id="firstName" name="firstName" required className={fieldCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="lastName">
            Last Name <Req />
          </label>
          <input id="lastName" name="lastName" required className={fieldCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">
            Email Address <Req />
          </label>
          <input id="email" name="email" type="email" required className={fieldCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">
            Phone Number
          </label>
          <input id="phone" name="phone" type="tel" className={fieldCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="city">
            City / State <Req />
          </label>
          <input id="city" name="city" required className={fieldCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="country">
            Country <Req />
          </label>
          <input id="country" name="country" required className={fieldCls} />
        </div>
      </div>

      <fieldset className="mt-7">
        <legend className={labelCls}>
          Interested In <Req />
        </legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {interests.map((opt) => {
            const active = checked.includes(opt);
            return (
              <label
                key={opt}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors",
                  active
                    ? "border-purple bg-mist text-ink"
                    : "border-line bg-white text-muted hover:border-purple/40"
                )}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={active}
                  onChange={() => toggle(opt)}
                />
                <span
                  className={cn(
                    "inline-flex h-5 w-5 flex-none items-center justify-center rounded-md border",
                    active ? "border-purple bg-brand text-white" : "border-line"
                  )}
                >
                  {active ? (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  ) : null}
                </span>
                {opt}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-7">
        <label className={labelCls} htmlFor="message">
          How can we serve you?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us more about what you're looking for, or ask any questions you have. The more detail, the better!"
          className={cn(fieldCls, "resize-none")}
        />
      </div>

      <fieldset className="mt-7">
        <legend className={labelCls}>How Did You Hear About Us?</legend>
        <div className="flex flex-wrap gap-2.5">
          {sources.map((opt) => (
            <label
              key={opt}
              className="flex cursor-pointer items-center gap-2.5 rounded-pill border border-line bg-white px-4 py-2 text-sm text-muted transition-colors has-[:checked]:border-purple has-[:checked]:bg-mist has-[:checked]:text-ink"
            >
              <input type="radio" name="source" value={opt} className="accent-purple" />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      {error ? (
        <p className="mt-5 rounded-xl bg-magenta/10 px-4 py-3 text-sm text-magenta">
          {error}
        </p>
      ) : null}

      <div className="mt-8">
        <ButtonEl type="submit" variant="gradient" size="lg" className="w-full sm:w-auto">
          Send Message
        </ButtonEl>
      </div>
    </form>
  );
}

function Req() {
  return <span className="text-magenta">*</span>;
}
