import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section className="relative -mt-[72px] overflow-hidden pt-[72px]">
      {/* gradient wash + blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-mist via-cream to-cream" />
      <div className="pointer-events-none absolute -left-24 top-24 -z-10 h-80 w-80 rounded-full bg-magenta/15 blur-3xl animate-float" />
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-teal/15 blur-3xl animate-float [animation-delay:-3s]" />

      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <Reveal>
          <p className="mb-4 text-lg uppercase tracking-[0.04em] text-ink/90 sm:text-xl [font-variant:all-small-caps]">
            Discover Your True Voice
          </p>
          <h1 className="text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-[3.9rem] lg:leading-[1.18]">
            Voice <span className="text-brand">Restoration</span> and Vocal{" "}
            <span className="text-brand">Transformation</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            At Studio della Voce by Dr. Marcella Amoruso, we help vocalists —
            from amateurs to professionals — overcome mental, technical and
            physical limitations so they can reach their true vocal potential and
            discover their most authentic, powerful voice.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Schedule Lesson
            </Button>
            <Button href="/about" variant="outline" size="lg">
              Meet Dr. Marcella
            </Button>
          </div>
        </Reveal>

        <Reveal className="relative" delay={150}>
          <Media
            src="/photos/hero-singers.png"
            alt="Two vocalists performing"
            tone="brand"
            fit="contain"
            position="object-bottom"
            priority
            className="aspect-[4/5] w-full"
            rounded="rounded-[2.5rem]"
          />
          {/* floating accent card */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white px-5 py-4 shadow-[0_24px_60px_-30px_rgba(42,21,56,0.5)] sm:block animate-float">
            <p className="font-display text-2xl font-bold text-brand">40+ yrs</p>
            <p className="text-xs text-muted">of vocal mastery</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
