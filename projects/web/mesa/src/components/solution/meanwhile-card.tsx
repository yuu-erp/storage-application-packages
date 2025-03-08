import { cn } from "@/lib/utils";

function MeanwhileCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-primary/0 via-primary/0 to-primary/20 px-4 py-6 lg:px-6 lg:py-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default MeanwhileCard;
