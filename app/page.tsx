import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { ValueStack } from "@/components/home/value-stack";
import { Services } from "@/components/home/services";
import { Difference } from "@/components/home/difference";
import { StatsBand } from "@/components/home/stats-band";
import { KnownStudents } from "@/components/home/known-students";
import { CoursePromo } from "@/components/home/course-promo";
import { MiniAbout } from "@/components/home/mini-about";
import { Testimonials } from "@/components/sections/testimonials";
import { ThePlan } from "@/components/sections/the-plan";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ValueStack />
      <Services />
      <Difference />
      <StatsBand />
      <KnownStudents />
      <Testimonials />
      <ThePlan />
      <CoursePromo />
      <MiniAbout />
    </>
  );
}
