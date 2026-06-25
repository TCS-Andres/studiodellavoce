import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { StubNote } from "@/components/sections/stub-note";

export const metadata: Metadata = {
  title: "Ministerial Choir Training",
  description:
    "Dr. Marcella Amoruso's Ministerial Choir Development program enhances the vocal strength, unity and spiritual expression of church choirs.",
};

export default function MinisterialChoirPage() {
  return (
    <>
      <PageHero
        eyebrow="Elevate Your Ministerial Choir"
        title={
          <>
            Unlock a <span className="text-white/70">Sound of Heaven</span>
          </>
        }
        body="Dr. Marcella Amoruso's Ministerial Choir Development program enhances the vocal strength, unity and spiritual expression of church choirs — helping them achieve a powerful, harmonious sound that inspires their congregation."
        cta={{ label: "Request an Assessment", href: "/contact" }}
      />
      <StubNote
        heading="Detailed choir program content is on the way"
        body="This page will cover the unique approach for church choirs, vocal technique and unity, harmony development and spiritual expression — plus the getting-started plan and testimonials."
      />
      <CtaBand
        title="Bring a heavenly sound to your congregation"
        body="Let's discuss how Dr. Amoruso can elevate your choir's performance and unity."
        cta={{ label: "Request an Assessment", href: "/contact" }}
      />
    </>
  );
}
