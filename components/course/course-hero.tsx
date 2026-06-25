import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";

export function CourseHero({ courseUrl }: { courseUrl: string }) {
  return (
    <section className="relative -mt-[72px] overflow-hidden bg-brand pb-20 pt-[120px] text-white sm:pb-24 sm:pt-[140px]">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-magenta/20 blur-3xl" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4">
            <Eyebrow light>Digital Course</Eyebrow>
          </div>
          <h1 className="text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.3rem]">
            Unlock Your True Voice and Overcome Your{" "}
            <span className="text-white/70">Limiting Barriers</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Do you feel frustrated by not reaching the notes you want, running
            out of breath, stage fright, or vocal fatigue? You are not alone.
            Most singers face these challenges but don&apos;t have the tools to
            overcome them.
          </p>
        </div>

        {/* video frame */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="group relative aspect-video w-full overflow-hidden rounded-[1.75rem] bg-ink/40 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.6)] ring-1 ring-white/15">
            <div className="absolute inset-0 bg-gradient-to-br from-plum/40 to-ink/60" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-purple shadow-xl transition-transform duration-200 group-hover:scale-110">
                <Icon.play className="ml-1 h-9 w-9" />
              </span>
            </span>
            <span className="absolute bottom-4 left-5 text-sm font-medium text-white/80">
              Watch the course preview
            </span>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button href={courseUrl} variant="white" size="lg">
            Access the Course!
          </Button>
        </div>
      </Container>
    </section>
  );
}
