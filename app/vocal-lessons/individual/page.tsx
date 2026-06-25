import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { PingPong, type PingPongItem } from "@/components/sections/ping-pong";
import { ThePlan } from "@/components/sections/the-plan";
import { Testimonials } from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: "Individual Vocal Lessons",
  description:
    "Focused one-on-one coaching with Dr. Marcella Amoruso, tailored to your unique voice — technique, range, vocal health and artistic expression.",
};

const items: PingPongItem[] = [
  {
    eyebrow: "Tailored Vocal Training",
    title: "Customized Lessons for Your Voice and Goals",
    body: "No two voices are the same, and your vocal training shouldn't be either. Dr. Amoruso develops a customized lesson plan that aligns with your current abilities, challenges and goals — whether you're refining technique, recovering from strain, or exploring new styles.",
    expect: [
      "A vocal assessment to identify strengths, weaknesses and opportunities for growth.",
      "A development plan tailored to your specific vocal needs.",
      "Ongoing feedback and adjustments to optimize your progress.",
    ],
    imageLabel: "One-on-one lesson",
  },
  {
    eyebrow: "Overcome Barriers",
    title: "Break Free from Vocal Limitations",
    body: "Many singers experience roadblocks — technical limitations, physical challenges, or mental blocks like performance anxiety. With numerous vocal techniques and a deep understanding of vocal physiology, you'll be equipped to break through and perform with freedom and confidence.",
    expect: [
      "Improve range, control and vocal power.",
      "Correct improper techniques that may be holding you back.",
      "Gain confidence to perform and express yourself authentically.",
    ],
    imageLabel: "Breakthrough coaching",
  },
  {
    eyebrow: "Vocal Health and Longevity",
    title: "Protect and Strengthen Your Voice",
    body: "Your voice is a delicate instrument, and maintaining its health is essential for long-term success. Dr. Amoruso provides expert guidance on techniques and practices that not only improve your voice but also protect it from strain and injury.",
    expect: [
      "Vocal warm-ups and exercises that protect and strengthen your voice.",
      "Techniques for breath control and posture that support performance.",
      "How to maintain vocal health for a lifetime of singing.",
    ],
    imageLabel: "Vocal health",
  },
  {
    eyebrow: "Artistic Development & Expression",
    title: "Find Your Authentic Sound",
    body: "Singing isn't just about hitting the right notes — it's about discovering your unique voice and expressing yourself through your art. Dr. Amoruso's deep knowledge of ethnomusicology lets you explore a wide variety of vocal traditions and styles.",
    expect: [
      "Explore different styles and genres to find your artistic voice.",
      "Develop emotional depth and expression in your singing.",
      "Build the confidence to perform with passion and creativity.",
    ],
    imageLabel: "Artistic expression",
  },
  {
    eyebrow: "Flexible Learning Options",
    title: "In-Person or Online, Wherever You Are",
    body: "Every singer has a unique schedule, so our lessons are designed to be flexible and accessible. Whether you prefer in-person lessons or need to train online, Studio della Voce offers convenient options to fit your lifestyle.",
    expect: [
      "In-person lessons for hands-on coaching.",
      "Online lessons with the same level of expert guidance from home.",
      "Flexible scheduling to accommodate your needs.",
    ],
    imageLabel: "In-person or online",
  },
];

export default function IndividualLessonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Individual Lessons"
        title={
          <>
            Discover Your <span className="text-white/70">True Voice</span>
          </>
        }
        body="Our individual lessons provide focused, one-on-one coaching that addresses your unique vocal needs and aspirations. Whether you're an emerging singer or a seasoned performer, our lessons help you achieve breakthroughs in technique, range, vocal health and artistic expression."
        cta={{ label: "Request an Assessment", href: "/contact" }}
      />
      <PingPong items={items} />
      <ThePlan />
      <Testimonials />
    </>
  );
}
