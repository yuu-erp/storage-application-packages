"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import darkBackground from "@public/images/tech-assurance-dark.png";
import lightBackground from "@public/images/tech-assurance.png";

function LandingBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const imageSrc = mounted
    ? resolvedTheme === "dark"
      ? darkBackground
      : lightBackground
    : lightBackground;

  return (
    <Image
      src={imageSrc}
      width={1440}
      height={963}
      alt="landing"
      className="h-auto w-full"
    />
  );
}

export default LandingBackground;
