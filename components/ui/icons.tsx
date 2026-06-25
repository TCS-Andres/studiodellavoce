type IconProps = { className?: string };

const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function base(children: React.ReactNode, className?: string) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className={className} {...s}>
      {children}
    </svg>
  );
}

export const Icon = {
  spark: ({ className }: IconProps) =>
    base(
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />,
      className
    ),
  star: ({ className }: IconProps) =>
    base(
      <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" />,
      className
    ),
  target: ({ className }: IconProps) =>
    base(
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="0.6" fill="currentColor" />
      </>,
      className
    ),
  user: ({ className }: IconProps) =>
    base(
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
      </>,
      className
    ),
  wave: ({ className }: IconProps) =>
    base(
      <path d="M3 12c1.5 0 1.5-5 3-5s1.5 10 3 10 1.5-12 3-12 1.5 9 3 9 1.5-3 3-3" />,
      className
    ),
  heart: ({ className }: IconProps) =>
    base(
      <path d="M12 20s-7-4.4-7-9.5A4 4 0 0 1 12 7a4 4 0 0 1 7 3.5C19 15.6 12 20 12 20Z" />,
      className
    ),
  globe: ({ className }: IconProps) =>
    base(
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.5 2.4 2.5 14.6 0 17M12 3.5c-2.5 2.4-2.5 14.6 0 17" />
      </>,
      className
    ),
  shield: ({ className }: IconProps) =>
    base(
      <path d="M12 3l7 3v5c0 4.4-3 8-7 10-4-2-7-5.6-7-10V6l7-3Z" />,
      className
    ),
  mic: ({ className }: IconProps) =>
    base(
      <>
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" />
      </>,
      className
    ),
  group: ({ className }: IconProps) =>
    base(
      <>
        <circle cx="9" cy="9" r="3" />
        <path d="M3.5 19c0-3 2.4-5 5.5-5s5.5 2 5.5 5" />
        <path d="M16 6.5a3 3 0 0 1 0 5.8M17 14c2.5 0 4.5 2 4.5 5" />
      </>,
      className
    ),
  play: ({ className }: IconProps) =>
    base(<path d="M8 5.5v13l11-6.5-11-6.5Z" />, className),
  laptop: ({ className }: IconProps) =>
    base(
      <>
        <rect x="4" y="5" width="16" height="11" rx="2" />
        <path d="M2.5 20h19" />
      </>,
      className
    ),
};

export type IconName = keyof typeof Icon;
