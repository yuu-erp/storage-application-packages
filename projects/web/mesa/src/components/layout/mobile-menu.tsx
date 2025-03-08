"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import Logo from "./logo";
import Navigation from "./navigation";

interface MobileMenuProps {
  mode: "light" | "dark";
  links: { path: string; label: string }[];
}

function MobileMenu({ mode, links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer direction="left" open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <Menu
          className={cn(
            "h-6 w-6",
            mode === "dark" ? "text-secondary-foreground" : "text-foreground",
          )}
        />
      </DrawerTrigger>
      <DrawerContent className="h-full max-w-[280px] border-none p-4">
        <DrawerTitle className="mb-4">
          <Logo theme={mode} />
        </DrawerTitle>
        <DrawerDescription />
        <Navigation
          links={links}
          mode={mode}
          closeDrawer={() => setOpen(false)}
        />
      </DrawerContent>
    </Drawer>
  );
}

export default MobileMenu;
