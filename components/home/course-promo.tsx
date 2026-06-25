import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Media } from "@/components/ui/media";
import { site } from "@/lib/site";

export function CoursePromo() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-card bg-brand px-6 py-12 text-white sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 font-display">
                Unlock Your True Vocal Potential
              </p>
              <h2 className="text-3xl text-white sm:text-4xl">
                Transform Your Voice with Our Digital Course
              </h2>
              <p className="mt-5 max-w-xl text-white/85">
                Dr. Marcella Amoruso&apos;s digital course offers a comprehensive
                program to help you overcome vocal challenges, master essential
                techniques and unleash your authentic sound — everything from
                vocal anatomy to advanced singing methods, all from home.
              </p>
              <div className="mt-8">
                <Button href={site.courseUrl} variant="gold" size="lg">
                  Enroll Now and Begin Your Journey
                </Button>
              </div>
            </div>
            <Media
              src="/photos/course-laptop.jpg"
              alt="Digital course preview"
              tone="mist"
              className="aspect-video w-full"
              rounded="rounded-[1.75rem]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
