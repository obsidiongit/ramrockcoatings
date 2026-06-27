import { Star } from "lucide-react";
import { BUSINESS, type Testimonial } from "@/lib/data";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  /** Shorter copy for homepage / compact layouts */
  compact?: boolean;
  className?: string;
}

export function TestimonialCard({
  testimonial: t,
  compact = false,
  className,
}: TestimonialCardProps) {
  const body = compact && "excerpt" in t && t.excerpt ? t.excerpt : t.text;

  return (
    <blockquote
      className={cn(
        compact ? "testimonial-card" : "card p-8",
        "featured" in t && t.featured && !compact && "md:col-span-2 max-w-none",
        className
      )}
    >
      {!compact && (
        <span className="quote-mark mb-2 block" aria-hidden="true">
          &ldquo;
        </span>
      )}

      {compact ? (
        <div className="testimonial-card-header">
          <div className="testimonial-avatar" aria-hidden="true">
            {initials(t.name)}
          </div>
          <div>
            <div className="flex gap-0.5 mb-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm font-semibold text-foreground">{t.name}</p>
            <p className="text-xs text-foreground-subtle">{t.service}</p>
          </div>
        </div>
      ) : (
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
      )}

      {!compact && "title" in t && t.title && (
        <p className="font-semibold text-foreground mb-3">{t.title}</p>
      )}

      <p
        className={cn(
          "text-foreground-muted leading-relaxed",
          compact ? "text-sm" : "mb-6",
          "featured" in t && t.featured && !compact && "text-base max-w-prose"
        )}
      >
        {compact ? (
          <>&ldquo;{body}&rdquo;</>
        ) : (
          body.split("\n\n").map((paragraph, i) => (
            <span key={i} className={i > 0 ? "block mt-4" : "block"}>
              {paragraph}
            </span>
          ))
        )}
      </p>

      {!compact && (
        <footer className="border-t border-border-light pt-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <p className="font-semibold text-foreground">{t.name}</p>
            <p className="text-sm text-accent mt-0.5 font-medium">{t.service}</p>
            {"date" in t && t.date && (
              <p className="text-xs text-foreground-subtle mt-1">{t.date}</p>
            )}
          </div>
          {t.source === "yelp" && (
            <a
              href={BUSINESS.social.yelp}
              target="_blank"
              rel="noopener noreferrer"
              className="testimonial-source-link shrink-0"
            >
              Verified on Yelp →
            </a>
          )}
        </footer>
      )}
    </blockquote>
  );
}
