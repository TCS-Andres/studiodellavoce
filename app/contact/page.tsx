import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach out to Studio della Voce — individual lessons, group training, choir development or online resources. We'd love to be part of your vocal journey.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's Connect"
        title={
          <>
            Reach Out <span className="text-white/70">to Us</span>
          </>
        }
        body="Whether you're interested in individual lessons, group training, choir development or our online resources, we're here to help you on your vocal journey. Have a question, want to book a consultation, or simply want to learn more? Reach out — we're excited to be part of your vocal transformation."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
          <aside className="lg:pt-2">
            <h2 className="text-2xl text-ink">Get in touch</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Prefer to reach us directly? Use the details below or send a message
              and we&apos;ll get back to you shortly.
            </p>
            <dl className="mt-7 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-ink">Email</dt>
                <dd className="mt-1">
                  <a className="text-purple hover:text-magenta" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Phone</dt>
                <dd className="mt-1">
                  <a className="text-purple hover:text-magenta" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Instagram</dt>
                <dd className="mt-1">
                  <a className="text-purple hover:text-magenta" href={site.instagram} target="_blank" rel="noreferrer">
                    @marcellaamoruso
                  </a>
                </dd>
              </div>
            </dl>
          </aside>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
