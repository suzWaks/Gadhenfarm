import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ValueProposition } from "@/components/value-proposition";
import { FeaturesSection } from "@/components/features-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { TechnologySection } from "@/components/technology-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { BookingSection } from "@/components/booking-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <ValueProposition />
        <FeaturesSection />
        <AboutSection />
        <ServicesSection />
        <TechnologySection />
        <CaseStudiesSection />
        <BookingSection />
      </main>
      <SiteFooter />
    </div>
  );
}
