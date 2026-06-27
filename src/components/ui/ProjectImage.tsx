import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export function ProjectImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fill = true,
  width,
  height,
}: ProjectImageProps) {
  if (fill) {
    // Tailwind v4 always lets `.relative` win over `.absolute` in the CSS cascade,
    // so we enforce positioning via inline style (inline always beats class).
    const wantsAbsolute = (className ?? "").split(/\s+/).includes("absolute");
    return (
      <div
        className={cn("overflow-hidden", className)}
        style={wantsAbsolute ? { position: "absolute", inset: 0 } : { position: "relative" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
        />
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        width={width ?? 800}
        height={height ?? 600}
        priority={priority}
        sizes={sizes}
        className={cn("h-full w-full object-cover", imageClassName)}
      />
    </div>
  );
}
