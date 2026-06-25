import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Media } from "@/components/ui/media";
import { Icon } from "@/components/ui/icons";

const props = [
  { icon: Icon.user, title: "Personalized Coaching", body: "Tailored lessons to meet your unique vocal needs and goals." },
  { icon: Icon.target, title: "Technical Mastery", body: "Improve your range, control and tone with proven techniques." },
  { icon: Icon.heart, title: "Vocal Health", body: "Maintain a healthy voice for lasting performance and longevity." },
  { icon: Icon.globe, title: "Cultural Enrichment", body: "Explore diverse vocal styles with Dr. Amoruso's ethnomusicology expertise." },
  { icon: Icon.spark, title: "Confidence & Freedom", body: "Build confidence and unlock your authentic artistic voice." },
  { icon: Icon.mic, title: "Performance Readiness", body: "Prepare for live performances, auditions and recordings with ease." },
];

export function Difference() {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="relative">
          <Media
            label="Dr. Marcella Amoruso"
            tone="brand"
            className="aspect-[4/5] w-full lg:sticky lg:top-24"
            rounded="rounded-[2.5rem]"
          />
        </div>

        <div>
          <Eyebrow>Our Difference</Eyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.1]">
            The <span className="text-brand">Doctor of the Voice</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            With over 40 years of experience, Dr. Marcella Amoruso offers
            unparalleled knowledge of vocal techniques and a personalized
            approach, helping every vocalist reach their highest potential.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {props.map((p) => {
              const I = p.icon;
              return (
                <div key={p.title} className="flex gap-4">
                  <div className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white text-purple shadow-sm">
                    <I className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base text-ink">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {p.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
