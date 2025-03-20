import * as React from "react";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      onLeftIconClick,
      onRightIconClick,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="relative w-full">
        <input
          ref={ref}
          className={cn(
            "flex h-14 w-full rounded-lg bg-[#1B192E]/70 px-3 py-1 text-base text-secondary-foreground shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            LeftIcon && "pl-12",
            RightIcon && "pr-12",
            className,
          )}
          {...props}
        />

        {LeftIcon && (
          <div
            className={cn(
              "absolute left-0 top-0 flex h-full w-10 items-center justify-center text-gray-400",
            )}
          >
            {<LeftIcon className="h-5 w-5" onClick={onLeftIconClick} />}
          </div>
        )}

        {RightIcon && (
          <div
            className={cn(
              "absolute right-0 top-0 flex h-full w-10 items-center justify-center text-secondary-foreground",
            )}
          >
            {<RightIcon className="h-5 w-5" onClick={onRightIconClick} />}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
