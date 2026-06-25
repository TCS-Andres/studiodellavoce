import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";

export type PingPongItem = {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  expect?: string[];
  imageLabel?: string;
  imageSrc?: string;
};

export function PingPong({ items }: { items: PingPongItem[] }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-16 sm:gap-24">
          {items.map((item, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal
                key={i}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <div className={cn("relative", flip && "lg:order-2")}>
                  <Media
                    label={item.imageLabel ?? "Photo"}
                    src={item.imageSrc}
                    tone={i % 2 === 0 ? "soft" : "brand"}
                    className="aspect-[4/3] w-full"
                  />
                  <div
                    className={cn(
                      "absolute -z-10 h-40 w-40 rounded-full bg-magenta/10 blur-2xl",
                      flip ? "-right-6 -bottom-6" : "-left-6 -top-6"
                    )}
                  />
                </div>

                <div className={cn(flip && "lg:order-1")}>
                  <Eyebrow>{item.eyebrow}</Eyebrow>
                  <h3 className="mt-3 text-2xl sm:text-3xl leading-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {item.body}
                  </p>

                  {item.expect && item.expect.length > 0 ? (
                    <div className="mt-6">
                      <p className="text-sm font-semibold text-ink">
                        You can expect:
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {item.expect.map((e, j) => (
                          <li key={j} className="flex gap-3 text-sm text-muted">
                            <Check />
                            <span>{e}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function Check() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand text-white">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}
