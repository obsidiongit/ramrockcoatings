import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { WHY_CHOOSE } from "@/lib/data";

const HIGHLIGHTS = WHY_CHOOSE.slice(0, 3);

export function WhyChooseSection() {
  return (
    <section className="section-padding hero-dark">
      <Container className="hero-content">
        <FadeIn>
          <SectionHeader
            dark
            eyebrow="Why RamRock"
            heading="Why Iowa Homeowners Choose RamRock"
            subtext="No subs, no surprises, no cutting corners. Here&rsquo;s what working with us actually looks like."
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Proof points */}
          <div className="lg:col-span-7 space-y-8">
            {HIGHLIGHTS.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.06}>
                <div className="why-highlight">
                  <div className="why-highlight-marker" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-stone-400 leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Pull quote */}
          <FadeIn delay={0.15} className="lg:col-span-5">
            <blockquote className="why-pullquote">
              <span className="why-pullquote-mark" aria-hidden="true">&ldquo;</span>
              <p className="why-pullquote-text">
                They showed up on time, prepped the floor properly, and the result looks incredible.
                Three years later it still looks brand new. Worth every penny.
              </p>
              <footer className="why-pullquote-footer">
                <span className="why-pullquote-name">Jason R.</span>
                <span className="why-pullquote-meta">Garage floor · Marion, IA</span>
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
