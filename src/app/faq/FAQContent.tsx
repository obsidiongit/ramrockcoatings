"use client";

import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BUSINESS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FAQ_CATEGORIES, FAQ_ITEMS } from "./faq-data";

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-background-secondary transition-colors"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-foreground">{q}</span>
        <ChevronDown
          size={16}
          className={cn(
            "shrink-0 text-foreground-muted transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-2 bg-white border-t border-border-light">
          <p className="text-sm text-foreground-muted leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export function FAQContent() {
  return (
    <section className="py-20 bg-background">
      <Container size="md">
        {FAQ_CATEGORIES.map((cat) => (
          <div key={cat} className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              {cat}
            </h2>
            <div className="space-y-3">
              {FAQ_ITEMS.filter((f) => f.category === cat).map((item) => (
                <AccordionItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8 bg-background-secondary border border-border rounded-2xl p-8 text-center">
          <h3 className="font-serif text-2xl text-foreground mb-2">
            Still have questions?
          </h3>
          <p className="text-foreground-muted mb-6">
            We&rsquo;re happy to answer anything — just give us a call or send a
            message.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/contact" variant="accent">
              Send a Message
            </Button>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-md border border-border text-foreground hover:bg-background-tertiary transition-colors"
            >
              <Phone size={14} />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
