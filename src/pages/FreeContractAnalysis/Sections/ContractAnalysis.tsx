import { FileText } from "lucide-react";
import { cn } from "../../../lib/utils";
import useContractStore from "../../../stores/ContractStore";

const ContractAnalysis = () => {
  const { analyzedContract } = useContractStore();
  const {
    summary,
    key_points,
    issues,
    recommendation,
    // compliance,
    risk_rating,
  } = analyzedContract!;

  return (
    <div className="space-y-6 animate-slideUp bg-[#23262F] p-6 rounded-lg shadow-lg border border-[#3C4458]">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <FileText className="w-6 h-6 text-[#b29df8]" />
        <h3 className="text-2xl font-semibold text-white">Contract Summary</h3>
      </div>

      {/* Summary & Risk Rating */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-[#2E3441] p-5 rounded-lg flex-1 border border-[#444B5E]">
          <h4 className="text-[#c4b2ff] mb-3 text-lg font-medium">Summary</h4>
          <p className="text-white text-sm leading-relaxed">{summary}</p>
        </div>
        <div className="bg-[#2E3441] p-5 rounded-lg w-auto border border-[#444B5E]">
          <h4 className="text-[#c4b2ff] mb-3 text-lg font-medium">
            Risk Rating
          </h4>
          <p className="text-lg text-center font-semibold text-white">
            {risk_rating} / 10
          </p>
        </div>
      </div>

      {/* Key Points & Risk Assessment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#2E3441] p-5 rounded-lg border border-[#444B5E]">
          <h4 className="text-[#c4b2ff] mb-3 text-lg font-medium">
            Key Points
          </h4>
          <ul className="space-y-3 text-sm text-white">
            {Object.entries(key_points).map(([topic, data], index) => (
              <li key={index} className="flex gap-2">
                <div className="min-w-2 min-h-2 rounded-full bg-[#b29df8]" />
                <span>
                  <strong>{topic}:</strong> {data}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#2E3441] p-5 rounded-lg border border-[#444B5E]">
          <h4 className="text-[#c4b2ff] mb-3 text-lg font-medium">
            Risk Assessment
          </h4>
          <ul className="space-y-3 text-sm text-white">
            {issues.map((issue, index) => (
              <li key={index} className="flex gap-2">
                <div
                  className={cn(
                    "min-w-2 min-h-2 rounded-full",
                    issue.risk_level === "low"
                      ? "bg-green-500"
                      : issue.risk_level === "medium"
                      ? "bg-yellow-500"
                      : issue.risk_level === "high"
                      ? "bg-red-500"
                      : ""
                  )}
                />
                <span>
                  <strong>{issue.clause}:</strong> {issue.problem}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-[#2E3441] p-5 rounded-lg border border-[#444B5E]">
        <h4 className="text-[#c4b2ff] mb-3 text-lg font-medium">
          Recommendations
        </h4>
        <p className="text-sm text-white leading-relaxed">{recommendation}</p>
      </div>
    </div>
  );
};

export default ContractAnalysis;
