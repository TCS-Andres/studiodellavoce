import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";

const services = [
  {
    icon: Icon.mic,
    title: "Individual Vocal Lessons",
    body: "Tailored one-on-one sessions focused on your vocal development and artistic growth.",
    cta: "Learn About Lessons",
    href: "/vocal-lessons/individual",
  },
  {
    icon: Icon.group,
    title: "Group Vocal Lessons",
    body: "Learn and improve in a collaborative environment, sharing experiences with fellow singers.",
    cta: "Learn About Group Lessons",
    href: "/vocal-lessons/group",
  },
  {
    icon: Icon.shield,
    title: "Ministerial Choir Training",
    body: "Customized training programs to elevate the performance and unity of choirs.",
    cta: "Learn About Choir Training",
    href: "/vocal-lessons/ministerial-choir",
  },
  {
    icon: Icon.globe,
    title: "Online Community & Masterclasses",
    body: "Access vocal resources, techniques and support from anywhere, with ongoing growth in our vibrant online community and detailed masterclasses.",
    cta: "Learn About Online Resources",
    href: "/online-resources",
  },
];

export function Services() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title={
            <>
              Expert Vocal Training and <span className="text-brand">Restoration</span>
            </>
          }
          body="Whatever your level or goal, there's a path at Studio della Voce designed to unlock your true vocal potential."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((sv, i) => {
            const I = sv.icon;
            return (
              <Reveal key={sv.title} delay={i * 90} className="h-full">
                <div className="group flex h-full flex-col rounded-card border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-periwinkle/50 hover:shadow-[0_28px_70px_-40px_rgba(42,21,56,0.55)] sm:p-8">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-mist text-purple transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-110">
                    <I className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl text-indigo">{sv.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                    {sv.body}
                  </p>
                  <Link
                    href={sv.href}
                    className="group/cta mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-purple transition-colors hover:text-magenta"
                  >
                    {sv.cta}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/cta:translate-x-1">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
