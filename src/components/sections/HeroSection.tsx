import { Phone, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { BUSINESS } from "@/lib/data";
import { HERO_IMAGE } from "@/lib/images";

export function HeroSection() {
  return (
    <section className="hero-photo relative min-h-[72vh] md:min-h-[78vh] flex items-end">
      <div className="hero-photo-slide" data-active="true">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[center_55%]"
        />
      </div>

      <div className="hero-photo-scrim" aria-hidden="true" />

      <Container size="xl" className="hero-content relative z-10 w-full pb-16 md:pb-20 pt-28 md:pt-32">
        <FadeIn className="hero-text-block max-w-2xl">
          <span className="hero-location-pill mb-5 inline-flex items-center gap-2">
            <span className="hero-location-dot" aria-hidden="true" />
            Cedar Rapids, Iowa
          </span>

          <h1 className="heading-display text-white mb-5">
            Floors That Combine{" "}
            <span className="hero-accent">Strength</span> and Beauty
          </h1>
          <p className="lead hero-lead mb-8 max-w-xl">
            RamRock Coatings installs premium epoxy floors for homes and
            businesses across Iowa. Honest pricing, zero hidden fees, and
            results that last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="bg-white text-stone-900 hover:bg-stone-100 focus-visible:ring-white"
            >
              Get a Free Estimate
            </Button>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 text-base font-semibold px-7 py-3.5 rounded-lg border border-white/25 text-white hover:bg-white/10 transition-colors duration-200"
            >
              <Phone size={16} />
              {BUSINESS.phone}
            </a>
          </div>

          <div className="hero-trust mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href={BUSINESS.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-trust-item group"
            >
              <span className="hero-trust-stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-white/90 text-white/90" />
                ))}
              </span>
              <span>5-star reviews</span>
            </a>
            <span className="hero-trust-divider" aria-hidden="true" />
            <span className="hero-trust-item">Locally owned</span>
            <span className="hero-trust-divider hidden sm:inline" aria-hidden="true" />
            <span className="hero-trust-item">Licensed &amp; insured</span>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
