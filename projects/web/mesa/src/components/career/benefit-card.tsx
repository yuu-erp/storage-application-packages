import Image from "next/image";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  image: string;
  label: string;
  border?: "t" | "b" | "bl" | "br" | "tl" | "tr";
}

function BenefitCard({ image, label, border }: BenefitCardProps) {
  return (
    <div
      className={cn(
        "from-primary/0 via-primary/0 via-70% to-primary p-[1px]",
        border === "bl" && "lg:bg-gradient-to-bl",
        border === "br" && "lg:bg-gradient-to-br",
        border === "tl" && "lg:bg-gradient-to-tl",
        border === "tr" && "lg:bg-gradient-to-tr",
        border === "t" && "relative lg:bg-gradient-to-tl",
        border === "b" && "relative lg:bg-gradient-to-bl",
      )}
    >
      <div className="flex h-full w-full flex-col items-center gap-6 bg-background/80 py-8 backdrop-blur-2xl">
        <Image src={image} width={68} height={68} alt={label} />
        <h6 className="text-center text-sm font-medium lg:text-lg lg:font-bold">
          {label}
        </h6>
      </div>

      {border === "t" && (
        <div className="inset-0 -z-10 bg-gradient-to-tr from-primary/0 via-primary/0 via-70% to-primary lg:absolute" />
      )}
      {border === "b" && (
        <div className="inset-0 -z-10 bg-gradient-to-br from-primary/0 via-primary/0 via-70% to-primary lg:absolute" />
      )}
    </div>
  );
}

export default BenefitCard;
