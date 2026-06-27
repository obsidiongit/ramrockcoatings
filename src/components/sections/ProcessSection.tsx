import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { PROCESS_STEPS } from "@/lib/data";
import { PROCESS_IMAGE } from "@/lib/images";

export function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-background-secondary">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <FadeIn>
              <SectionHeader
                align="left"
                eyebrow="Our Process"
                heading="Prep Is Everything"
                subtext="The difference between a floor that peels in two years and one that lasts twenty starts before the first coat goes down."
                className="mb-10 md:mb-12"
              />
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              {PROCESS_STEPS.map((step, i) => (
                <FadeIn key={step.step} delay={i * 0.08}>
                  <div className="process-step h-full">
                    <p className="process-step-number mb-2">{step.step}</p>
                    <h3 className="font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.1} className="lg:sticky lg:top-28">
            <div className="process-photo-frame">
              <ProjectImage
                src={PROCESS_IMAGE.src}
                alt={PROCESS_IMAGE.alt}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="aspect-[4/5] md:aspect-[3/4] rounded-xl"
              />
              <p className="process-photo-caption">
                Every project starts with proper surface prep — no shortcuts.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
