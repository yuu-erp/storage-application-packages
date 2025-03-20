"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./logo";

interface NavigationProps {
  links: { path: string; label: string }[];
  closeDrawer?: () => void;
}

function Navigation({ links, closeDrawer }: NavigationProps) {
  const pathname = usePathname();

  return (
    <>
      {/* mobile nav */}
      <nav className="block lg:hidden">
        <ul>
          {links.map((link) => (
            <li
              key={link.path}
              className={cn(
                "rounded-md px-4 py-2",
                pathname === link.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground",
              )}
              onClick={closeDrawer}
            >
              <Link href={link.path} className="font-medium">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* large device nav */}
      <nav className="hidden h-full lg:block">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between">
          <Logo />

          <ul className="flex h-full items-center justify-end gap-4">
            {links.map((link) => (
              <li
                key={link.path}
                className={cn(
                  "flex h-full items-center",
                  ["/our-solution", "/tech-assurance", "/contact-us"].includes(
                    pathname,
                  )
                    ? "text-secondary-foreground"
                    : "text-foreground",
                )}
              >
                <Link href={link.path} className="relative py-2 font-medium">
                  {link.label}
                  {pathname === link.path && (
                    <motion.div
                      layoutId="nav-underline"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="absolute bottom-0 left-0 h-1 w-full"
                    >
                      <div className="mx-auto h-full w-14 bg-primary" />
                    </motion.div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
