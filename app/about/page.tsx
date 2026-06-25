import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { StatsBand } from "@/components/home/stats-band";
import { CtaBand } from "@/components/sections/cta-band";
import { Media } from "@/components/ui/media";

export const metadata: Metadata = {
  title: "About Dr. Marcella Amoruso",
  description:
    "Meet Dr. Marcella Amoruso — the 'Doctor of the Voice' — a renowned vocologist and voice restorer with over 40 years of experience.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            The <span className="text-white/70">Doctor of the Voice</span>
          </>
        }
        body="With over 40 years of experience, Dr. Marcella Amoruso offers unparalleled knowledge of vocal techniques and a personalized approach, helping every vocalist reach their highest potential."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Media
            label="Dr. Marcella Amoruso"
            tone="brand"
            className="aspect-[4/5] w-full"
            rounded="rounded-[2.5rem]"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl leading-[1.1]">
              A Word from <span className="text-brand">Dr. Marcella</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Every voice is unique, powerful and capable of incredible things.
                Over the past 40 years, I&apos;ve dedicated my life to helping
                singers unlock their true vocal potential, break through
                limitations and discover the joy of singing freely.
              </p>
              <p>
                A renowned vocologist and voice restorer, I&apos;ve worked with
                more than 4,000 students worldwide — from amateurs to
                internationally recognized artists like Eiffel 65 and Neja —
                combining advanced techniques with a deep understanding of vocal
                anatomy, artistry and ethnomusicology.
              </p>
              <p>
                Whether you&apos;re a beginner or a seasoned artist, know that
                your voice deserves to be heard — strong, authentic and without
                fear. I&apos;m here to guide you every step of the way.
              </p>
            </div>
            <p className="mt-6 font-display text-2xl text-ink">
              Dr. Marcella Amoruso
            </p>
          </div>
        </Container>
      </section>

      <StatsBand />

      <CtaBand
        eyebrow="Your Voice Deserves to Be Free"
        title="Let's set your voice free"
        body="Reach out to schedule an assessment and begin your vocal transformation with Dr. Marcella Amoruso."
        cta={{ label: "Schedule Lesson", href: "/contact" }}
      />
    </>
  );
}
