import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

// Studio della Voce uses Montserrat throughout (per Figma spec).
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Studio della Voce — Voice Restoration & Vocal Transformation",
    template: "%s · Studio della Voce",
  },
  description:
    "Studio della Voce by Dr. Marcella Amoruso helps vocalists overcome mental, technical and physical limitations to discover their most authentic, powerful voice.",
  metadataBase: new URL("https://studiodellavoce.com"),
  openGraph: {
    title: "Studio della Voce — Voice Restoration & Vocal Transformation",
    description:
      "Discover your true voice with Dr. Marcella Amoruso, one of the world's leading experts in vocal mastery.",
    type: "website",
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
