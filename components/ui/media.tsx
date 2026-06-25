import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Media: renders a real optimized image when `src` is given, else a branded
 * placeholder. Use `fit="contain"` for transparent cutout subjects (e.g. the
 * hero singers / Dr. Marcella) so they sit on the brand gradient like Figma.
 */
export function Media({
  src,
  alt,
  label,
  className,
  rounded = "rounded-card",
  tone = "soft",
  fit = "cover",
  position = "object-center",
  priority = false,
}: {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  rounded?: string;
  tone?: "soft" | "brand" | "mist";
  fit?: "cover" | "contain";
  position?: string;
  priority?: boolean;
}) {
  const toneCls =
    tone === "brand"
      ? "bg-brand"
      : tone === "mist"
        ? "bg-mist"
        : "bg-brand-soft";

  if (src) {
    const contain = fit === "contain";
    return (
      <div
        className={cn(
          "relative overflow-hidden",
          rounded,
          contain && toneCls,
          className
        )}
      >
        {contain ? (
          <div className="pointer-events-none absolute -top-1/4 right-0 h-2/3 w-2/3 rounded-full bg-white/15 blur-3xl" />
        ) : null}
        <Image
          src={src}
          alt={alt ?? label ?? ""}
          fill
          priority={priority}
          className={cn(contain ? "object-contain" : "object-cover", position)}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden flex items-center justify-center",
        toneCls,
        rounded,
        className
      )}
      aria-label={label ?? alt}
      role="img"
    >
      <div className="pointer-events-none absolute -top-1/3 -right-1/4 h-2/3 w-2/3 rounded-full bg-white/20 blur-3xl" />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center text-white/85">
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-80"
        >
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z" />
          <circle cx="12" cy="13" r="3.5" />
        </svg>
        {label ? (
          <span className="text-xs font-medium tracking-wide uppercase opacity-90 font-display">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
