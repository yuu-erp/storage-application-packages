import { cn } from "@/lib/utils";

function AllInOneCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl bg-[#1D1D1D]/5 px-4 py-6 shadow-md backdrop-blur-md lg:px-6 lg:py-8",
        className,
      )}
    >
      {children}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/25 to-[#310BB0]/25" />
    </div>
  );
}

export default AllInOneCard;
