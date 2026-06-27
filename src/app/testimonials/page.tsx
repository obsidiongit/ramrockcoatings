import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { TESTIMONIALS, STATS } from "@/lib/data";
import { getPageHeroImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Customer Reviews | RamRock Coatings — Cedar Rapids, IA",
  description:
    "See what homeowners and businesses across Iowa say about RamRock Coatings. 100% customer satisfaction on every epoxy flooring project.",
};

export default function TestimonialsPage() {
  const heroImage = getPageHeroImage("testimonials");
  const avgRating =
    TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS.length;

  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What Our Clients Say"
        description="Real feedback from homeowners who trusted RamRock Coatings with their floors."
        image={heroImage}
      />

      <section className="section-padding bg-background">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 p-6 bg-background-secondary rounded-2xl border border-border max-w-lg mx-auto">
            <div className="text-center">
              <p className="stat-value text-accent">{avgRating.toFixed(1)}</p>
              <div className="flex gap-0.5 justify-center mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-semibold text-foreground">Average Rating</p>
              <p className="text-sm text-foreground-muted">
                Based on {TESTIMONIALS.length} verified reviews
              </p>
            </div>
          </div>

          <SectionHeader
            heading="Customer Reviews"
            subtext="Every review below comes from a real RamRock Coatings client."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.id} className="card p-8">
                <span className="quote-mark mb-2 block" aria-hidden="true">&ldquo;</span>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-foreground-muted leading-relaxed mb-6">{t.text}</p>
                <footer className="border-t border-border-light pt-4">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-foreground-subtle mt-0.5">{t.location}</p>
                  {"service" in t && t.service && (
                    <p className="text-xs text-accent mt-1 font-medium">{t.service}</p>
                  )}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className="stats-bar section-padding-sm">
        <Container size="xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
