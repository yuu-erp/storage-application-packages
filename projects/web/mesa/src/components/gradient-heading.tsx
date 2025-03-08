import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "w-fit bg-gradient-to-r bg-clip-text !leading-normal text-transparent",
  {
    variants: {
      variant: {
        default: "from-primary to-secondary",
        secondary: "from-white to-[#FF00EE]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface GradientHeadingProps extends VariantProps<typeof headingVariants> {
  children: React.ReactNode;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
}

function GradientHeading({
  children,
  className,
  variant,
  tag = "h1",
}: GradientHeadingProps) {
  const Comp = tag;

  return (
    <Comp className={cn(headingVariants({ variant, className }))}>
      {children}
    </Comp>
  );
}

export default GradientHeading;
