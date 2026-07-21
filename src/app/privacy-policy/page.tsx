import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BUSINESS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | RamRock Coatings",
  description:
    "Privacy policy for RamRock Coatings, including how we collect, use, and protect your information and SMS messaging preferences.",
};

export default function PrivacyPolicyPage() {
  const updated = "July 21, 2026";

  return (
    <main className="py-20 md:py-28">
      <Container size="md">
        <h1 className="heading-section mb-2">Privacy Policy</h1>
        <p className="text-sm text-foreground-muted mb-12">Last updated: {updated}</p>

        <div className="prose prose-stone max-w-prose space-y-8 text-foreground-muted leading-relaxed">
          <p>
            RamRock Coatings (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit{" "}
            <a href="https://ramrockcoatings.com" className="text-accent underline underline-offset-2">
              ramrockcoatings.com
            </a>
            , contact us, request an estimate, or communicate with us by phone, email, or text message.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong className="text-foreground">Contact information:</strong> Name, phone number, email address,
                and mailing or project address.
              </li>
              <li>
                <strong className="text-foreground">Project information:</strong> Details you provide about your
                property, scope of work, photos, measurements, surface conditions, and scheduling preferences.
              </li>
              <li>
                <strong className="text-foreground">Communications:</strong> Messages you send us by phone, email,
                text message, contact forms, booking forms, or chat.
              </li>
              <li>
                <strong className="text-foreground">Website usage data:</strong> IP address, browser type, pages
                visited, and similar analytics data collected through cookies or similar technologies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Respond to inquiries and provide estimates, quotes, and customer support</li>
              <li>Schedule appointments, site visits, and project work</li>
              <li>Send appointment reminders, project updates, and service-related communications</li>
              <li>Process payments and maintain business records</li>
              <li>Improve our website, services, and customer experience</li>
              <li>Comply with legal obligations and protect our business</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Text Messaging (SMS) Program</h2>
            <p>If you opt in to receive text messages from RamRock Coatings, the following terms apply:</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Types of Messages</h3>
            <p>We may send SMS messages related to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Appointment confirmations and reminders</li>
              <li>Estimate and scheduling updates</li>
              <li>Project status and service notifications</li>
              <li>Responses to your customer service requests</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Consent</h3>
            <p>
              By providing your mobile phone number and opting in—whether through our website, booking form, written
              agreement, or other documented consent—you agree to receive recurring automated and non-automated text
              messages from RamRock Coatings at the number provided.{" "}
              <strong className="text-foreground">
                Consent to receive text messages is not a condition of purchasing any goods or services.
              </strong>
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Message Frequency</h3>
            <p>
              Message frequency varies depending on your project status, appointment schedule, and communications with
              us.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Costs</h3>
            <p>
              <strong className="text-foreground">Message and data rates may apply.</strong> Contact your wireless
              carrier for details about your messaging plan.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Opt-Out and Help</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                To stop receiving text messages, reply <strong className="text-foreground">STOP</strong> to any
                message from us. After you opt out, we may send one final confirmation message.
              </li>
              <li>
                For help, reply <strong className="text-foreground">HELP</strong> or contact us using the information
                below.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Mobile Information Sharing</h3>
            <p>
              No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.
              Information sharing to subcontractors in support services, such as customer service is permitted. All
              other use case categories exclude text messaging originator opt-in data and consent; this information
              will not be shared with any third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">How We Share Information</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                Service providers that help us operate our business (for example, scheduling, CRM, payment processing,
                website hosting, or messaging platforms)
              </li>
              <li>Professional advisors such as accountants, insurers, or attorneys when reasonably necessary</li>
              <li>Law enforcement or other parties when required by law or to protect our rights</li>
            </ul>
            <p className="mt-3">We do not sell your personal information.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Cookies and Analytics</h2>
            <p>
              Our website may use cookies and similar technologies to understand site traffic and improve performance.
              You can adjust your browser settings to refuse cookies, though some site features may not function
              properly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Data Retention</h2>
            <p>
              We retain personal information for as long as needed to provide services, maintain business records,
              resolve disputes, and comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Security</h2>
            <p>
              We use reasonable administrative, technical, and physical safeguards to protect your information. No
              method of transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Your Choices</h2>
            <p>
              You may request access to, correction of, or deletion of certain personal information by contacting us.
              You may also opt out of marketing emails by using the unsubscribe link in those emails, if provided.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Children&rsquo;s Privacy</h2>
            <p>
              Our services are not directed to individuals under 18, and we do not knowingly collect personal
              information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of
              this page indicates when the policy was most recently revised. Continued use of our services after
              changes are posted constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
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
              <Link href="/terms" className="text-accent underline underline-offset-2">
                Terms of Service
              </Link>
              .
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
