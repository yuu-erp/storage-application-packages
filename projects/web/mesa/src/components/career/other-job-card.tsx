import Image from "next/image";
import Link from "next/link";

interface OtherJobCardProps {
  image: string;
  title: string;
  descriptions: string[];
}

function OtherJobCard({ image, title, descriptions }: OtherJobCardProps) {
  return (
    <Link href="#">
      <div className="relative overflow-hidden rounded-xl border border-primary">
        <Image src={image} width={590} height={400} alt={title} />
        <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6">
          <h6 className="mb-3 text-2xl font-bold text-secondary-foreground">
            {title}
          </h6>
          <ul className="list-disc space-y-2 pl-4 text-secondary-foreground/80">
            {descriptions.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default OtherJobCard;
