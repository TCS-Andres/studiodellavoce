import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";

const values = [
  {
    icon: Icon.wave,
    title: "Vocal Transformation",
    body: "Personalized training that heals and frees your true voice.",
  },
  {
    icon: Icon.star,
    title: "World-Class Teacher",
    body: "Learn from Dr. Marcella Amoruso, one of the world's leading experts in vocal mastery.",
  },
  {
    icon: Icon.target,
    title: "Masterful Preparation",
    body: "Gain the technical and artistic skills needed to perform with confidence and precision.",
  },
];

export function ValueStack() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <div className="grid gap-5 sm:grid-cols-3">
          {values.map((v) => {
            const I = v.icon;
            return (
              <div
                key={v.title}
                className="group rounded-card border border-line bg-white p-7 shadow-[0_20px_50px_-36px_rgba(42,21,56,0.5)] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white">
                  <I className="h-7 w-7" />
                </div>
                <h3 className="text-xl text-ink">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {v.body}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
