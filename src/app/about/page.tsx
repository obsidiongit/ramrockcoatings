import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { WHY_CHOOSE } from "@/lib/data";
import { getPageHeroImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "About RamRock Coatings | Locally Owned Epoxy Flooring — Cedar Rapids, IA",
  description:
    "RamRock Coatings is a locally owned epoxy flooring contractor in Cedar Rapids, IA. Learn about our story, values, and commitment to quality craftsmanship.",
};

const VALUES = [
  {
    title: "Honesty First",
    description:
      "We quote fairly, communicate clearly, and never charge for work we didn't do. Your trust is more valuable than any upsell.",
  },
  {
    title: "Attention to Detail",
    description:
      "Surface prep determines 80% of how long an epoxy floor lasts. We take prep seriously — every edge, every crack, every square foot.",
  },
  {
    title: "Locally Rooted",
    description:
      "We live and work in Cedar Rapids. Our reputation is built right here, neighbor by neighbor, floor by floor.",
  },
];

export default function AboutPage() {
  const heroImage = getPageHeroImage("about");

  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Built on Craft, Grounded in Iowa"
        description="RamRock Coatings started with a simple idea: do the work right, be straight with people, and let the floors speak for themselves."
        image={heroImage}
      />

      {/* Story section */}
      <section className="section-padding bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                Who We Are
              </p>
              <h2 className="font-serif text-4xl text-foreground leading-tight mb-6">
                A Local Crew That Takes Prep Seriously
              </h2>
              <div className="space-y-4 text-foreground-muted leading-relaxed max-w-prose">
                <p>
                  RamRock Coatings is a locally owned epoxy flooring contractor
                  based in Cedar Rapids, Iowa. We install residential and
                  commercial floor coatings — from classic garage flake to
                  metallic and marble-look finishes.
                </p>
                <p>
                  Our approach is straightforward: durable floors, clear
                  pricing, and no surprises. Every project gets the same
                  attention — whether it&rsquo;s a two-car garage or a warehouse
                  floor.
                </p>
                <p>
                  We don&rsquo;t cut corners, rush jobs, or upsell unnecessary
                  add-ons. We show up on time, do the prep work properly, and
                  leave you with a floor that looks great and lasts for years.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {VALUES.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <CheckCircle size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{v.title}</h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose section */}
      <section className="section-padding bg-background-secondary">
        <Container>
          <SectionHeader
            eyebrow="Why RamRock"
            heading="What Sets Us Apart"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item, i) => (
              <div key={item.title} className="feature-card">
                <span className="feature-card-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="feature-card-rule" aria-hidden="true" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Let's Work Together"
        description="Ready to see what RamRock can do for your floor? Get in touch for a free, no-pressure estimate."
      />
    </>
  );
}
