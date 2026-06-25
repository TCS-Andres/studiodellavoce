import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function PageHero({
  eyebrow,
  title,
  body,
  cta,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="relative -mt-[72px] overflow-hidden bg-brand pb-20 pt-[128px] text-white sm:pb-24 sm:pt-[150px]">
      {/* decorative bloom */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-magenta/20 blur-3xl" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <div className="mb-4">
              <Eyebrow light>{eyebrow}</Eyebrow>
            </div>
          ) : null}
          <h1 className="text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          {body ? (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              {body}
            </p>
          ) : null}
          {cta ? (
            <div className="mt-9">
              <Button href={cta.href} variant="white" size="lg">
                {cta.label}
              </Button>
            </div>
          ) : null}
        </div>
      </Container>
      {/* soft curved bottom */}
      <div className="absolute inset-x-0 bottom-0 h-10 rounded-t-[50%] bg-cream/0" />
    </section>
  );
}
