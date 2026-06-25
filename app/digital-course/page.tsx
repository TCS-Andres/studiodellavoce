import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow, SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Media } from "@/components/ui/media";
import { Icon } from "@/components/ui/icons";
import { CourseHero } from "@/components/course/course-hero";
import { CourseModules } from "@/components/course/modules";
import { ThePlan } from "@/components/sections/the-plan";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq, type FaqItem } from "@/components/sections/faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Course — Transform Your Voice",
  description:
    "Dr. Marcella Amoruso's digital course: vocal anatomy, breathing, advanced singing methods and more — a complete program to unlock your true vocal potential.",
};

const guidePoints = [
  "Over 40 years of experience.",
  "Worked with more than 4,000 students, including renowned artists like Eiffel 65 and Neja.",
  "Expert vocologist and voice restorer.",
  "A unique approach combining advanced techniques with deep understanding of vocal anatomy and artistry.",
];

const problems = [
  { icon: Icon.wave, title: "Lack of breath control" },
  { icon: Icon.shield, title: "Physical tension" },
  { icon: Icon.spark, title: "Mental blocks" },
  { icon: Icon.user, title: "Lack of expert guidance" },
];

const solutions = [
  { title: "Vocal Anatomy", body: "Understand how your voice works and learn to care for it." },
  { title: "Breathing Techniques", body: "Improve your control and projection with specific exercises." },
  { title: "Overcome Obstacles", body: "Identify and eliminate the barriers limiting your voice." },
  { title: "Advanced Methods", body: "Learn Bel Canto, VoiceCraft and Belting safely." },
  { title: "Vocal Optimization", body: "Protect and enhance your voice for long-term results." },
];

const courseSteps = [
  { title: "Join the Course", body: "Register and access exclusive content from anywhere." },
  { title: "Follow the Plan", body: "Learn through structured modules designed to unlock your full vocal potential." },
  { title: "Optimize Your Voice", body: "Apply the techniques and transform your confidence and singing ability." },
];

const successStories = [
  {
    quote:
      "Thanks to Dr. Amoruso, my confidence and vocal technique have reached new heights. I didn't just learn to sing better; I discovered my true voice.",
    name: "Julia R.",
  },
  {
    quote:
      "Marcella's approach is unique. I was able to overcome my stage fright and sing with the power I always dreamed of.",
    name: "Luis P.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Who is Dr. Marcella Amoruso?",
    a: "A renowned vocologist and voice restorer with over 40 years of experience. She has worked with more than 4,000 students worldwide and specializes in unlocking each singer's vocal potential with advanced, personalized techniques.",
  },
  {
    q: "Who is this course for?",
    a: "Singers of all levels, from beginners to professionals, who want to improve their technique, overcome vocal barriers and maximize their singing potential.",
  },
  {
    q: "What will I learn in this course?",
    a: "Vocal anatomy, breathing techniques, overcoming vocal obstacles, singing methods like Bel Canto and Belting, effective warm-ups, and practices to protect and optimize your voice.",
  },
  {
    q: "How long is the course?",
    a: "It's designed to be completed at your own pace. Each module has an estimated duration, but you can take as much time as needed to absorb and apply the concepts.",
  },
  {
    q: "Do I need prior experience to participate?",
    a: "No. The course is suitable for both beginners and experienced singers. Dr. Amoruso adapts the techniques and teachings to each student's needs.",
  },
  {
    q: "Is the course completely online?",
    a: "Yes, this course is 100% online. You can access all the content from anywhere, anytime.",
  },
  {
    q: "How is the course structured?",
    a: "It's divided into modules covering specific topics, from vocal anatomy to advanced singing methods, with videos, practical exercises and additional resources.",
  },
  {
    q: "What benefits will I gain from completing the course?",
    a: "You'll improve your vocal control, technique, projection and confidence, plus gain access to a supportive community and extra resources for ongoing growth.",
  },
  {
    q: "What does the special offer include?",
    a: "By registering today, you'll receive a free individual class with Dr. Marcella Amoruso and exclusive bonus resources.",
  },
  {
    q: "Can I access the content anytime?",
    a: "Yes, all content is available for you to access at your convenience. Learn at your own pace, whenever and wherever you want.",
  },
  {
    q: "Will there be support if I have questions during the course?",
    a: "Yes. You'll have access to the Studio della Voce online community, where you can interact with other students and receive additional guidance.",
  },
  {
    q: "How do I register for the course?",
    a: "Click any registration button on this page, fill out the sign-up form, and start your journey toward vocal transformation.",
  },
  {
    q: "Is there a satisfaction guarantee period?",
    a: "Check the course's refund and guarantee policy on the terms and conditions page.",
  },
];

export default function DigitalCoursePage() {
  return (
    <>
      <CourseHero courseUrl={site.courseUrl} />

      {/* Guide */}
      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Media
            src="/photos/marcella-profile.jpg"
            alt="Dr. Marcella Amoruso"
            tone="brand"
            className="aspect-[4/5] w-full"
            rounded="rounded-[2.5rem]"
          />
          <div>
            <Eyebrow>The Guide</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl leading-[1.1]">
              Dr. Marcella Amoruso Is Here to{" "}
              <span className="text-brand">Guide You</span>
            </h2>
            <ul className="mt-7 space-y-4">
              {guidePoints.map((p, i) => (
                <li key={i} className="flex gap-3.5">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand text-white">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-base leading-relaxed text-muted">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button href={site.courseUrl} variant="gold" size="lg">
                Access the Course!
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* The Problem */}
      <section className="bg-mist py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The Problem"
            title={
              <>
                What Is <span className="text-brand">Limiting Your Voice?</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((p) => {
              const I = p.icon;
              return (
                <div
                  key={p.title}
                  className="flex flex-col items-center rounded-card border border-line bg-white p-7 text-center"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white">
                    <I className="h-7 w-7" />
                  </div>
                  <h3 className="text-base text-ink">{p.title}</h3>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* The Solution */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The Solution"
            title={
              <>
                What You&apos;ll <span className="text-brand">Get in This Course</span>
              </>
            }
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {solutions.map((sln) => (
              <div
                key={sln.title}
                className="flex gap-4 rounded-2xl border border-line bg-white p-6"
              >
                <span className="mt-1 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-mist text-purple">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base text-ink">{sln.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {sln.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CourseModules courseUrl={site.courseUrl} />

      <ThePlan
        eyebrow="The Plan"
        title={
          <>
            Your Vocal Transformation in <span className="text-brand">3 Steps</span>
          </>
        }
        body="A simple, proven path from where you are today to the confident, free voice you've always wanted."
        steps={courseSteps}
      />

      <Testimonials
        eyebrow="Success Stories"
        title={
          <>
            Real <span className="text-brand">Success Stories</span>
          </>
        }
        body="Singers from around the world have transformed their voice — and their confidence — with this course."
        items={successStories}
      />

      <CtaBand
        eyebrow="Special Offer"
        title="Enroll Today and Get More!"
        body="By registering now, you'll receive a FREE individual class with Dr. Marcella Amoruso. Don't miss this opportunity to transform your voice and join our community of international artists."
        cta={{ label: "Access the Course!", href: site.courseUrl }}
      />

      <Faq
        title={
          <>
            Studio della Voce <span className="text-brand">Digital Course FAQ</span>
          </>
        }
        items={faqs}
      />

      {/* Final CTA */}
      <CtaBand
        eyebrow="Your Best Voice Awaits"
        title="Take the First Step Toward a Complete Vocal Transformation"
        body="Join Studio della Voce's digital course and, with the support of Dr. Marcella Amoruso and our community, unlock your true vocal potential."
        cta={{ label: "Start Now", href: site.courseUrl }}
      />
    </>
  );
}
