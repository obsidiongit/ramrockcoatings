import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  backLink?: { href: string; label: string };
  image?: { src: string; alt: string };
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
  backLink,
  image,
}: PageHeroProps) {
  const textBlock = (
    <div className="hero-text-block max-w-2xl">
      {backLink && (
        <Link
          href={backLink.href}
          className="inline-flex items-center gap-1 text-xs font-medium text-white/70 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft size={12} /> {backLink.label}
        </Link>
      )}
      {eyebrow && (
        <p className="eyebrow eyebrow-light mb-4">{eyebrow}</p>
      )}
      <h1 className="heading-display text-white mb-6">{title}</h1>
      {description && (
        <p className="lead hero-lead">{description}</p>
      )}
      {children}
    </div>
  );

  if (image) {
    return (
      <section className={cn("hero-page-photo", className)}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="hero-photo-scrim" aria-hidden="true" />
        <Container className="hero-content relative z-10 w-full">
          {textBlock}
        </Container>
      </section>
    );
  }

  return (
    <section className={cn("hero-dark section-padding-sm", className)}>
      <Container className="hero-content">
        {textBlock}
      </Container>
    </section>
  );
}
