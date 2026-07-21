import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BUSINESS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service | RamRock Coatings",
  description:
    "Terms of Service for RamRock Coatings, including website use, service terms, and SMS messaging program terms.",
};

export default function TermsPage() {
  const updated = "July 21, 2026";

  return (
    <main className="py-20 md:py-28">
      <Container size="md">
        <h1 className="heading-section mb-2">Terms of Service</h1>
        <p className="text-sm text-foreground-muted mb-12">Last updated: {updated}</p>

        <div className="prose prose-stone max-w-prose space-y-8 text-foreground-muted leading-relaxed">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website located at{" "}
            <a href="https://ramrockcoatings.com" className="text-accent underline underline-offset-2">
              ramrockcoatings.com
            </a>{" "}
            and your relationship with RamRock Coatings (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By
            accessing our website or using our services, you agree to these Terms.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. About Our Services</h2>
            <p>
              RamRock Coatings provides epoxy flooring and coating services, including residential and commercial
              epoxy flooring, anti-slip coatings, metallic finishes, flake and chip systems, quartz coatings, solid
              color floors, and related surface preparation and installation services in the Cedar Rapids, Iowa area
              and surrounding communities.
            </p>
            <p className="mt-3">
              Information on this website is provided for general informational purposes. Estimates, timelines, and
              project details are subject to on-site evaluation and written agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Age Restriction (18+)</h2>
            <p>
              Our website, services, and SMS messaging program are intended only for individuals who are at least{" "}
              <strong className="text-foreground">18 years of age</strong>. By accessing this website, requesting an
              estimate, scheduling service, or opting in to receive text messages, you represent and warrant that you
              are 18 years of age or older. If you are under 18, you may not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Website Use</h2>
            <p>You agree to use this website only for lawful purposes. You may not:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Attempt to gain unauthorized access to our systems or data</li>
              <li>Interfere with the operation or security of the website</li>
              <li>Use the website to transmit spam, malware, or unlawful content</li>
              <li>Copy, scrape, or republish site content without permission, except as allowed by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Quotes, Scheduling, and Projects</h2>
            <p>
              Quotes and scheduling requests submitted through our website, phone, email, or text are not binding
              contracts until confirmed in writing. Project scope, pricing, payment terms, warranties, and
              cancellation policies will be set out in your estimate, invoice, or separate service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Text Messaging (SMS) Terms</h2>
            <p>If you opt in to receive text messages from RamRock Coatings, you agree to the following:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>You authorize us to send recurring text messages to the mobile number you provide.</li>
              <li>
                Messages may include appointment confirmations, scheduling updates, project notifications, and
                customer service responses.
              </li>
              <li>
                <strong className="text-foreground">Message frequency varies.</strong>
              </li>
              <li>
                <strong className="text-foreground">Message and data rates may apply.</strong>
              </li>
              <li>
                <strong className="text-foreground">
                  Consent to receive text messages is not required as a condition of purchasing goods or services.
                </strong>
              </li>
              <li>
                You may opt out at any time by replying <strong className="text-foreground">STOP</strong>. For help,
                reply <strong className="text-foreground">HELP</strong> or contact us at{" "}
                <a href={BUSINESS.phoneHref} className="text-accent underline underline-offset-2">
                  {BUSINESS.phone}
                </a>{" "}
                or{" "}
                <a href={BUSINESS.emailHref} className="text-accent underline underline-offset-2">
                  {BUSINESS.email}
                </a>
                .
              </li>
              <li>Carriers are not liable for delayed or undelivered messages.</li>
            </ul>
            <p className="mt-3">
              Our collection and use of personal information, including mobile numbers, is described in our{" "}
              <Link href="/privacy-policy" className="text-accent underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Intellectual Property</h2>
            <p>
              All content on this website—including text, logos, images, and design—is owned by RamRock Coatings or
              used with permission and is protected by applicable intellectual property laws. You may not reproduce or
              distribute our content without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Third-Party Links and Tools</h2>
            <p>
              Our website may include links to third-party websites or embedded tools such as scheduling forms, maps,
              or analytics services. We are not responsible for the content, policies, or practices of third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Disclaimer of Warranties</h2>
            <p>
              To the fullest extent permitted by law, this website and its content are provided &ldquo;as is&rdquo;
              and &ldquo;as available&rdquo; without warranties of any kind, whether express or implied, including
              implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, RamRock Coatings will not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of the website or our
              services. Our total liability for any claim relating to the website will not exceed the amount you paid
              us for the specific service giving rise to the claim, if any.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless RamRock Coatings from claims, damages, and expenses arising
              from your misuse of the website or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Iowa, without regard to conflict-of-law
              principles. Any dispute arising under these Terms will be brought in the state or federal courts located
              in Iowa, and you consent to their jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">12. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the top of this page
              indicates when the Terms were most recently revised. Your continued use of the website after changes are
              posted constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">13. Contact Us</h2>
            <p>
              <strong className="text-foreground">{BUSINESS.name}</strong>
              <br />
              {BUSINESS.address}
              <br />
              Phone:{" "}
              <a href={BUSINESS.phoneHref} className="text-accent underline underline-offset-2">
                {BUSINESS.phone}
              </a>
              <br />
              Email:{" "}
              <a href={BUSINESS.emailHref} className="text-accent underline underline-offset-2">
                {BUSINESS.email}
              </a>
            </p>
            <p className="mt-3">
              See also our{" "}
              <Link href="/privacy-policy" className="text-accent underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
