function SolutionCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-gradient-to-br from-primary/0 via-primary/0 to-primary/20 py-[1px] pr-[1px]">
      <div className="h-full w-full p-6 lg:p-8">{children}</div>
    </div>
  );
}

export default SolutionCard;
