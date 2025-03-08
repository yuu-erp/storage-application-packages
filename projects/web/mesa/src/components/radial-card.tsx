import * as React from "react";
import { cn } from "@/lib/utils";

const RadialCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative overflow-hidden rounded-xl bg-radial-primary p-4 lg:p-6",
      className,
    )}
    {...props}
  >
    {children}
    <div className="absolute inset-0 -z-10 rounded-xl bg-[#292452]/40" />
  </div>
));

RadialCard.displayName = "RadialCard";

export default RadialCard;
