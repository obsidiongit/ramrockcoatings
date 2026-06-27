import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { getPageHeroImage } from "@/lib/images";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact RamRock Coatings | Free Epoxy Flooring Estimate — Cedar Rapids, IA",
  description:
    "Request a free epoxy flooring estimate from RamRock Coatings. Call (319) 257-2061 or send a message — we respond within one business day.",
};

export default function ContactPage() {
  const heroImage = getPageHeroImage("contact");

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Request a Free Estimate"
        description="Tell us about your project and we'll get back to you within one business day. No obligation, no pressure."
        image={heroImage}
      />

      <ContactForm />
    </>
  );
}
