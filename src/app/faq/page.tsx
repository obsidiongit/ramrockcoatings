import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { getPageHeroImage } from "@/lib/images";
import { FAQContent } from "./FAQContent";
import { FAQ_ITEMS } from "./faq-data";

export const metadata: Metadata = {
  title: "Epoxy Flooring FAQ | RamRock Coatings — Cedar Rapids, IA",
  description:
    "Answers to common questions about epoxy flooring cost, installation, durability, maintenance, and service area. RamRock Coatings, Cedar Rapids IA.",
};

export default function FAQPage() {
  const heroImage = getPageHeroImage("faq");

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common Questions"
        description="Everything you need to know about epoxy flooring, our process, and what to expect when you work with RamRock."
        image={heroImage}
      />

      <FAQContent />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </>
  );
}
