type WaveDividerProps = {
  color?: string;
  flip?: boolean;
  className?: string;
};

/** Séparateur de section en forme de vague organique (SVG). */
export function WaveDivider({
  color = "var(--color-cream)",
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`wave-divider w-full leading-none ${
        flip ? "rotate-180" : ""
      } ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path
          fill={color}
          d="M0,32 C240,90 480,0 720,24 C960,48 1200,96 1440,40 L1440,100 L0,100 Z"
        />
      </svg>
    </div>
  );
}
