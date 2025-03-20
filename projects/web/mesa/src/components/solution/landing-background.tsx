"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import solutionLandingDark from "@public/images/solution-landing-dark.png";
import solutionLanding from "@public/images/solution-landing.png";

function LandingBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const imageSrc = mounted
    ? resolvedTheme === "dark"
      ? solutionLandingDark
      : solutionLanding
    : solutionLanding;

  return <Image src={imageSrc} alt="landing" className="h-auto w-full" />;
}

export default LandingBackground;
