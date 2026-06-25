import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { StubNote } from "@/components/sections/stub-note";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Online Resources",
  description:
    "Vocal growth from anywhere — join our free online community and dive into Dr. Marcella Amoruso's on-demand digital masterclasses.",
};

export default function OnlineResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Online Learning"
        title={
          <>
            Learn Anytime, <span className="text-white/70">Anywhere</span>
          </>
        }
        body="Vocal growth should be accessible to everyone, regardless of location. Our online community and digital masterclasses provide the tools, guidance and support you need to reach your full potential — from anywhere in the world."
        cta={{ label: "Join Our Free Community", href: site.community }}
      />
      <StubNote
        heading="Detailed online resources content is on the way"
        body="This page will feature our free online community, on-demand masterclasses, the steps to get started online and global student testimonials."
      />
      <CtaBand
        title="Connect, learn and grow — together"
        body="Join a global network of singers and get access to exclusive vocal tips and resources."
        cta={{ label: "Join Our Free Community", href: site.community }}
      />
    </>
  );
}
