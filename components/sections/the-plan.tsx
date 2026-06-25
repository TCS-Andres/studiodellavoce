import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export type PlanStep = {
  title: string;
  body: string;
};

const defaultSteps: PlanStep[] = [
  {
    title: "Schedule an Assessment",
    body: "Reach out to us for an initial assessment where we'll discuss your vocal goals, challenges, and what you hope to achieve. This helps us understand where you are now and where you want to be.",
  },
  {
    title: "Receive Your Customized Vocal Plan",
    body: "Dr. Marcella Amoruso creates a personalized vocal development plan tailored to your specific needs — whether you're overcoming technical limitations, refining your artistic voice, or preparing for performance.",
  },
  {
    title: "Unlock a Voice without Limits",
    body: "Start your lessons and follow the path to vocal freedom and mastery. Dr. Amoruso's expert guidance helps you break through mental and physical barriers to reach your full potential.",
  },
];

export function ThePlan({
  eyebrow = "The Plan",
  title,
  body = "At Studio della Voce, we make it easy to begin your journey toward vocal transformation. Our approach is personalized and supportive, ensuring you have the right plan and guidance from day one.",
  steps = defaultSteps,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  body?: string;
  steps?: PlanStep[];
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={
            title ?? (
              <>
                Steps to <span className="text-brand">Get Started</span>
              </>
            )
          }
          body={body}
        />

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent md:block" />
          {steps.map((step, i) => (
            <Reveal
              key={i}
              delay={i * 140}
              className="relative flex flex-col items-center text-center"
            >
              <div className="group relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white shadow-[0_16px_40px_-16px_rgba(94,46,146,0.7)] transition-transform duration-300 hover:scale-105">
                <span className="absolute inset-0 rounded-full bg-brand opacity-60 blur-md transition-opacity duration-300 group-hover:opacity-90" />
                <span className="relative font-display text-2xl font-bold">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-xl text-ink">{step.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
