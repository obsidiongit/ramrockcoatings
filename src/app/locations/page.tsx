import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { BUSINESS, LOCATIONS } from "@/lib/data";
import { getPageHeroImage, LOCATION_PROJECT_IMAGES } from "@/lib/images";
import { ProjectImage } from "@/components/ui/ProjectImage";

export const metadata: Metadata = {
  title: "Epoxy Flooring Service Areas | RamRock Coatings — Iowa",
  description:
    "RamRock Coatings serves Cedar Rapids, Iowa City, Dubuque, Waterloo, Cedar Falls, Davenport, Des Moines, Sioux City, and surrounding Iowa communities.",
};

export default function LocationsPage() {
  const heroImage = getPageHeroImage("locations");

  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Serving Communities Across Iowa"
        description="Based in Cedar Rapids, we travel across Iowa for residential garages, commercial floors, and specialty finishes."
        image={heroImage}
      />

      {/* Locations grid */}
      <section className="py-24 bg-background">
        <Container>
          <SectionHeader
            eyebrow="Where We Work"
            heading="Our Service Area"
            subtext="Each city page covers local services, nearby communities, and recent project examples."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group bg-white border border-border rounded-2xl overflow-hidden hover:border-accent hover:shadow-md transition-all duration-200"
              >
                {LOCATION_PROJECT_IMAGES[loc.slug] && (
                  <ProjectImage
                    src={LOCATION_PROJECT_IMAGES[loc.slug].src}
                    alt={LOCATION_PROJECT_IMAGES[loc.slug].alt}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="aspect-[16/10] border-b border-border"
                  />
                )}
                <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-accent shrink-0" />
                  <h2 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {loc.city}, {loc.state}
                  </h2>
                  {loc.isPrimary && (
                    <span className="ml-auto text-xs bg-accent-light text-accent font-medium px-2 py-0.5 rounded-full">
                      HQ
                    </span>
                  )}
                </div>
                <p className="text-sm text-foreground-muted leading-relaxed mb-3">
                  {loc.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent">
                  View page <ArrowRight size={12} />
                </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Not listed? */}
      <section className="py-16 bg-background-secondary">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground mb-3">
              Don&rsquo;t see your city?
            </h2>
            <p className="text-foreground-muted mb-6">
              We may still be able to serve you. Give us a call or send a
              message and we&rsquo;ll let you know if we can make it work.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/contact" variant="accent">
                Send a Message
              </Button>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-md border border-border text-foreground hover:bg-background-tertiary transition-colors"
              >
                <Phone size={14} />
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
