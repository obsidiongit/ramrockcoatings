import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, CheckCircle, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BUSINESS, LOCATIONS, SERVICES } from "@/lib/data";
import { getLocationProjectImage, getPageHeroImage } from "@/lib/images";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { CTABanner } from "@/components/sections/CTABanner";

// ─── Static params ─────────────────────────────────────────────────────────
export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ city: l.slug }));
}

// ─── Per-city extended content ─────────────────────────────────────────────
// Add unique copy per city to avoid duplicate content penalties.
const CITY_CONTENT: Record<
  string,
  { headline: string; intro: string; neighborhoods?: string[] }
> = {
  "cedar-rapids": {
    headline: "Epoxy Flooring in Cedar Rapids, IA",
    intro:
      "Cedar Rapids is our home base, and we take pride in serving our own community. From the newer subdivisions on the west side to the historic neighborhoods near downtown, we've installed epoxy floors across this city and know its concrete well — including the moisture challenges that come with Iowa winters.",
    neighborhoods: ["Northwest Cedar Rapids", "Marion", "Hiawatha", "Robins", "Ely"],
  },
  "iowa-city": {
    headline: "Epoxy Flooring in Iowa City, IA",
    intro:
      "Iowa City homeowners and businesses hire RamRock for garage coatings, basement floors, and commercial surfaces. Same crew and prep standards as our Cedar Rapids work — we make the drive.",
    neighborhoods: ["Coralville", "North Liberty", "University Heights", "Hills"],
  },
  "dubuque": {
    headline: "Epoxy Flooring in Dubuque, IA",
    intro:
      "Dubuque's older building stock means a lot of concrete that needs proper prep before coating — and that's exactly where RamRock excels. We take surface preparation seriously, which is why our floors hold up and our competitors' don't.",
    neighborhoods: ["East Dubuque", "Peosta", "Dyersville"],
  },
  "waterloo": {
    headline: "Epoxy Flooring in Waterloo, IA",
    intro:
      "Waterloo and Cedar Falls homeowners call us for garage floors, basements, and commercial spaces. We're a short drive away and don't tack on a travel premium.",
    neighborhoods: ["Cedar Falls", "Evansdale", "Raymond", "Hudson"],
  },
  "cedar-falls": {
    headline: "Epoxy Flooring in Cedar Falls, IA",
    intro:
      "Cedar Falls homeowners call us for garage and basement epoxy — flake, metallic, and solid-color systems. We're a short drive away and treat every job with the same prep and finish standards as our Cedar Rapids work.",
    neighborhoods: ["Waterloo", "Evansdale", "Dike"],
  },
  "davenport": {
    headline: "Epoxy Flooring in Davenport, IA",
    intro:
      "Davenport and the Quad Cities mix established neighborhoods with growing commercial corridors. We travel to the Quad Cities for garages, businesses, and specialty floor coatings.",
    neighborhoods: ["Bettendorf", "Rock Island", "Moline", "East Moline"],
  },
  "des-moines": {
    headline: "Epoxy Flooring in Des Moines, IA",
    intro:
      "Des Moines is Iowa's largest metro and a regular stop for our crew. Suburban garages, shop floors, and commercial spaces — same prep, materials, and warranty as our eastern Iowa jobs.",
    neighborhoods: ["West Des Moines", "Ankeny", "Urbandale", "Johnston", "Waukee"],
  },
  "sioux-city": {
    headline: "Epoxy Flooring in Sioux City, IA",
    intro:
      "Sioux City is on our route. We make the drive so you get a professionally prepped, properly coated floor — not a big-box DIY kit that peels in a year.",
    neighborhoods: ["South Sioux City", "Dakota City", "North Sioux City"],
  },
};

// ─── Metadata ─────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const location = LOCATIONS.find((l) => l.slug === city);
  if (!location) return {};
  return {
    title: `Epoxy Flooring ${location.city}, IA | RamRock Coatings`,
    description: `Professional epoxy flooring contractor in ${location.city}, Iowa. Residential and commercial coatings. Free estimates. Call RamRock Coatings: ${BUSINESS.phone}.`,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const location = LOCATIONS.find((l) => l.slug === city);
  if (!location) notFound();

  const content = CITY_CONTENT[city];
  const heroImage = getPageHeroImage(city);
  const projectImage = getLocationProjectImage(city);

  return (
    <>
      <PageHero
        eyebrow={`${location.city}, ${location.state}`}
        title={content?.headline ?? `Epoxy Flooring in ${location.city}, IA`}
        description={content?.intro ?? location.description}
        backLink={{ href: "/locations", label: "All Locations" }}
        image={heroImage}
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button href="/contact" variant="accent" className="text-base px-7 py-3.5">
            Get a Free Estimate
          </Button>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center gap-2 text-base font-semibold px-7 py-3.5 rounded-md border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            <Phone size={16} />
            {BUSINESS.phone}
          </a>
        </div>
      </PageHero>

      {/* Services in this city */}
      <section className="py-20 bg-background">
        <Container>
          <SectionHeader
            eyebrow={`Services in ${location.city}`}
            heading="What We Offer Here"
            subtext={`Garages, basements, and commercial floors in ${location.city} — same crew, same prep, same warranty.`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border border-border rounded-xl p-5 hover:border-accent hover:shadow-md transition-all duration-200"
              >
                <h3 className="font-semibold text-foreground mb-1.5 group-hover:text-accent transition-colors text-sm">
                  {service.name}
                </h3>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  {service.tagline}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      {/* Nearby areas */}
      {content?.neighborhoods && (
        <section className="py-16 bg-background-secondary">
          <Container>
            <div className="text-center max-w-xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                Also Serving
              </p>
              <h2 className="font-serif text-3xl text-foreground mb-6">
                Nearby Communities
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {content.neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="inline-flex items-center gap-1.5 bg-white border border-border rounded-full px-3 py-1.5 text-sm text-foreground-muted"
                  >
                    <MapPin size={12} className="text-accent" />
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Why choose / trust signals */}
      <section className="py-20 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                Why RamRock
              </p>
              <h2 className="font-serif text-4xl text-foreground leading-tight mb-6">
                A Contractor You Can Trust in {location.city}
              </h2>
              <div className="space-y-3">
                {[
                  "Free on-site estimates with itemized pricing",
                  "Diamond grinding and moisture prep on every job",
                  "Commercial-grade coatings, not hardware-store kits",
                  "Available 7 days a week, 6:30AM–9PM",
                  "No hidden fees on the final invoice",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span className="text-sm text-foreground-muted">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            {projectImage && (
              <ProjectImage
                src={projectImage.src}
                alt={projectImage.alt}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[4/3] rounded-2xl shadow-card"
              />
            )}
          </div>
        </Container>
      </section>

      <CTABanner
        title={`Ready for a New Floor in ${location.city}?`}
        description="Call or message us for a free, no-obligation estimate. We'll tell you what your floor needs and what it'll cost."
      />

      {/* LocalBusiness schema for this city */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "RamRock Coatings",
            description: `Epoxy flooring contractor serving ${location.city}, Iowa.`,
            telephone: "+13192572061",
            url: `https://ramrockcoatings.com/locations/${location.slug}`,
            areaServed: {
              "@type": "City",
              name: location.city,
              sameAs: `https://en.wikipedia.org/wiki/${location.city},_Iowa`,
            },
          }),
        }}
      />
    </>
  );
}
