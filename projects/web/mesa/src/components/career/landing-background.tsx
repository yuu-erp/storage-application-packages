"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import astroGradientDark from "@public/images/astro-gradient-dark.png";
import astroGradient from "@public/images/astro-gradient.png";

function LandingBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const imageSrc = mounted
    ? resolvedTheme === "dark"
      ? astroGradientDark
      : astroGradient
    : astroGradient;

  return (
    <Image
      src={imageSrc}
      alt="landing"
      width={1440}
      height={811}
      className="min-h-[600px] lg:-mt-24 lg:h-auto lg:w-full"
    />
  );
}

export default LandingBackground;
