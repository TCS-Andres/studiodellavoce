import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { StubNote } from "@/components/sections/stub-note";

export const metadata = pageMetadata({
  title: "Group Vocal Lessons",
  description:
    "Dynamic, interactive group lessons where singers of all levels grow, learn and inspire each other under the guidance of Dr. Marcella Amoruso.",
  path: "/vocal-lessons/group",
});

export default function GroupLessonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Group Lessons"
        title={
          <>
            Grow Together, <span className="text-white/70">Sing Together</span>
          </>
        }
        body="Our group lessons provide a dynamic, interactive environment where singers of all levels come together to grow, learn and inspire each other — combining peer collaboration with the expertise of Dr. Marcella Amoruso."
        cta={{ label: "Request an Assessment", href: "/contact" }}
      />
      <StubNote
        heading="Detailed group lessons content is on the way"
        body="This page will feature collective-growth value sections, the getting-started plan and student testimonials — built on the same design system you're reviewing now."
      />
      <CtaBand
        title="Ready to find your voice alongside others?"
        body="Reach out for an assessment and we'll help you take the first step."
        cta={{ label: "Request an Assessment", href: "/contact" }}
      />
    </>
  );
}
