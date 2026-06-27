import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { BUSINESS } from "@/lib/data";
import { getPageHeroImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Epoxy Flooring Gallery | RamRock Coatings — Cedar Rapids, IA",
  description:
    "Browse RamRock Coatings' project gallery. Residential garages, commercial floors, metallic finishes, before & after transformations across Iowa.",
};

const CATEGORIES = [
  {
    slug: "residential",
    label: "Residential",
    description: "Garages, basements, patios, and driveways for homeowners across Iowa.",
    image: { src: "/images/gallery/01.jpg", alt: "Metallic blue epoxy floor in a residential garage — Cedar Rapids IA" },
  },
  {
    slug: "commercial",
    label: "Commercial",
    description: "Warehouses, showrooms, restaurants, and industrial facilities.",
    image: { src: "/images/gallery/06.jpg", alt: "Commercial red epoxy floor in industrial warehouse" },
  },
  {
    slug: "before-after",
    label: "Before & After",
    description: "The most satisfying proof of what a new floor can do for a space.",
    image: { src: "/images/gallery/10.jpg", alt: "Concrete surface prep with a diamond grinder before epoxy coating" },
  },
];

const GALLERY_PHOTOS = [
  {
    src: "/images/gallery/01.jpg",
    alt: "Deep blue metallic epoxy floor in a modern residential garage",
    service: "Metallic",
    category: "Residential",
  },
  {
    src: "/images/gallery/06.jpg",
    alt: "Bright red solid-color commercial epoxy floor in a warehouse",
    service: "Solid Color",
    category: "Commercial",
  },
  {
    src: "/images/gallery/05.jpg",
    alt: "White and grey marble-look epoxy floor in a home entryway",
    service: "Marble",
    category: "Residential",
  },
  {
    src: "/images/gallery/02.jpg",
    alt: "Grey, white and black flake and chip epoxy garage floor",
    service: "Flake & Chip",
    category: "Residential",
  },
  {
    src: "/images/gallery/12.jpg",
    alt: "Luxury copper and charcoal metallic epoxy floor in a commercial showroom",
    service: "Metallic",
    category: "Commercial",
  },
  {
    src: "/images/gallery/04.jpg",
    alt: "High-gloss solid grey epoxy floor in a clean residential garage",
    service: "Solid Color",
    category: "Residential",
  },
  {
    src: "/images/gallery/07.jpg",
    alt: "Tan quartz broadcast epoxy floor in a commercial locker area",
    service: "Quartz",
    category: "Commercial",
  },
  {
    src: "/images/gallery/15.jpg",
    alt: "Flake epoxy garage floor with a crisp coved edge",
    service: "Flake & Chip",
    category: "Residential",
  },
  {
    src: "/images/gallery/09.jpg",
    alt: "Textured anti-slip epoxy coating in a commercial entryway",
    service: "Anti-Slip",
    category: "Commercial",
  },
];

export default function OurWorkPage() {
  const heroImage = getPageHeroImage("our-work");

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Floors We're Proud Of"
        description="A look at the garages, basements, and commercial spaces we've coated across Iowa."
        image={heroImage}
      />

      {/* Category cards */}
      <section className="py-16 bg-background">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/our-work/${cat.slug}`}
                className="group bg-white border border-border rounded-2xl overflow-hidden hover:border-accent hover:shadow-md transition-all duration-200"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <ProjectImage
                    src={cat.image.src}
                    alt={cat.image.alt}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1.5">
                    <h2 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      {cat.label}
                    </h2>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed mb-3">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent">
                    View gallery <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* All photos grid */}
      <section className="py-8 pb-24 bg-background-secondary">
        <Container>
          <SectionHeader
            eyebrow="All Projects"
            heading="Recent Work"
            subtext="More photos added as we complete projects — follow us on Instagram for the latest."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY_PHOTOS.map((photo, i) => (
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
                  <div>
                    <p className="text-sm font-semibold text-white">{photo.service}</p>
                    <p className="text-xs text-stone-300">{photo.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-foreground-subtle mt-10">
            More photos added regularly.{" "}
            <a
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-dark font-medium"
            >
              Follow us on Instagram
            </a>{" "}
            for the latest projects.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-700 text-white">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-serif text-4xl mb-4">Like What You See?</h2>
            <p className="text-amber-100 text-lg mb-8">
              Get a free estimate and we&rsquo;ll show you what we can do for your
              specific space.
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
