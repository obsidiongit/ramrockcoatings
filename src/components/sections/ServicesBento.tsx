import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { SERVICES } from "@/lib/data";
import { SERVICE_IMAGES } from "@/lib/images";

const FEATURED_SLUGS = [
  "metallic-epoxy-flooring",
  "residential-epoxy-flooring",
  "commercial-epoxy-flooring",
] as const;

const FINISH_SLUGS = [
  "flake-chip-epoxy-flooring",
  "quartz-epoxy-flooring",
  "marble-epoxy-flooring",
  "solid-color-epoxy-flooring",
  "anti-slip-coating",
] as const;

function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug)!;
}

export function ServicesBento() {
  const featured = FEATURED_SLUGS.map((slug) => ({
    ...getService(slug),
    image: SERVICE_IMAGES[slug],
  }));

  const finishes = FINISH_SLUGS.map((slug) => ({
    ...getService(slug),
    image: SERVICE_IMAGES[slug],
  }));

  const [metallic, residential, commercial] = featured;

  return (
    <section className="section-padding bg-background">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="What We Do"
            heading="Every Type of Epoxy Floor, Done Right"
            subtext="From garage flake floors to metallic showrooms, we match the coating to your space and budget."
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
          {/* Featured metallic — large */}
          <FadeIn className="lg:col-span-7 lg:row-span-2">
            <Link
              href={`/services/${metallic.slug}`}
              className="photo-card group block h-full min-h-[320px] lg:min-h-[480px]"
            >
              <ProjectImage
                src={metallic.image.src}
                alt={metallic.image.alt}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="absolute inset-0"
              />
              <div className="photo-card-overlay" />
              <div className="photo-card-content">
                <p className="photo-card-eyebrow">Signature Finish</p>
                <h3 className="photo-card-title">{metallic.shortName}</h3>
                <p className="photo-card-desc">{metallic.tagline}</p>
                <span className="photo-card-link">
                  Explore finish <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </FadeIn>

          {/* Residential */}
          <FadeIn delay={0.05} className="lg:col-span-5">
            <Link
              href={`/services/${residential.slug}`}
              className="photo-card group block min-h-[240px]"
            >
              <ProjectImage
                src={residential.image.src}
                alt={residential.image.alt}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="absolute inset-0"
              />
              <div className="photo-card-overlay" />
              <div className="photo-card-content">
                <h3 className="photo-card-title">{residential.shortName}</h3>
                <p className="photo-card-desc">{residential.tagline}</p>
                <span className="photo-card-link">
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </FadeIn>

          {/* Commercial */}
          <FadeIn delay={0.1} className="lg:col-span-5">
            <Link
              href={`/services/${commercial.slug}`}
              className="photo-card group block min-h-[240px]"
            >
              <ProjectImage
                src={commercial.image.src}
                alt={commercial.image.alt}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="absolute inset-0"
              />
              <div className="photo-card-overlay" />
              <div className="photo-card-content">
                <h3 className="photo-card-title">{commercial.shortName}</h3>
                <p className="photo-card-desc">{commercial.tagline}</p>
                <span className="photo-card-link">
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </FadeIn>
        </div>

        {/* Finish swatches — 6 tiles so 2×3 / 3×2 grids never leave a hole */}
        <FadeIn delay={0.12} className="mt-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {finishes.map((finish) => (
              <Link
                key={finish.slug}
                href={`/services/${finish.slug}`}
                className="finish-swatch group"
              >
                <div className="finish-swatch-image">
                  <ProjectImage
                    src={finish.image.src}
                    alt={finish.image.alt}
                    sizes="(max-width: 640px) 50vw, 16vw"
                    className="absolute inset-0 aspect-[4/3]"
                  />
                </div>
                <div className="finish-swatch-label">
                  <span className="font-semibold text-sm text-foreground group-hover:text-foreground transition-colors">
                    {finish.shortName}
                  </span>
                  <ArrowRight
                    size={12}
                    className="text-foreground-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                  />
                </div>
              </Link>
            ))}
            <Link href="/services" className="finish-swatch finish-swatch-all group">
              <div className="finish-swatch-image finish-swatch-all-panel">
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                  8 services
                </span>
              </div>
              <div className="finish-swatch-label">
                <span className="font-semibold text-sm text-foreground group-hover:text-foreground transition-colors">
                  View All
                </span>
                <ArrowRight
                  size={12}
                  className="text-foreground-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                />
              </div>
            </Link>
          </div>
        </FadeIn>

        <FadeIn className="text-center mt-12">
          <Button href="/services" variant="secondary">
            View All Services
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
