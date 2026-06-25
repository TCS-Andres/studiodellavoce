import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";

const stats = [
  { end: 40, suffix: "+", label: "Years of Experience" },
  { end: 50, suffix: "k+", label: "Hours of Training" },
  { end: 100, suffix: "k+", label: "Empowered Vocalists" },
];

export function StatsBand() {
  return (
    <section className="py-4">
      <Container>
        <div className="relative overflow-hidden rounded-card bg-brand px-6 py-12 sm:py-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl animate-float" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-magenta/20 blur-3xl animate-float [animation-delay:-4s]" />
          <div className="relative grid gap-8 text-center text-white sm:grid-cols-3">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 120}>
                <p className="font-display text-4xl font-bold sm:text-5xl">
                  <CountUp end={s.end} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm uppercase tracking-wide text-white/80">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
