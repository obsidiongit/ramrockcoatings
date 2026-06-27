"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/data";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-border bg-white/95 backdrop-blur-md shadow-[0_-4px_24px_rgba(28,25,23,0.08)] pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={BUSINESS.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background-secondary py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background-tertiary"
        >
          <Phone size={16} />
          Call Now
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-accent py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
