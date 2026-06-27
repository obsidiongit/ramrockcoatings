import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BUSINESS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service | RamRock Coatings",
  description: "Terms of service for RamRock Coatings — Cedar Rapids, Iowa epoxy flooring.",
};

export default function TermsPage() {
  const updated = "June 2025";

  return (
    <main className="py-20 md:py-28">
      <Container size="md">
        <h1 className="heading-section mb-2">Terms of Service</h1>
        <p className="text-sm text-foreground-muted mb-12">Last updated: {updated}</p>

        <div className="prose prose-stone max-w-prose space-y-8 text-foreground-muted leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Use of This Website</h2>
            <p>
              This website is provided by RamRock Coatings for informational purposes. By using this site, you agree
              not to misuse it — including no scraping, no unauthorized access attempts, and no submission of false or
              misleading information through our contact forms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Estimates & Quotes</h2>
            <p>
              Submitting a request through this website does not constitute a binding contract or guarantee of service.
              All estimates are subject to an on-site assessment. Final pricing is confirmed in writing before any work
              begins.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Service Work</h2>
            <p>
              All flooring installation and coating services are governed by a separate written agreement or proposal
              provided at the time of booking. In the absence of a signed agreement, the terms discussed verbally with
              a RamRock Coatings representative apply.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Accuracy of Information</h2>
            <p>
              We make reasonable efforts to keep the content on this site current and accurate. However, we make no
              warranties about the completeness, reliability, or availability of any information, and pricing examples
              shown are illustrative only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Limitation of Liability</h2>
            <p>
              To the extent permitted by law, RamRock Coatings is not liable for any indirect or consequential damages
              arising from use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Governing Law</h2>
            <p>These terms are governed by the laws of the State of Iowa.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact</h2>
            <p>
              Questions?{" "}
              <a href={BUSINESS.emailHref} className="text-accent underline underline-offset-2">
                {BUSINESS.email}
              </a>{" "}
              or{" "}
              <a href={BUSINESS.phoneHref} className="text-accent underline underline-offset-2">
                {BUSINESS.phone}
              </a>
              .
            </p>
          </section>

        </div>
      </Container>
    </main>
  );
}
