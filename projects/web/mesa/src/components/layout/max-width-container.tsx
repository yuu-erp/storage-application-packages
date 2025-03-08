import * as React from "react";
import { cn } from "@/lib/utils";

const MaxWidthContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
    {...props}
  />
));

MaxWidthContainer.displayName = "MaxWidthContainer";

export default MaxWidthContainer;
