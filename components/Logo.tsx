/**
 * Official Jadvix logo (mark + wordmark).
 * - /jadvix-logo.svg       — dark wordmark, for light backgrounds (header)
 * - /jadvix-logo-light.svg — white wordmark, for dark backgrounds (footer)
 * Intrinsic ratio 2826:654 (≈ 4.32:1); explicit width/height prevent layout shift.
 */
export default function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static SVG, next/image adds no benefit
    <img
      src={light ? "/jadvix-logo-light.svg" : "/jadvix-logo.svg"}
      alt="Jadvix"
      width={173}
      height={40}
      className={`h-10 w-auto ${className}`}
    />
  );
}
