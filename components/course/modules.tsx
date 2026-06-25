import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const modules = [
  {
    title: "Introduction",
    body: "Meet Dr. Marcella Amoruso and understand how this program will transform your voice.",
  },
  {
    title: "Vocal Anatomy",
    body: "Learn how the vocal cords, larynx and diaphragm work, and how to keep your voice healthy.",
  },
  {
    title: "The Power of Breathing",
    body: "Discover essential breathing techniques to improve your projection and vocal control.",
  },
  {
    title: "Obstacles That Block the Voice",
    body: "Identify and overcome physical, technical and mental blocks that limit your singing.",
  },
  {
    title: "Singing Methods",
    body: "Explore Bel Canto, VoiceCraft and Belting to expand your range and artistic expression.",
  },
  {
    title: "Vocal Warm-ups",
    body: "Practical routines to prepare your voice and reduce tension before singing.",
  },
  {
    title: "How to Optimize Your Voice",
    body: "Protect your voice long-term and optimize its quality with advanced techniques and hygiene.",
  },
];

export function CourseModules({ courseUrl }: { courseUrl: string }) {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Course Description"
          title={
            <>
              What You&apos;ll <span className="text-brand">Learn in This Course</span>
            </>
          }
          body="This digital course is divided into seven modules, each designed to cover a key aspect of vocal development — from understanding vocal anatomy to applying advanced techniques."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <div
              key={m.title}
              className="relative rounded-card border border-line bg-white p-7 transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="font-display text-5xl font-bold text-brand/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg text-ink">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{m.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href={courseUrl} variant="gold" size="lg">
            Access the Full Course Now
          </Button>
        </div>
      </Container>
    </section>
  );
}
