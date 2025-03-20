"use client";

import { createPortal } from "react-dom";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

// component for testing theme toggle
function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const onSetThemeClick = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return createPortal(
    <Button
      size="icon"
      className="fixed bottom-4 right-4 z-[99999]"
      onClick={onSetThemeClick}
    >
      o
    </Button>,
    document.body,
  );
}

export default ThemeToggle;
