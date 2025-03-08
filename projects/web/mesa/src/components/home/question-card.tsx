import { cn } from "@/lib/utils";
import RadialCard from "../radial-card";

interface QuestionCardProps {
  title?: string;
  description: string;
  className?: string;
}

function QuestionCard({ title, description, className }: QuestionCardProps) {
  return (
    <RadialCard
      className={cn(
        "z-10 flex min-w-60 flex-col items-center border border-primary/[.22] px-6 py-4 text-center text-secondary-foreground backdrop-blur-sm",
        className,
      )}
    >
      {title && <h5 className="text-xl font-bold leading-tight">{title}</h5>}
      <p
        dangerouslySetInnerHTML={{ __html: description }}
        className="text-lg font-medium"
      />
    </RadialCard>
  );
}

export default QuestionCard;
