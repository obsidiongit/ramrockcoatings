import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { BUSINESS } from "@/lib/data";
import { getPageHeroImage } from "@/lib/images";

const ALL_PHOTOS = {
  residential: [
    { src: "/images/gallery/01.jpg", alt: "Deep blue metallic epoxy floor in a residential garage", service: "Metallic" },
    { src: "/images/gallery/14.jpg", alt: "Warm metallic epoxy floor in a finished basement", service: "Metallic" },
    { src: "/images/gallery/02.jpg", alt: "Grey and black flake and chip epoxy garage floor", service: "Flake & Chip" },
    { src: "/images/gallery/15.jpg", alt: "Flake epoxy garage floor with a crisp coved edge", service: "Flake & Chip" },
    { src: "/images/gallery/04.jpg", alt: "High-gloss solid grey epoxy residential garage", service: "Solid Color" },
    { src: "/images/gallery/08.jpg", alt: "Slate-grey high-gloss solid epoxy garage floor", service: "Solid Color" },
    { src: "/images/gallery/05.jpg", alt: "Marble-look epoxy floor in a home entryway", service: "Marble" },
    { src: "/images/hero/slide-1.jpg", alt: "Luxury garage with metallic epoxy and LED lighting", service: "Metallic" },
    { src: "/images/gallery/11.jpg", alt: "Finished flake epoxy garage at golden hour", service: "Flake & Chip" },
  ],
  commercial: [
    { src: "/images/gallery/06.jpg", alt: "Bright red solid-color commercial epoxy warehouse floor", service: "Solid Color" },
    { src: "/images/gallery/12.jpg", alt: "Luxury copper metallic epoxy floor in a commercial showroom", service: "Metallic" },
    { src: "/images/gallery/07.jpg", alt: "Tan quartz broadcast epoxy floor in a commercial locker area", service: "Quartz" },
    { src: "/images/gallery/09.jpg", alt: "Textured anti-slip epoxy coating in a commercial entryway", service: "Anti-Slip" },
    { src: "/images/hero/slide-2.jpg", alt: "Polished grey epoxy floor in a large industrial space", service: "Solid Color" },
    { src: "/images/gallery/10.jpg", alt: "Concrete prepped with a diamond grinder before commercial coating", service: "Surface Prep" },
  ],
  "before-after": [
    { src: "/images/gallery/10.jpg", alt: "Bare concrete prepped with a diamond grinder before coating", service: "Surface Prep" },
    { src: "/images/gallery/03.jpg", alt: "Epoxy topcoat being spread over a fresh flake floor", service: "Coating Applied" },
    { src: "/images/gallery/04.jpg", alt: "Finished high-gloss grey epoxy garage floor", service: "Solid Color" },
    { src: "/images/gallery/01.jpg", alt: "Finished blue metallic epoxy garage floor", service: "Metallic" },
    { src: "/images/gallery/02.jpg", alt: "Finished flake and chip epoxy garage floor", service: "Flake & Chip" },
    { src: "/images/gallery/05.jpg", alt: "Finished marble-look epoxy entryway floor", service: "Marble" },
  ],
} as const;

const CATEGORIES = {
  residential: {
    label: "Residential Projects",
    eyebrow: "Homes & Garages",
    description:
      "Garage floors, basements, patios, and driveways for homeowners across Iowa. These are the projects where homeowners walk in the next morning and can't believe it's the same floor.",
  },
  commercial: {
    label: "Commercial Projects",
    eyebrow: "Business & Industrial",
    description:
      "Warehouses, showrooms, restaurants, and commercial facilities. Floors built to handle heavy traffic, equipment, and daily use.",
  },
  "before-after": {
    label: "Before & After",
    eyebrow: "Before & After",
    description:
      "Side-by-side looks at what proper prep and a quality coating system can do for tired concrete.",
  },
} as const;

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES[category as keyof typeof CATEGORIES];
  if (!cat) return {};
  return {
    title: `${cat.label} | RamRock Coatings`,
    description: `${cat.description} Cedar Rapids, Iowa epoxy flooring by RamRock Coatings.`,
  };
}

export default async function GalleryCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = CATEGORIES[category as keyof typeof CATEGORIES];
  if (!cat) notFound();

  const photos = ALL_PHOTOS[category as keyof typeof ALL_PHOTOS] ?? ALL_PHOTOS.residential;
  const heroImage = getPageHeroImage(`our-work-${category}`);

  return (
    <>
      <PageHero
        eyebrow={cat.eyebrow}
        title={cat.label}
        description={cat.description}
        backLink={{ href: "/our-work", label: "All Work" }}
        image={heroImage}
      />

      {/* Photo grid */}
      <section className="py-16 bg-background">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              >
                <ProjectImage
                  src={photo.src}
                  alt={photo.alt}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/55 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold text-white">{photo.service}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-foreground-subtle mt-10">
            More photos added as projects are completed.{" "}
            <a
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-dark font-medium"
            >
              See recent work on Instagram →
            </a>
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-700 text-white">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-serif text-4xl mb-4">Want a Floor Like This?</h2>
            <p className="text-amber-100 text-lg mb-8">
              Get a free estimate and see what RamRock can do for your space.
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
    </>
  );
}
