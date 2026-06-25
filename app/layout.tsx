import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { JsonLd } from "@/components/seo/json-ld";
import {
  siteUrl,
  siteName,
  defaultDescription,
  keywords,
  organizationLd,
} from "@/lib/seo";

// Studio della Voce uses Montserrat throughout (per Figma spec).
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const homeTitle = "Studio della Voce — Voice Restoration & Vocal Transformation";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: "%s · Studio della Voce",
  },
  description: defaultDescription,
  keywords,
  applicationName: siteName,
  authors: [{ name: "Dr. Marcella Amoruso" }],
  creator: siteName,
  publisher: siteName,
  alternates: { canonical: "/" },
  category: "education",
  openGraph: {
    type: "website",
    siteName,
    locale: "en_US",
    url: "/",
    title: homeTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {/* Fallback: if JS is disabled, never hide scroll-reveal content */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <JsonLd data={organizationLd} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
