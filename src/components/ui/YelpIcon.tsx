import { cn } from "@/lib/utils";

interface YelpIconProps {
  className?: string;
  size?: number;
}

/** Yelp burst mark — matches Lucide icon sizing in footer social row. */
export function YelpIcon({ className, size = 16 }: YelpIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={cn("shrink-0", className)}
      fill="currentColor"
    >
      <path d="M20.16 12.594l-4.995 1.433c-.96 2.726-2.022 4.158-2.022 4.158s-1.043-1.432-2.023-4.158l-4.995-1.433 4.995-1.432c.98-2.726 2.023-4.158 2.023-4.158s1.062 1.432 2.022 4.158l4.995 1.432z" />
    </svg>
  );
}
