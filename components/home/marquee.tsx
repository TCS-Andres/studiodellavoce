const phrase = "One Song Can Change Your Destiny";

export function Marquee() {
  // duplicate the sequence so the -50% translate loops seamlessly
  const items = Array.from({ length: 8 });
  return (
    <section className="border-y border-line bg-white py-7 sm:py-9">
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((_, i) => (
            <span key={i} className="flex items-center">
              <span className="px-8 font-display text-2xl font-semibold sm:text-4xl">
                One Song Can <span className="text-brand">Change Your Destiny</span>
              </span>
              <Note />
            </span>
          ))}
        </div>
      </div>
      <span className="sr-only">{phrase}</span>
    </section>
  );
}

function Note() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      className="flex-none text-magenta/50"
      fill="currentColor"
      aria-hidden
    >
      <path d="M9 17.5a2.5 2.5 0 1 1-2.5-2.5c.55 0 1.06.18 1.5.49V5l11-2v9.5a2.5 2.5 0 1 1-2.5-2.5c.55 0 1.06.18 1.5.49V6.2L9 7.7v9.8Z" />
    </svg>
  );
}
