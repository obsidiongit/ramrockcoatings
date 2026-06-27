"use client";

import { useState, useEffect, useRef, useId } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { BUSINESS, NAV_LINKS, SERVICES } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);
  const servicesMenuId = useId();
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const servicesMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;

    const firstLink = servicesMenuRef.current?.querySelector<HTMLElement>(
      'a[role="menuitem"]'
    );
    firstLink?.focus();

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        servicesMenuRef.current?.contains(target) ||
        servicesButtonRef.current?.contains(target)
      ) {
        return;
      }
      setServicesOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [servicesOpen]);

  // Close menus when the route changes (React-recommended render-time reset)
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  const closeServicesMenu = (returnFocus = true) => {
    setServicesOpen(false);
    if (returnFocus) servicesButtonRef.current?.focus();
  };

  const handleServicesButtonKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setServicesOpen(true);
    } else if (event.key === "Escape" && servicesOpen) {
      event.preventDefault();
      closeServicesMenu();
    }
  };

  const handleServicesMenuKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    const items = Array.from(
      servicesMenuRef.current?.querySelectorAll<HTMLElement>(
        'a[role="menuitem"]'
      ) ?? []
    );
    const index = items.indexOf(document.activeElement as HTMLElement);

    if (event.key === "Escape") {
      event.preventDefault();
      closeServicesMenu();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      items[(index + 1) % items.length]?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      items[(index - 1 + items.length) % items.length]?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      items[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      items[items.length - 1]?.focus();
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        "bg-white/90 backdrop-blur-md border-b border-border/80",
        scrolled && "shadow-md bg-white/95"
      )}
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[4.25rem] flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            if (link.label === "Services") {
              return (
                <div key="services" className="relative">
                  <button
                    ref={servicesButtonRef}
                    type="button"
                    id={`${servicesMenuId}-button`}
                    onClick={() => setServicesOpen((open) => !open)}
                    onKeyDown={handleServicesButtonKeyDown}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      pathname.startsWith("/services")
                        ? "text-foreground bg-background-secondary"
                        : "text-foreground-muted hover:text-foreground hover:bg-background-secondary"
                    )}
                    aria-expanded={servicesOpen}
                    aria-haspopup="menu"
                    aria-controls={`${servicesMenuId}-menu`}
                  >
                    Services
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-150",
                        servicesOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {servicesOpen && (
                    <div
                      ref={servicesMenuRef}
                      id={`${servicesMenuId}-menu`}
                      role="menu"
                      aria-labelledby={`${servicesMenuId}-button`}
                      onKeyDown={handleServicesMenuKeyDown}
                      className="absolute top-full left-0 mt-1 w-64 bg-white border border-border rounded-xl shadow-lg py-2 z-50"
                    >
                      <Link
                        href="/services"
                        role="menuitem"
                        className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-background-secondary focus-visible:bg-background-secondary focus-visible:outline-none"
                        onClick={() => closeServicesMenu(false)}
                      >
                        All Services
                      </Link>
                      <div className="my-1 border-t border-border-light" />
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          role="menuitem"
                          className="block px-4 py-2 text-sm text-foreground-muted hover:text-foreground hover:bg-background-secondary focus-visible:bg-background-secondary focus-visible:outline-none"
                          onClick={() => closeServicesMenu(false)}
                        >
                          {s.shortName}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground bg-background-secondary"
                    : "text-foreground-muted hover:text-foreground hover:bg-background-secondary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-1.5 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
          >
            <Phone size={14} />
            {BUSINESS.phone}
          </a>
          <Button href="/contact" variant="accent">
            Free Estimate
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-md text-foreground-muted hover:text-foreground hover:bg-background-secondary transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls={`${servicesMenuId}-mobile-menu`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id={`${servicesMenuId}-mobile-menu`}
          className="lg:hidden border-t border-border bg-white"
        >
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => {
              if (link.label === "Services") {
                return (
                  <div key="services-mobile">
                    <Link
                      href="/services"
                      className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-background-secondary"
                      onClick={() => setMobileOpen(false)}
                    >
                      Services
                    </Link>
                    <div className="pl-4 space-y-1 mt-1">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="block px-3 py-2 rounded-md text-sm text-foreground-muted hover:text-foreground hover:bg-background-secondary"
                          onClick={() => setMobileOpen(false)}
                        >
                          {s.shortName}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-background-secondary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="px-4 pb-4 pt-2 border-t border-border-light flex flex-col gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center justify-center gap-2 text-sm font-medium text-foreground border border-border rounded-md py-2.5"
            >
              <Phone size={14} />
              {BUSINESS.phone}
            </a>
            <Button href="/contact" variant="accent" className="w-full">
              Free Estimate
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
