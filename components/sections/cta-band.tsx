import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CtaBand({
  eyebrow,
  title,
  body,
  cta,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: string;
  cta: { label: string; href: string };
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-card bg-brand px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-magenta/25 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            {eyebrow ? (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 font-display">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-3xl text-white sm:text-4xl">{title}</h2>
            {body ? (
              <p className="mx-auto mt-5 max-w-xl text-white/85">{body}</p>
            ) : null}
            <div className="mt-8">
              <Button href={cta.href} variant="white" size="lg">
                {cta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
