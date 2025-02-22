import { FileText, Type } from "lucide-react";
interface KeyDetail {
  label: string;
  value: string;
}
const contractSummary = `This Service Agreement outlines the terms between TechCorp Solutions and CloudNet Systems for cloud infrastructure services. The agreement spans 24 months, commencing January 2024, with a total contract value of $480,000. Key services include cloud hosting, maintenance, and 24/7 support. The agreement includes standard termination clauses with a 60-day notice period and specific performance metrics for service availability.`;
const keyDetails: KeyDetail[] = [
  {
    label: "Contract Type",
    value: "Service Agreement",
  },
  {
    label: "Parties Involved",
    value: "TechCorp Solutions & CloudNet Systems",
  },
  {
    label: "Duration",
    value: "24 Months",
  },
  {
    label: "Start Date",
    value: "January 2024",
  },
  {
    label: "Contract Value",
    value: "$480,000",
  },
  {
    label: "Payment Terms",
    value: "Monthly installments of $20,000",
  },
];
export const ContractSummary = () => {
  return (
    <div className="flex flex-col flex-1 max-w-3xl h-full bg-[#1A1B26] rounded-lg overflow-hidden border border-gray-800">
      <div className="p-4 border-b border-gray-800 flex items-center text-left gap-4">
        <FileText className="w-6 h-6 text-[#7C3AED]" />
        <div>
          <h2 className="text-lg font-semibold text-white">Contract Summary</h2>
          <p className="text-sm text-gray-400">Overview & Key Details</p>
        </div>
      </div>
      <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto bg-[#1A1B26]">
        {/* <div className="p-4 rounded-lg border border-purple-300/10 backdrop-blur-md">
          <div className="flex gap-2 items-start mb-3">
            <div className="p-1 rounded-full bg-purple-500/10 text-purple-400 mt-0.5">
              <Type className="w-4 h-4" />
            </div>
            <p className="text-sm font-medium text-purple-300/80">
              Contract Overview
            </p>
          </div>
          <p className="text-md text-white/90 leading-relaxed">
            {contractSummary}
          </p>
        </div> */}
        <div className="flex-1 space-y-4 overflow-y-auto">
          <h3 className="text-sm text-start font-medium text-purple-300/80 mb-2">
            Key Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {keyDetails.map((detail, index) => (
              <div
                key={index}
                className="p-3 rounded-lg border border-purple-300/10 bg-purple-500/5 backdrop-blur-md animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-sm font-medium text-purple-300/80 mb-1">
                  {detail.label}
                </p>
                <p className="text-md text-white/90">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContractSummary;
