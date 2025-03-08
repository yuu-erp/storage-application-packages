import Image from "next/image";

interface MemberCardProps {
  name: string;
  role: string;
  description: string;
  icon: string;
}

function MemberCard({ name, role, description, icon }: MemberCardProps) {
  return (
    <div className="rounded-[20px] bg-gradient-to-b from-[#E100FF]/40 to-[#FF8C00]/50 p-[1px]">
      <div className="overflow-hidden rounded-[19px] bg-background">
        <div className="bg-[#969599]/60 dark:bg-[#16141F]/60">
          <div className="space-y-3 rounded-[19px] px-4 py-8 lg:px-8">
            <Image
              src={icon}
              alt={name}
              width={72}
              height={72}
              className="mb-4 h-auto w-[72px]"
            />
            <h3 className="text-xl font-bold leading-relaxed lg:text-2xl">
              {name}
            </h3>
            <h5 className="text-base font-bold text-foreground/80 lg:text-lg">
              {role}
            </h5>
            <p className="text-base !leading-loose text-foreground/70 lg:text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
