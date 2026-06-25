import { Container } from "@/components/ui/container";

const stats = [
  { value: "40+", label: "Years of Experience" },
  { value: "50k+", label: "Hours of Training" },
  { value: "100k+", label: "Empowered Vocalists" },
];

export function StatsBand() {
  return (
    <section className="py-4">
      <Container>
        <div className="relative overflow-hidden rounded-card bg-brand px-6 py-12 sm:py-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-magenta/20 blur-3xl" />
          <div className="relative grid gap-8 text-center text-white sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl font-bold sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-wide text-white/80">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
