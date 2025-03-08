import Image from "next/image";
import RadialCard from "../radial-card";

interface BehindTheScenesCardProps {
  image: string;
  title: string;
  description: string;
}

function BehindTheScenesCard({
  image,
  title,
  description,
}: BehindTheScenesCardProps) {
  return (
    <RadialCard className="w-full rounded-[13px] border border-primary/20 lg:aspect-square">
      <div className="space-y-2 lg:space-y-4">
        <Image
          src={image}
          width={68}
          height={68}
          alt={title}
          className="h-8 w-8 lg:h-16 lg:w-16"
        />
        <h6 className="text-lg font-bold lg:text-xl">{title}</h6>
        <p className="text-base lg:text-xl">{description}</p>
      </div>
    </RadialCard>
  );
}

export default BehindTheScenesCard;
