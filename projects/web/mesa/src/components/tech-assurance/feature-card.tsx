import Image from "next/image";
import RadialCard from "../radial-card";

interface FeatureCardProps {
  content: string;
  icon: string;
}

function FeatureCard({ content, icon }: FeatureCardProps) {
  return (
    <div className="pt-10 lg:pt-20">
      <RadialCard className="h-full overflow-visible pt-0">
        <div className="flex flex-col items-center gap-4 lg:px-4">
          <Image
            src={icon}
            alt="icon"
            width={120}
            height={120}
            className="-mt-10 h-20 w-20 lg:-mt-20 lg:h-[120px] lg:w-[120px]"
          />
          <p className="text-center text-base leading-relaxed text-secondary-foreground/70 lg:text-lg">
            {content}
          </p>
        </div>
      </RadialCard>
    </div>
  );
}

export default FeatureCard;
