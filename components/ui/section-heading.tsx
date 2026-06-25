import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-semibold uppercase tracking-[0.22em] font-display",
        light ? "text-white/70" : "text-magenta",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  light = false,
  className,
  bodyClassName,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  body?: React.ReactNode;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className
      )}
    >
      {eyebrow ? (
        <div className="mb-3">
          <Eyebrow light={light}>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.1]",
          light ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-5 text-base sm:text-lg leading-relaxed",
            light ? "text-white/80" : "text-muted",
            align === "center" ? "mx-auto max-w-2xl" : "",
            bodyClassName
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
