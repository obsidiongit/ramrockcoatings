import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { GALLERY_PREVIEW } from "@/lib/images";

export function GalleryPreview() {
  const [featured, ...rest] = GALLERY_PREVIEW;

  return (
    <section className="section-padding bg-background-secondary">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Our Work"
            heading="Real Floors, Real Iowa Homes"
            subtext="Recent installs across garages, basements, and commercial spaces in Iowa."
          />
        </FadeIn>

        {/* 3-col desktop grid: featured 2×2 top-left, 5 tiles fill the rest */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Featured large tile */}
          <FadeIn className="col-span-2 row-span-2 md:col-span-2 md:row-span-2 aspect-square md:aspect-auto md:h-[380px]">
            <Link href="/our-work" className="gallery-tile group block h-full">
              <ProjectImage
                src={featured.src}
                alt={featured.alt}
                sizes="(max-width: 768px) 100vw, 66vw"
                className="absolute inset-0"
              />
              <div className="gallery-tile-overlay" />
              <span className="gallery-tile-label">{featured.label}</span>
            </Link>
          </FadeIn>

          {/* 2 tiles top-right stacked */}
          {rest.slice(0, 2).map((item, i) => (
            <FadeIn key={item.src} delay={(i + 1) * 0.05} className="h-[182px] md:h-[182px]">
              <Link href="/our-work" className="gallery-tile group block h-full">
                <ProjectImage
                  src={item.src}
                  alt={item.alt}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="absolute inset-0"
                />
                <div className="gallery-tile-overlay" />
                <span className="gallery-tile-label">{item.label}</span>
              </Link>
            </FadeIn>
          ))}

          {/* Bottom row: 3 equal tiles */}
          {rest.slice(2).map((item, i) => (
            <FadeIn key={item.src} delay={(i + 3) * 0.05} className="aspect-square md:aspect-auto md:h-[180px]">
              <Link href="/our-work" className="gallery-tile group block h-full">
                <ProjectImage
                  src={item.src}
                  alt={item.alt}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="absolute inset-0"
                />
                <div className="gallery-tile-overlay" />
                <span className="gallery-tile-label">{item.label}</span>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-12">
          <Button href="/our-work" variant="secondary">
            View All Work
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
