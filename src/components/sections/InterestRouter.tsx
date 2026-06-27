import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { INTEREST_ROUTES } from "@/lib/data";

export function InterestRouter() {
  return (
    <section className="section-padding bg-background">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Start Here"
            heading="What Can We Help You With?"
            subtext="Ready for a quote, or still comparing finishes? Pick the path that fits."
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {INTEREST_ROUTES.map((route, i) => (
            <FadeIn key={route.href} delay={i * 0.06}>
              <Link href={route.href} className="interest-card group">
                <div className="interest-card-image">
                  <ProjectImage
                    src={route.image.src}
                    alt={route.image.alt}
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="absolute inset-0 aspect-[4/5]"
                  />
                  <div className="interest-card-overlay" />
                </div>
                <div className="interest-card-body">
                  <p className="interest-card-eyebrow">{route.eyebrow}</p>
                  <h3 className="interest-card-title">{route.title}</h3>
                  <p className="interest-card-desc">{route.subtitle}</p>
                  <span className="interest-card-link">
                    {route.cta} <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
