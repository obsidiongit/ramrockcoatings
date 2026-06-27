import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { BUSINESS, SERVICES } from "@/lib/data";
import { getPageHeroImage } from "@/lib/images";

// ─── Static params for all service slugs ─────────────────────────────────────
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

// ─── Per-service extended content ────────────────────────────────────────────
const SERVICE_CONTENT: Record<
  string,
  {
    longDescription: string;
    benefits: string[];
    process: { step: string; detail: string }[];
    faq: { q: string; a: string }[];
    idealFor: string[];
  }
> = {
  "residential-epoxy-flooring": {
    longDescription:
      "Residential epoxy flooring turns ordinary concrete into a durable, easy-to-clean surface for everyday home life. Garages, basements, laundry rooms, and patios all benefit from a seamless finish that holds up to traffic, spills, and Iowa weather.",
    benefits: [
      "Seamless surface — no grout lines, no cracks to collect dirt",
      "Resists stains, oil, and chemicals",
      "Dramatically easier to clean than bare concrete",
      "Custom colors and finishes to match your style",
      "Lasts 10–20+ years with minimal maintenance",
    ],
    process: [
      {
        step: "Surface assessment",
        detail:
          "We evaluate the concrete for moisture, cracks, previous coatings, and overall condition.",
      },
      {
        step: "Diamond grinding",
        detail:
          "We mechanically grind the surface to open the concrete pores and ensure maximum adhesion.",
      },
      {
        step: "Crack repair",
        detail:
          "Any cracks, spalls, or divots are filled and leveled before coating.",
      },
      {
        step: "Primer coat",
        detail:
          "A penetrating epoxy primer bonds deeply to the prepared concrete.",
      },
      {
        step: "Broadcast & topcoat",
        detail:
          "Color flakes, pigments, or metallic powder are applied, then sealed with a durable clear topcoat.",
      },
    ],
    faq: [
      {
        q: "How long does a residential epoxy floor last?",
        a: "With proper prep and a quality system, 10–20 years is typical. High-traffic areas may show wear faster, but the base coating remains intact.",
      },
      {
        q: "Can epoxy be applied over existing coating?",
        a: "Sometimes, but it depends on the condition and type of existing coating. We'll assess this during the estimate.",
      },
    ],
    idealFor: ["Garages", "Basements", "Laundry rooms", "Patios", "Driveways"],
  },
  "commercial-epoxy-flooring": {
    longDescription:
      "Commercial epoxy flooring needs to perform under pressure — heavy equipment, foot traffic, chemical exposure, and daily cleaning. Our commercial systems are specified for the demands of your facility and installed with minimal downtime.",
    benefits: [
      "Industrial-grade durability for heavy traffic and equipment",
      "Chemical and abrasion resistant",
      "Easy to sanitize — ideal for food service and medical facilities",
      "Slip-resistant options available",
      "Reflects light to brighten the workspace",
    ],
    process: [
      {
        step: "Site evaluation",
        detail:
          "We assess traffic loads, chemical exposure, and moisture before specifying the correct system.",
      },
      {
        step: "Shot blasting or diamond grinding",
        detail:
          "Commercial surfaces get heavy mechanical prep to ensure maximum bond strength.",
      },
      {
        step: "Moisture mitigation (if needed)",
        detail:
          "High-moisture slabs receive a vapor barrier primer before coating.",
      },
      {
        step: "System installation",
        detail:
          "Base coat, broadcast aggregate (if applicable), and topcoat installed per specification.",
      },
      {
        step: "Cure and handoff",
        detail:
          "We schedule around your operations to minimize downtime and give you a timeline for re-opening.",
      },
    ],
    faq: [
      {
        q: "How long will the floor be out of service?",
        a: "Typically 2–5 days for most commercial applications. We'll provide a specific schedule during the estimate.",
      },
      {
        q: "Can you work nights or weekends to minimize disruption?",
        a: "Yes — we work around your schedule when possible.",
      },
    ],
    idealFor: [
      "Warehouses",
      "Manufacturing",
      "Restaurants & food service",
      "Retail",
      "Medical facilities",
      "Auto dealerships",
    ],
  },
  "anti-slip-coating": {
    longDescription:
      "Anti-slip coatings reduce the risk of slips and falls on wet or smooth surfaces without sacrificing aesthetics. We apply broadcast aggregate or textured topcoats that meet OSHA and ADA slip-resistance standards.",
    benefits: [
      "Meets OSHA and ADA slip-resistance requirements",
      "Dramatically reduces slip-and-fall liability",
      "Works over existing flooring or as part of a new coating system",
      "Invisible or lightly textured — doesn't look like an afterthought",
      "Durable and easy to clean",
    ],
    process: [
      {
        step: "Surface prep",
        detail: "Clean and prepare the existing surface.",
      },
      {
        step: "Anti-slip broadcast",
        detail:
          "Fine aggregate (aluminum oxide, quartz sand, or similar) is broadcast into a wet topcoat.",
      },
      {
        step: "Seal coat",
        detail:
          "A sealer locks in the aggregate and provides a durable, cleanable surface.",
      },
    ],
    faq: [
      {
        q: "Can anti-slip coating be added to my existing floor?",
        a: "In most cases yes. We can apply anti-slip topcoats over existing epoxy, concrete, tile, or other surfaces.",
      },
      {
        q: "Will it look rough or industrial?",
        a: "Not necessarily. Fine aggregate creates a subtle texture that is barely noticeable visually.",
      },
    ],
    idealFor: [
      "Pool decks",
      "Ramps",
      "Commercial kitchens",
      "Loading docks",
      "Entryways",
      "Locker rooms",
    ],
  },
  "metallic-epoxy-flooring": {
    longDescription:
      "Metallic epoxy uses pigmented resins suspended in clear epoxy to create a fluid, three-dimensional effect — like molten metal or layered glass. No two floors come out exactly alike.",
    benefits: [
      "Completely unique — no two metallic floors look the same",
      "Striking visual depth and movement",
      "Available in dozens of metallic pigment colors",
      "As durable as standard epoxy",
      "Showroom-quality appearance",
    ],
    process: [
      {
        step: "Surface prep",
        detail: "Diamond grind and prime the concrete.",
      },
      {
        step: "Metallic base layer",
        detail:
          "Metallic epoxy pigment is mixed into clear epoxy and applied to the floor.",
      },
      {
        step: "Manipulation",
        detail:
          "Pigment is manipulated with rollers, sprayers, or tools to create the desired pattern and depth.",
      },
      {
        step: "Clear topcoat",
        detail:
          "A UV-stable polyaspartic or urethane clear coat seals and protects the metallic layer.",
      },
    ],
    faq: [
      {
        q: "Can I pick the colors and pattern?",
        a: "You can choose from a wide range of metallic pigment colors and we'll work with you on the overall direction, but the exact pattern emerges organically during installation.",
      },
      {
        q: "Is metallic epoxy as durable as regular epoxy?",
        a: "Yes. The topcoat provides the same level of protection regardless of the decorative system underneath.",
      },
    ],
    idealFor: [
      "Garages",
      "Showrooms",
      "Retail spaces",
      "Restaurants",
      "Residential basement bars",
    ],
  },
  "flake-chip-epoxy-flooring": {
    longDescription:
      "Flake and chip epoxy flooring is the most popular choice for garages and utility spaces. Colored vinyl flakes are broadcast into a wet epoxy base to create a speckled pattern that hides dirt, tire marks, and minor imperfections beautifully.",
    benefits: [
      "Hides dirt and wear between cleanings",
      "Wide variety of flake colors and sizes",
      "Built-in texture provides mild slip resistance",
      "Very durable and easy to clean",
      "Classic, clean garage aesthetic",
    ],
    process: [
      {
        step: "Surface prep",
        detail: "Diamond grind and repair the concrete.",
      },
      {
        step: "Epoxy base coat",
        detail: "Solid-color epoxy base is applied to the floor.",
      },
      {
        step: "Flake broadcast",
        detail:
          "Vinyl flakes are broadcast by hand into the wet epoxy at full saturation.",
      },
      {
        step: "Scrape and topcoat",
        detail:
          "Loose flakes are removed, and a clear polyaspartic topcoat is applied to lock everything in.",
      },
    ],
    faq: [
      {
        q: "What size flakes are available?",
        a: "We offer 1/4\", 1/8\", and 1/16\" flake sizes, as well as custom blends. Larger flakes are more visible; smaller flakes create a more subtle pattern.",
      },
      {
        q: "Does flake epoxy resist hot tire pickup?",
        a: "Yes, when sealed with our polyaspartic topcoat — which is far more heat-resistant than standard DIY epoxy kits.",
      },
    ],
    idealFor: [
      "Garages",
      "Basements",
      "Workshops",
      "Laundry rooms",
      "Commercial spaces",
    ],
  },
  "quartz-epoxy-flooring": {
    longDescription:
      "Quartz epoxy flooring embeds hard quartz aggregate in an epoxy matrix to create a thick, extremely durable surface with natural texture. It's one of the toughest systems we install, ideal for high-traffic commercial or outdoor applications.",
    benefits: [
      "Exceptional durability and impact resistance",
      "Natural, earthy appearance",
      "Built-in slip resistance from quartz aggregate",
      "Suitable for outdoor and wet environments",
      "Extremely long-lasting",
    ],
    process: [
      {
        step: "Surface prep",
        detail: "Heavy mechanical prep to ensure bond.",
      },
      {
        step: "Epoxy base",
        detail: "A thick epoxy layer is applied.",
      },
      {
        step: "Quartz broadcast",
        detail:
          "Colored quartz aggregate is broadcast heavily into the wet epoxy until fully saturated.",
      },
      {
        step: "Grout coat",
        detail:
          "A second epoxy layer fills the voids between quartz granules.",
      },
      {
        step: "Topcoat",
        detail: "Clear polyaspartic seals the system.",
      },
    ],
    faq: [
      {
        q: "Is quartz epoxy good for outdoor use?",
        a: "Yes — it handles UV, moisture, and temperature changes better than many other systems.",
      },
      {
        q: "How thick is a quartz epoxy floor?",
        a: "Typically 1/4\" thick or more, making it one of the more robust coating systems available.",
      },
    ],
    idealFor: [
      "Pool decks",
      "Patios",
      "Commercial kitchens",
      "Locker rooms",
      "Entryways",
    ],
  },
  "solid-color-epoxy-flooring": {
    longDescription:
      "Solid color epoxy flooring gives you a clean, seamless, professional-looking surface in virtually any color. It's the most straightforward epoxy system and works beautifully in commercial spaces that want a polished, uniform appearance.",
    benefits: [
      "Clean, uniform look in any color",
      "Easy to maintain and sanitize",
      "Works in residential and commercial spaces",
      "Pairs well with anti-slip topcoat",
      "Cost-effective system",
    ],
    process: [
      {
        step: "Surface prep",
        detail: "Diamond grind and prime the concrete.",
      },
      {
        step: "Solid color base",
        detail: "Pigmented epoxy is applied in 1–2 coats.",
      },
      {
        step: "Topcoat",
        detail:
          "Clear polyaspartic or urethane seals the surface and adds durability.",
      },
    ],
    faq: [
      {
        q: "Can I pick any color?",
        a: "Yes. We can match virtually any color with our pigment systems.",
      },
      {
        q: "Is solid color epoxy slippery?",
        a: "Standard systems have a medium sheen that can be slippery when wet. We can add anti-slip aggregate to any topcoat.",
      },
    ],
    idealFor: [
      "Commercial warehouses",
      "Retail",
      "Medical offices",
      "Gyms",
      "Residential garages",
    ],
  },
  "marble-epoxy-flooring": {
    longDescription:
      "Marble epoxy replicates the look of natural marble at a fraction of the cost. Layered pigmented resins create flowing veining and depth on any properly prepped concrete slab.",
    benefits: [
      "Luxury marble appearance without the marble price",
      "Completely seamless — no grout lines",
      "Custom colors and vein patterns",
      "Durable and easy to clean",
      "Perfect for high-visibility areas",
    ],
    process: [
      {
        step: "Surface prep",
        detail: "Diamond grind and prime.",
      },
      {
        step: "Base coat",
        detail: "White or light-colored epoxy base is applied.",
      },
      {
        step: "Veining",
        detail:
          "Contrasting pigmented epoxy is applied and manipulated to create organic, marble-like patterns.",
      },
      {
        step: "Clear topcoat",
        detail:
          "High-gloss polyaspartic seals the design and provides a polished, reflective finish.",
      },
    ],
    faq: [
      {
        q: "Can I specify the marble colors and pattern?",
        a: "Yes — we discuss your color preferences beforehand, but like metallic epoxy, the exact pattern develops organically during installation.",
      },
      {
        q: "Where is marble epoxy most commonly used?",
        a: "Showrooms, retail stores, hotel lobbies, restaurant floors, upscale basements, and anywhere a premium appearance matters.",
      },
    ],
    idealFor: [
      "Showrooms",
      "Hotel lobbies",
      "Retail stores",
      "Upscale basements",
      "Restaurant floors",
    ],
  },
};

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} — Cedar Rapids, IA | RamRock Coatings`,
    description: `${service.description} Free estimates. Call RamRock Coatings: ${BUSINESS.phone}.`,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const content = SERVICE_CONTENT[slug];
  const heroImage = getPageHeroImage(slug);

  return (
    <>
      <PageHero
        eyebrow={service.shortName}
        title={service.name}
        description={content?.longDescription ?? service.description}
        backLink={{ href: "/services", label: "All Services" }}
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

      {/* Benefits + Ideal For */}
      <section className="py-20 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {content?.benefits && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Benefits
                </p>
                <ul className="space-y-3">
                  {content.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Star
                        size={14}
                        className="mt-1 shrink-0 fill-amber-400 text-amber-400"
                      />
                      <span className="text-foreground-muted text-sm leading-relaxed">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {content?.idealFor && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Ideal For
                </p>
                <div className="flex flex-wrap gap-2">
                  {content.idealFor.map((use) => (
                    <span
                      key={use}
                      className="bg-background-secondary border border-border rounded-full px-3 py-1 text-sm text-foreground-muted"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Gallery strip */}
      <section className="py-8 bg-background-secondary">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-5 text-center">
            Our Work
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "/images/gallery/01.jpg",
              "/images/gallery/02.jpg",
              "/images/gallery/04.jpg",
              "/images/gallery/06.jpg",
            ].map((src, i) => (
              <div
                key={i}
                className="group relative aspect-square rounded-xl overflow-hidden"
              >
                <ProjectImage
                  src={src}
                  alt="Epoxy flooring project by RamRock Coatings"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      {content?.process && (
        <section className="py-20 bg-background">
          <Container size="md">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2 text-center">
              How It Works
            </p>
            <h2 className="font-serif text-4xl text-center text-foreground mb-10">
              Our Installation Process
            </h2>
            <div className="space-y-4">
              {content.process.map((step, i) => (
                <div
                  key={step.step}
                  className="flex gap-5 bg-white border border-border rounded-xl p-5"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {step.step}
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed max-w-prose">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      {content?.faq && (
        <section className="py-16 bg-background-secondary">
          <Container size="md">
            <h2 className="font-serif text-3xl text-center text-foreground mb-8">
              Common Questions
            </h2>
            <div className="space-y-3">
              {content.faq.map((item) => (
                <div
                  key={item.q}
                  className="bg-white border border-border rounded-xl p-5"
                >
                  <h3 className="font-semibold text-foreground mb-2 text-sm">
                    {item.q}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button href="/faq" variant="secondary">
                View All FAQs
              </Button>
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-amber-700 text-white">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-serif text-4xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-amber-100 text-lg mb-8">
              Get a free, no-obligation estimate for {service.name.toLowerCase()} in
              your home or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" className="text-base px-7 py-3.5">
                Get a Free Estimate
              </Button>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 text-base font-semibold px-7 py-3.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
              >
                <Phone size={16} />
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Service schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.description,
            provider: {
              "@type": "LocalBusiness",
              name: "RamRock Coatings",
              telephone: "+13192572061",
            },
            areaServed: {
              "@type": "State",
              name: "Iowa",
            },
          }),
        }}
      />
    </>
  );
}
