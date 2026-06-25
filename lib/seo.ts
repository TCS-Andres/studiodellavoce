import type { Metadata } from "next";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://studiodellavoce.com"
).replace(/\/$/, "");

export const siteName = "Studio della Voce";

export const defaultDescription =
  "Studio della Voce by Dr. Marcella Amoruso helps vocalists — from amateurs to professionals — overcome mental, technical and physical limitations to discover their most authentic, powerful voice.";

export const keywords = [
  "vocal lessons",
  "singing lessons",
  "voice coach",
  "voice restoration",
  "vocal transformation",
  "Dr. Marcella Amoruso",
  "vocologist",
  "online singing course",
  "ministerial choir training",
  "Bel Canto",
  "belting technique",
];

/**
 * Builds consistent per-page metadata (title, description, canonical,
 * Open Graph and Twitter card). The site-wide share image is supplied by
 * the app/opengraph-image + app/twitter-image file conventions.
 */
export function pageMetadata({
  title,
  description = defaultDescription,
  path = "/",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = `${title} · ${siteName}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/** Organization / LocalBusiness structured data for the whole site. */
export const organizationLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/brand/logo.png`,
  image: `${siteUrl}/opengraph-image.jpg`,
  description: defaultDescription,
  email: "Info@studiodellavoce.com",
  telephone: "+1 234 567 890",
  sameAs: ["https://www.instagram.com/marcellaamoruso/"],
  areaServed: "Worldwide",
  founder: {
    "@type": "Person",
    name: "Dr. Marcella Amoruso",
    jobTitle: "Vocologist & Voice Coach",
    description:
      "Renowned vocologist and voice restorer with over 40 years of experience, known as the Doctor of the Voice.",
  },
  knowsAbout: [
    "Vocal training",
    "Voice restoration",
    "Singing technique",
    "Bel Canto",
    "Belting",
    "Ministerial choir training",
    "Ethnomusicology",
  ],
};

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function courseLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Studio della Voce Digital Course",
    description:
      "A comprehensive online vocal program by Dr. Marcella Amoruso — vocal anatomy, breathing, advanced singing methods (Bel Canto, VoiceCraft, Belting) and vocal optimization.",
    provider: {
      "@type": "Organization",
      name: siteName,
      sameAs: siteUrl,
    },
    url: `${siteUrl}/digital-course`,
  };
}
