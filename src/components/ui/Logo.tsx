import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

/**
 * RamRock Coatings wordmark — rendered as crisp, theme-aware type rather than a
 * baked image, so it sits cleanly on both the light navbar and the dark footer
 * (no solid box behind it). Mirrors the brand lockup: heavy "RAMROCK" over an
 * amber rule, with letter-spaced "COATINGS" beneath.
 *
 * `variant="light"` is for dark backgrounds (footer).
 */
export function Logo({ className, variant = "default" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <span
      className={cn(
        "inline-flex flex-col items-stretch leading-none select-none",
        className
      )}
      aria-label="RamRock Coatings"
    >
      <span
        className={cn(
          "font-logo font-bold uppercase text-[1.4rem] leading-[0.9] tracking-[0.04em]",
          isLight ? "text-white" : "text-foreground"
        )}
      >
        Ramrock
      </span>
      <span
        aria-hidden="true"
        className="my-[3px] h-[2px] w-full rounded-full bg-accent"
      />
      <span
        className={cn(
          "font-logo font-medium uppercase text-[0.6rem] tracking-[0.45em] pl-[0.04em]",
          isLight ? "text-stone-300" : "text-foreground-muted"
        )}
      >
        Coatings
      </span>
    </span>
  );
}
