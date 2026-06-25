import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Media } from "@/components/ui/media";
import { Icon } from "@/components/ui/icons";

const students = [
  {
    name: "Eiffel 65",
    href: "https://www.youtube.com/watch?v=AUsAiGtItwA",
    points: [
      "Globally renowned Italian electronic group known for the hit “Blue (Da Ba Dee).”",
      "Achieved international success and multiple awards, including a Grammy nomination.",
      "Their distinctive sound and vocal style were refined with Dr. Marcella Amoruso.",
    ],
  },
  {
    name: "Neja",
    href: "https://www.youtube.com/watch?v=uS-I1jJrxfY",
    points: [
      "Acclaimed Italian dance and pop artist, known for hits like “Restless” and “Shock!”",
      "Has topped charts across Europe and performed on major international stages.",
      "Developed her vocal technique and artistic expression through Dr. Marcella's guidance.",
    ],
  },
];

export function KnownStudents() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Known Students"
          title={
            <>
              Voices That Shine on <span className="text-brand">Global Stages</span>
            </>
          }
          body="Over the past 40 years, Dr. Marcella Amoruso has helped thousands of students unlock their true vocal potential. Many have gone on to achieve success and recognition — a testament to what's possible with the right guidance, dedication and passion."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {students.map((st) => (
            <div key={st.name} className="flex flex-col">
              <a
                href={st.href}
                target="_blank"
                rel="noreferrer"
                className="group relative block"
                aria-label={`Watch ${st.name}`}
              >
                <Media
                  label={`${st.name} — performance`}
                  tone="brand"
                  className="aspect-video w-full"
                  rounded="rounded-[2rem]"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-purple shadow-lg transition-transform duration-200 group-hover:scale-110">
                    <Icon.play className="ml-0.5 h-7 w-7" />
                  </span>
                </span>
              </a>
              <h3 className="mt-5 text-2xl text-ink">{st.name}</h3>
              <ul className="mt-3 space-y-2">
                {st.points.map((p, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-magenta" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
