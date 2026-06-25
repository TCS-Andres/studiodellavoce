import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Media } from "@/components/ui/media";

export function MiniAbout() {
  return (
    <section className="bg-plum py-20 text-white sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/60 font-display">
            Your Voice Deserves to Be Free
          </p>
          <h2 className="text-3xl text-white sm:text-4xl">
            A Word from the &ldquo;Doctor of the Voice&rdquo;
          </h2>
          <div className="mt-6 space-y-4 text-white/80">
            <p>
              Every voice is unique, powerful and capable of incredible things.
              Over the past 40 years, I&apos;ve dedicated my life to helping
              singers unlock their true vocal potential, break through
              limitations and discover the joy of singing freely. Whether
              you&apos;re a beginner or a seasoned artist, know that your voice
              deserves to be heard — strong, authentic and without fear.
            </p>
            <p>
              I&apos;m here to guide you every step of the way. Let&apos;s embark
              on this journey together and set your voice free.
            </p>
          </div>
          <p className="mt-6 font-display text-2xl text-white">
            Dr. Marcella Amoruso
          </p>
          <div className="mt-8">
            <Button href="/about" variant="gold" size="lg">
              Learn About Dr. Marcella
            </Button>
          </div>
        </div>

        <Media
          src="/photos/marcella-profile.jpg"
          alt="Dr. Marcella Amoruso"
          tone="brand"
          className="aspect-[4/5] w-full"
          rounded="rounded-[2.5rem]"
        />
      </Container>
    </section>
  );
}
