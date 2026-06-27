import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { BUSINESS, SERVICES, NAV_LINKS, LOCATIONS } from "@/lib/data";
import { Logo } from "@/components/ui/Logo";
import { YelpIcon } from "@/components/ui/YelpIcon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-accent-bar" aria-hidden="true" />
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Logo variant="light" />
            </Link>
            <p className="text-sm leading-relaxed text-stone-400 mb-6 max-w-xs">
              Cedar Rapids&rsquo; trusted epoxy flooring contractor. Quality you can
              stand on.
            </p>
            <div className="flex gap-3">
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-md hover:bg-stone-800 hover:text-stone-50 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-md hover:bg-stone-800 hover:text-stone-50 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href={BUSINESS.social.yelp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yelp"
                className="p-2 rounded-md hover:bg-stone-800 hover:text-stone-50 transition-colors"
              >
                <YelpIcon size={16} />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-sm font-semibold text-stone-50 uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm hover:text-stone-50 transition-colors"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links column */}
          <div>
            <h3 className="text-sm font-semibold text-stone-50 uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-stone-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/testimonials"
                  className="text-sm hover:text-stone-50 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-stone-50 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-sm font-semibold text-stone-50 uppercase tracking-widest mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-start gap-2 text-sm hover:text-stone-50 transition-colors"
                >
                  <Phone size={14} className="mt-0.5 shrink-0" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.emailHref}
                  className="flex items-start gap-2 text-sm hover:text-stone-50 transition-colors"
                >
                  <Mail size={14} className="mt-0.5 shrink-0" />
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm hover:text-stone-50 transition-colors"
                >
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  {BUSINESS.address}
                </a>
              </li>
              <li className="text-sm text-stone-500 leading-relaxed pt-1">
                Mon–Sat: 6:30AM–9PM
                <br />
                Sun: 6:30AM–9PM
              </li>
            </ul>
          </div>
        </div>

        {/* Service areas row */}
        <div className="mt-14 pt-10 border-t border-stone-800">
          <h3 className="text-xs font-semibold text-stone-50 uppercase tracking-widest mb-4">
            Areas We Serve
          </h3>
          <div className="flex flex-wrap gap-2">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="text-xs text-stone-400 hover:text-amber-400/90 border border-stone-800 hover:border-stone-700 rounded-full px-3 py-1.5 transition-colors"
              >
                {loc.city}, {loc.state}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} RamRock Coatings. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="text-xs text-stone-500 hover:text-stone-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-stone-500 hover:text-stone-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
