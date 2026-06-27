import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
  headingClassName?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  subtext,
  align = "center",
  dark = false,
  className,
  headingClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-12",
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-4", dark && "eyebrow-light")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "heading-section mb-4",
          dark ? "text-white" : "text-foreground",
          headingClassName
        )}
      >
        {heading}
      </h2>
      {subtext && (
        <p className={cn(
          "text-base md:text-[1.0625rem] leading-relaxed text-foreground-muted mt-4 max-w-xl",
          align === "center" && "mx-auto",
          dark && "text-stone-400"
        )}>{subtext}</p>
      )}
    </div>
  );
}
