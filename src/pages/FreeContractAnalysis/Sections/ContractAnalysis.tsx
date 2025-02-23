import { FileText } from "lucide-react";
import useContractUploadStore from "../../../stores/ContractUploadStore";

const ContractAnalysis = () => {
  const { analizedContract } = useContractUploadStore();
  if (!analizedContract) window.location.href = "/app/#/app";
  const {
    summary,
    key_points,
    // issues,
    // missing_clauses,
    // compliance,
    risk_rating,
  } = analizedContract!;

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
          <p className="text-lg font-semibold text-white">{risk_rating} / 10</p>
        </div>
      </div>

      {/* Key Points & Risk Assessment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#2E3441] p-5 rounded-lg border border-[#444B5E]">
          <h4 className="text-[#c4b2ff] mb-3 text-lg font-medium">
            Key Points
          </h4>
          <ul className="space-y-3 text-sm text-white">
            {key_points.map((point, index) => (
              <li key={index} className="flex gap-2">
                <div className="min-w-2 min-h- rounded-full bg-[#b29df8]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#2E3441] p-5 rounded-lg border border-[#444B5E]">
          <h4 className="text-[#c4b2ff] mb-3 text-lg font-medium">
            Risk Assessment
          </h4>
          <div className="space-y-3 text-sm text-white">
            <p className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span>Low risk on payment terms</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span>Medium risk on liability clauses</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span>High risk on termination conditions</span>
            </p>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-[#2E3441] p-5 rounded-lg border border-[#444B5E]">
        <h4 className="text-[#c4b2ff] mb-3 text-lg font-medium">
          Recommendations
        </h4>
        <p className="text-sm text-white leading-relaxed">
          We recommend reviewing the termination clause and liability sections.
          Consider adding more specific language around dispute resolution and
          intellectual property rights. The payment terms are well-structured
          but could benefit from more detailed milestone definitions.
        </p>
      </div>
    </div>
  );
};

export default ContractAnalysis;
