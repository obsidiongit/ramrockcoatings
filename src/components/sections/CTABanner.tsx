import { Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { BUSINESS } from "@/lib/data";

interface CTABannerProps {
  title?: string;
  description?: string;
}

export function CTABanner({
  title = "Ready for a New Floor?",
  description = "Get a free estimate today. No pressure, no hidden fees — just an honest quote for quality work.",
}: CTABannerProps) {
  return (
    <section className="cta-banner section-padding">
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <FadeIn className="lg:col-span-7">
            <p className="eyebrow eyebrow-light mb-3">Let&rsquo;s talk</p>
            <h2 className="heading-section text-white mb-4">{title}</h2>
            <p className="text-amber-100/90 text-lg leading-relaxed max-w-xl">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Get a Free Estimate
              </Button>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 text-base font-semibold px-7 py-3.5 rounded-lg border border-white/35 text-white hover:bg-white/10 transition-colors duration-200"
              >
                <Phone size={16} />
                Call {BUSINESS.phone}
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-5">
            <div className="cta-contact-panel">
              <p className="cta-contact-panel-title">Reach us directly</p>
              <ul className="cta-contact-list">
                <li>
                  <a href={BUSINESS.phoneHref} className="cta-contact-link">
                    <Phone size={16} strokeWidth={1.75} />
                    <span>
                      <span className="cta-contact-label">Phone</span>
                      {BUSINESS.phone}
                    </span>
                  </a>
                </li>
                <li>
                  <a href={BUSINESS.emailHref} className="cta-contact-link">
                    <Mail size={16} strokeWidth={1.75} />
                    <span>
                      <span className="cta-contact-label">Email</span>
                      {BUSINESS.email}
                    </span>
                  </a>
                </li>
                <li>
                  <div className="cta-contact-link cta-contact-link-static">
                    <Clock size={16} strokeWidth={1.75} />
                    <span>
                      <span className="cta-contact-label">Hours</span>
                      7 days · 6:30AM–9PM
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
