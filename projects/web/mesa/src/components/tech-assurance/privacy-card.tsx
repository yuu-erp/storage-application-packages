import Image from "next/image";

interface PrivacyCardProps {
  label: string;
}

function PrivacyCard({ label }: PrivacyCardProps) {
  return (
    <div className="bg-gradient-to-r from-[#01001C]/0 via-[#01001C]/0 via-[80%] to-primary/70 p-[1px]">
      <div className="relative flex h-full w-full items-start gap-6 bg-gradient-to-r from-[#01001C]/0 to-primary/30 p-3 backdrop-blur-3xl lg:p-6">
        <Image
          src="/images/tick-circle.png"
          width={48}
          height={48}
          alt="tick"
          className="h-12 w-12"
        />
        <span className="text-base leading-snug text-secondary-foreground/60 lg:text-lg">
          {label}
        </span>
        <div className="absolute inset-0 -z-10 bg-[#01001C]/40" />
      </div>
    </div>
  );
}

export default PrivacyCard;
