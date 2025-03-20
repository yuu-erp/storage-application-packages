import { cn } from "@/lib/utils";

interface JobDescriptionCardProps {
  title: string;
  descriptions: string[];
  className?: string;
}

function JobDescriptionCard({
  title,
  descriptions,
  className,
}: JobDescriptionCardProps) {
  return (
    <div
      className={cn(
        "space-y-4 bg-gradient-to-b from-[#221F3A]/0 to-[#4905BE]/30 p-2 lg:p-6",
        className,
      )}
    >
      <span className="text-3xl font-semibold text-secondary">+</span>
      <h6 className="text-base font-bold lg:text-xl">{title}</h6>
      <ul
        className={cn(
          "space-y-2",
          descriptions.length > 1 ? "list-disc pl-4" : "list-none pl-0",
        )}
      >
        {descriptions.map((desc, index) => (
          <li key={index} className="text-sm lg:text-base">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobDescriptionCard;
