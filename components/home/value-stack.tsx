import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";

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
          {values.map((v, i) => {
            const I = v.icon;
            return (
              <Reveal key={v.title} delay={i * 110} className="h-full">
                <div className="group h-full rounded-card border border-line bg-white p-7 shadow-[0_20px_50px_-36px_rgba(42,21,56,0.5)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-40px_rgba(42,21,56,0.6)]">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <I className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl text-indigo">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
