interface ComplianceCardProps {
  label: string;
}

function ComplianceCard({ label }: ComplianceCardProps) {
  return (
    <div className="flex w-full justify-center rounded-md bg-gradient-to-br from-primary/30 to-[#310BB0]/30 px-4 py-6 text-center lg:max-w-[285px] lg:items-center">
      <span className="text-lg font-bold">{label}</span>
    </div>
  );
}

export default ComplianceCard;
