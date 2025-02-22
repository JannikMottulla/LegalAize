import { AlertTriangle, Check } from "lucide-react";

interface Risk {
  description: string;
  level: "high" | "medium" | "low";
}

const risks: Risk[] = [
  {
    description: "Ambiguous termination clauses that could lead to disputes",
    level: "high",
  },
  {
    description:
      "Missing liability limitations exposing both parties to potential risks",
    level: "medium",
  },
  {
    description:
      "Missing over time payment terms that may cause financial complications",
    level: "medium",
  },
  {
    description: "Unclear payment terms that may cause financial complications",
    level: "low",
  },
];

const totalIssues = risks.length;
const overallRiskLevel = risks.some((risk) => risk.level === "high")
  ? "High"
  : risks.some((risk) => risk.level === "medium")
  ? "Medium"
  : "Low";

export const ContractAnalysis = () => {
  return (
    <div className="flex flex-col flex-1 max-w-3xl h-full bg-[#1A1B26] rounded-lg overflow-hidden border border-gray-800">
      <div className="p-4 border-b border-gray-800 flex items-center text-left gap-4">
        <AlertTriangle className="w-6 h-6 text-[#7C3AED]" />
        <div>
          <h2 className="text-lg font-semibold text-white">
            Contract Analysis
          </h2>
          <p className="text-sm text-gray-400">Risk Assessment Summary</p>
        </div>
      </div>

      <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto bg-[#1A1B26]">
        <div className="grid grid-cols-2 gap-4 p-3 rounded-lg border border-purple-300/10">
          <div>
            <p className="text-sm font-medium text-purple-300/80 mb-1">
              Issues Found
            </p>
            <p className="text-md font-medium text-white">{totalIssues}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-purple-300/80 mb-1">
              Risk Rating
            </p>
            <p className="text-md font-medium text-white">{overallRiskLevel}</p>
          </div>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-start font-medium text-purple-300/80 mb-2">
              Identified Risks
            </h3>
            {risks.map((risk, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border backdrop-blur-md animate-fade-in border-opacity-20 bg-opacity-5 mr-2 ${
                  risk.level === "high"
                    ? "border-red-500/20 bg-red-500/5"
                    : risk.level === "medium"
                    ? "border-yellow-500/20 bg-yellow-500/5"
                    : "border-green-500/20 bg-green-500/5"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-2 items-center">
                  <div
                    className={`p-1 rounded-full flex backdrop-blur-md mt-0.5 ${
                      risk.level === "high"
                        ? "bg-red-500/10 text-red-400"
                        : risk.level === "medium"
                        ? "bg-yellow-500/10 text-yellow-400"
                        : "bg-green-500/10 text-green-400"
                    }`}
                  >
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <p className="text-md text-white/90 leading-tight">
                    {risk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-sm text-left font-medium text-purple-300/80 mb-2">
              Compliance Status
            </h3>
            <div className="p-3 rounded-lg bg-gray-800 border border-purple-300/10 backdrop-blur-md mr-2">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-green-500/10 text-green-400">
                  <Check className="w-5 h-5" />
                </div>
                <span className="text-md text-white/90">
                  Contract is compliant with basic requirements
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractAnalysis;
