import type { Metadata } from "next";
import type { FC } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Home,
  Building2,
  ShieldCheck,
  Sparkles,
  Layers,
  Gem,
  Paintbrush,
  Waves,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { BUSINESS, SERVICES } from "@/lib/data";
import { getPageHeroImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Epoxy Flooring Services | RamRock Coatings — Cedar Rapids, IA",
  description:
    "RamRock Coatings offers residential, commercial, metallic, flake, quartz, solid color, marble, and anti-slip epoxy flooring. Free estimates. Cedar Rapids, IA.",
};

const SERVICE_ICONS: Record<string, FC<{ size?: number; className?: string }>> = {
  "residential-epoxy-flooring": Home,
  "commercial-epoxy-flooring": Building2,
  "anti-slip-coating": ShieldCheck,
  "metallic-epoxy-flooring": Sparkles,
  "flake-chip-epoxy-flooring": Layers,
  "quartz-epoxy-flooring": Gem,
  "solid-color-epoxy-flooring": Paintbrush,
  "marble-epoxy-flooring": Waves,
};

export default function ServicesPage() {
  const heroImage = getPageHeroImage("services");

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Every Type of Epoxy Floor, Done Right"
        description="From garage makeovers to commercial warehouses, we have the right coating system for your space, your budget, and your goals."
        image={heroImage}
      />

      {/* Services grid */}
      <section className="py-24 bg-background">
        <Container>
          <SectionHeader
            eyebrow="What We Install"
            heading="Our Coating Systems"
            subtext="Each system is matched to your specific surface, use case, and design goals."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.slug] ?? Paintbrush;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-white border border-border rounded-2xl p-7 hover:border-accent hover:shadow-md transition-all duration-200 flex gap-5"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/[0.07] border border-accent/15 flex items-center justify-center mt-0.5 transition-colors group-hover:bg-accent/[0.12]">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-foreground mb-1.5 group-hover:text-accent transition-colors">
                      {service.name}
                    </h2>
                    <p className="text-sm text-foreground-muted leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent">
                      Learn more <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-700 text-white">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-serif text-4xl mb-4">Not sure which system is right?</h2>
            <p className="text-amber-100 text-lg mb-8">
              That&rsquo;s what the estimate is for. We&rsquo;ll assess your floor and
              recommend the best option for your needs and budget.
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
