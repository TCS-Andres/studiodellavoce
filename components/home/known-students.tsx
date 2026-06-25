import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { VideoThumb } from "@/components/ui/video-thumb";

const students = [
  {
    name: "Eiffel 65",
    youtubeId: "AUsAiGtItwA",
    image: "/photos/known-eiffel.jpg",
    points: [
      "Globally renowned Italian electronic group known for the hit “Blue (Da Ba Dee).”",
      "Achieved international success and multiple awards, including a Grammy nomination.",
      "Their distinctive sound and vocal style were refined with Dr. Marcella Amoruso.",
    ],
  },
  {
    name: "Neja",
    youtubeId: "uS-I1jJrxfY",
    image: "/photos/known-neja.jpg",
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
          {students.map((st, i) => (
            <Reveal key={st.name} delay={i * 120} className="flex flex-col">
              <VideoThumb
                youtubeId={st.youtubeId}
                title={st.name}
                image={st.image}
              />
              <h3 className="mt-5 text-2xl text-ink">{st.name}</h3>
              <ul className="mt-3 space-y-2">
                {st.points.map((p, j) => (
                  <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-magenta" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
