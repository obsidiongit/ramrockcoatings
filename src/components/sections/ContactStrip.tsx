import { Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BUSINESS } from "@/lib/data";

export function ContactStrip() {
  return (
    <section className="contact-strip-wrap" aria-label="Quick contact">
      <Container size="xl">
        <div className="contact-strip">
          <a href={BUSINESS.phoneHref} className="contact-strip-item group">
            <span className="contact-strip-icon" aria-hidden="true">
              <Phone size={18} strokeWidth={1.75} />
            </span>
            <span className="contact-strip-text">
              <span className="contact-strip-label">Call us</span>
              <span className="contact-strip-value">{BUSINESS.phone}</span>
            </span>
          </a>

          <a href={BUSINESS.emailHref} className="contact-strip-item group">
            <span className="contact-strip-icon" aria-hidden="true">
              <Mail size={18} strokeWidth={1.75} />
            </span>
            <span className="contact-strip-text">
              <span className="contact-strip-label">Email</span>
              <span className="contact-strip-value">{BUSINESS.email}</span>
            </span>
          </a>

          <div className="contact-strip-item contact-strip-item-static">
            <span className="contact-strip-icon" aria-hidden="true">
              <Clock size={18} strokeWidth={1.75} />
            </span>
            <span className="contact-strip-text">
              <span className="contact-strip-label">Hours</span>
              <span className="contact-strip-value">7 days · 6:30AM–9PM</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
