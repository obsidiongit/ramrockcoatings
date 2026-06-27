import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { TESTIMONIALS, BUSINESS } from "@/lib/data";
import { ABOUT_IMAGE } from "@/lib/images";

export function AboutSection() {
  return (
    <section className="section-padding bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn>
            <p className="eyebrow mb-3">About RamRock</p>
            <div className="section-divider section-divider-left mb-5" aria-hidden="true" />
            <h2 className="heading-section text-foreground mb-6">
              Quality That Shows Up on Day One — and Year Five
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-5">
              RamRock Coatings is a locally owned epoxy flooring contractor
              based in Cedar Rapids, IA. We&rsquo;re not the cheapest option in Iowa,
              and we&rsquo;re okay with that. Cheap prep work means delamination in
              two years. We diamond-grind every surface, apply a moisture-blocking primer,
              and use commercial-grade coatings that actually last.
            </p>
            <p className="text-foreground-muted leading-relaxed mb-8">
              Garage, basement, or commercial floor — you get a crew that treats your
              space like it&rsquo;s their own. Honest timeline, itemized quote, clean jobsite.
            </p>

            <dl className="about-stats grid grid-cols-3 gap-4 mb-8">
              <div>
                <dt className="sr-only">Hidden fees</dt>
                <dd className="about-stat-value">0</dd>
                <dd className="about-stat-label">Hidden fees</dd>
              </div>
              <div>
                <dt className="sr-only">Availability</dt>
                <dd className="about-stat-value">7</dd>
                <dd className="about-stat-label">Days a week</dd>
              </div>
              <div>
                <dt className="sr-only">Service area</dt>
                <dd className="about-stat-value">8+</dd>
                <dd className="about-stat-label">Iowa cities</dd>
              </div>
            </dl>

            <Button href="/about" variant="primary">
              Our Story
            </Button>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="about-photo-frame">
              <ProjectImage
                src={ABOUT_IMAGE.src}
                alt={ABOUT_IMAGE.alt}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="aspect-[4/3] rounded-xl"
              />
              <div className="about-photo-badge">
                <span className="about-photo-badge-title">Locally owned</span>
                <span className="about-photo-badge-sub">Cedar Rapids, IA</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-background">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Reviews"
            heading="What Our Clients Say"
            subtext="Verified Yelp reviews from RamRock Coatings clients."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.08}>
              <TestimonialCard testimonial={t} compact />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Button href="/testimonials" variant="secondary">
            Read Full Reviews
          </Button>
          <a
            href={BUSINESS.social.yelp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:text-accent-dark transition-colors"
          >
            See all reviews on Yelp →
          </a>
        </FadeIn>
      </Container>
    </section>
  );
}
