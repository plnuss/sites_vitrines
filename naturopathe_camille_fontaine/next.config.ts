import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Autorise l'optimisation des SVG servis localement (placeholders internes,
    // remplaçables par de vraies photos .jpg/.webp sans modifier cette config).
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
