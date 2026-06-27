import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BUSINESS } from "@/lib/data";
import { GHLFormEmbed } from "./GHLFormEmbed";

export function ContactForm() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <GHLFormEmbed />
          </div>

          <div className="space-y-6">
            <div className="bg-background-secondary rounded-2xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4">
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={BUSINESS.phoneHref}
                    className="flex items-start gap-3 text-sm hover:text-accent transition-colors group"
                  >
                    <Phone
                      size={16}
                      className="mt-0.5 shrink-0 text-accent group-hover:text-accent-dark"
                    />
                    <span>
                      <span className="font-medium text-foreground block">Phone</span>
                      {BUSINESS.phone}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={BUSINESS.emailHref}
                    className="flex items-start gap-3 text-sm hover:text-accent transition-colors group"
                  >
                    <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>
                      <span className="font-medium text-foreground block">Email</span>
                      {BUSINESS.email}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={BUSINESS.social.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm hover:text-accent transition-colors"
                  >
                    <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>
                      <span className="font-medium text-foreground block">Location</span>
                      {BUSINESS.address}
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground-muted">
                  <Clock size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>
                    <span className="font-medium text-foreground block">Hours</span>
                    Mon–Sat: 6:30AM–9PM
                    <br />
                    Sun: 6:30AM–9PM
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <p className="text-sm font-semibold text-amber-800 mb-1">
                Prefer to call?
              </p>
              <p className="text-sm text-amber-700 mb-3">
                We answer 7 days a week during business hours.
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-800 hover:text-amber-900"
              >
                <Phone size={14} />
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
