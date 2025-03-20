import * as React from "react";
import { cn } from "@/lib/utils";

function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("container mx-auto h-full px-4", className)}
      {...props}
    />
  );
}

export default Container;
