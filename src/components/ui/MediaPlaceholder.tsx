import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface MediaPlaceholderProps {
  label?: string;
  className?: string;
  aspect?: "video" | "square" | "portrait";
}

const aspectClasses = {
  video: "aspect-[4/3]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

export function MediaPlaceholder({
  label = "Photo coming soon",
  className,
  aspect = "video",
}: MediaPlaceholderProps) {
  return (
    <div
      className={cn("media-placeholder", aspectClasses[aspect], className)}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      <span className="media-placeholder-label gap-2">
        <ImageIcon size={16} strokeWidth={1.5} />
        {label}
      </span>
    </div>
  );
}
