import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BUSINESS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | RamRock Coatings",
  description: "Privacy policy for RamRock Coatings — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  const updated = "June 2025";

  return (
    <main className="py-20 md:py-28">
      <Container size="md">
        <h1 className="heading-section mb-2">Privacy Policy</h1>
        <p className="text-sm text-foreground-muted mb-12">Last updated: {updated}</p>

        <div className="prose prose-stone max-w-prose space-y-8 text-foreground-muted leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p>
              When you contact us through this website — by submitting the estimate form, calling, or emailing — we
              collect the information you provide: your name, phone number, email address, and any project details you
              share. We do not collect payment information through this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
            <p>We use the information you provide solely to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Respond to your estimate request or inquiry</li>
              <li>Schedule and coordinate your flooring project</li>
              <li>Follow up on completed work</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Cookies & Analytics</h2>
            <p>
              This site may use basic analytics tools (such as Google Analytics) to understand how visitors use the
              site — pages viewed, time on site, and general location. This data is aggregated and anonymous. You can
              opt out via your browser settings or browser extensions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Retention</h2>
            <p>
              We retain your contact information only as long as necessary to complete your project and any follow-up
              communications. You can request deletion of your information at any time by contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Security</h2>
            <p>
              We take reasonable precautions to protect your information. However, no method of transmission over the
              internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Contact</h2>
            <p>
              Questions about this policy? Reach us at{" "}
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
