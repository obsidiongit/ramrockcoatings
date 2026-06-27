import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { Button } from "@/components/ui/Button";
const COMMITMENTS = [
  "We show up when we say we will — no chasing us down",
  "Every quote is itemized and written — no surprises at the end",
  "We stay until the job is done right, not just done",
  "If something's off after install, we come back and fix it",
];

export function MeetSection() {
  return (
    <section className="section-padding bg-background-secondary">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-20 items-start">
          {/* Photo column */}
          <FadeIn className="relative">
            <div className="meet-photo-frame">
              <ProjectImage
                src="/images/gallery/15.jpg"
                alt="Flawless flake epoxy garage floor with crisp coved edge — RamRock Coatings craftsmanship"
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="aspect-[4/5] rounded-2xl"
              />
              {/* Corner accent */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 w-28 h-28 rounded-2xl border-2 border-accent/30 -z-10"
              />
            </div>
          </FadeIn>

          {/* Copy column */}
          <FadeIn delay={0.08}>
            <p className="eyebrow mb-3">Who We Are</p>
            <div className="section-divider section-divider-left mb-6" aria-hidden="true" />
            <h2 className="heading-section text-foreground mb-5">
              A Small Crew That Takes Big Pride in the Work
            </h2>

            <p className="text-foreground-muted leading-relaxed mb-4">
              RamRock Coatings is a locally owned operation out of Cedar Rapids. We&rsquo;re
              not a franchise, not a big box crew, not a company that sends a different
              sub every job. You talk to us directly, and we&rsquo;re the ones on your floor.
            </p>

            <p className="text-foreground-muted leading-relaxed mb-8">
              We got into this because we were frustrated with contractors who oversell,
              underdeliver, and disappear after the check clears. Our reputation in Iowa
              is built on the opposite: clear communication, quality materials, and floors
              that look as good in five years as they did on install day.
            </p>

            {/* Commitments list */}
            <ul className="space-y-3 mb-10">
              {COMMITMENTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-accent shrink-0 mt-0.5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span className="text-sm text-foreground-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/about" variant="primary">
                Our Story
              </Button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
              >
                Get a free estimate <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
