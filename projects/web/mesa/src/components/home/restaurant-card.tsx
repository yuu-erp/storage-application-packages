import Image from "next/image";
import { cn } from "@/lib/utils";

interface RestaurantCardProps {
  iconUrl: string;
  title: string;
  description: string;
  className?: string;
}

function RestaurantCard({
  iconUrl,
  title,
  description,
  className,
}: RestaurantCardProps) {
  return (
    <div
      className={cn(
        "relative z-10 h-full overflow-hidden rounded-xl border border-primary/[.22] bg-radial-primary px-4 py-6 backdrop-blur-sm lg:aspect-square lg:h-72 lg:p-6",
        className,
      )}
    >
      <div className="space-y-3">
        <Image
          src={iconUrl}
          width={68}
          height={68}
          alt="icon"
          className="h-12 w-12 lg:h-16 lg:w-16"
        />
        <h5 className="text-lg font-bold leading-tight">{title}</h5>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-sm lg:text-base"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-[#292452]/40" />
    </div>
  );
}

export default RestaurantCard;
