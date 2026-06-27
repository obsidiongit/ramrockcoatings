import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutSection, TestimonialsSection } from "@/components/sections/AboutSection";
import { MeetSection } from "@/components/sections/MeetSection";
import { InterestRouter } from "@/components/sections/InterestRouter";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { LOCATIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "RamRock Coatings | Epoxy Flooring Contractor — Cedar Rapids, IA",
  description:
    "Cedar Rapids' trusted epoxy flooring contractor. Residential, commercial, and specialty coatings — metallic, flake, quartz, marble. Free estimates. Call (319) 257-2061.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesBento />
      <ProcessSection />
      <AboutSection />
      <MeetSection />
      <InterestRouter />
      <WhyChooseSection />
      <TestimonialsSection />

      {/* Service areas */}
      <section className="section-padding-sm bg-background-secondary">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Service Area"
              heading="Serving Iowa Communities"
              subtext="We travel across Iowa to bring quality epoxy flooring to homes and businesses."
            />
          </FadeIn>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-2.5">
              {LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="inline-flex items-center bg-white border border-border hover:border-accent hover:text-accent rounded-full px-4 py-2 text-sm font-medium text-foreground-muted transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {loc.city}, {loc.state}
                </Link>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      <CTABanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "RamRock Coatings",
            description:
              "Epoxy flooring contractor serving Cedar Rapids, Iowa and surrounding areas.",
            telephone: "+13192572061",
            email: "ramrockcoatings@gmail.com",
            url: "https://ramrockcoatings.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Cedar Rapids",
              addressRegion: "IA",
              postalCode: "52402",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 41.9779,
              longitude: -91.6656,
            },
            openingHours: "Mo-Su 06:30-21:00",
            priceRange: "$$",
            sameAs: [
              "https://www.facebook.com/people/RamRock-Coatings/61584663874914/",
              "https://www.instagram.com/ramrockcoatings/",
              "https://www.yelp.com/biz/ramrock-coatings-cedar-rapids",
            ],
          }),
        }}
      />
    </>
  );
}
