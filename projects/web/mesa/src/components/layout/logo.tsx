"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoWhite from "@public/images/logo-white.png";
import logo from "@public/images/logo.png";

function Logo() {
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted
    ? ["/our-solution", "/tech-assurance", "/contact-us"].includes(pathname) ||
      resolvedTheme === "dark"
      ? logoWhite
      : logo
    : logo;

  return (
    <Link href="/" className="">
      <Image
        src={logoSrc}
        width={212}
        height={100}
        alt="logo mesa"
        className="h-12 w-auto lg:h-20"
      />
    </Link>
  );
}

export default Logo;
