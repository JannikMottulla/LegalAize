import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";
import useContractUploadStore from "../../../stores/ContractStore";
import { useNavigate } from "react-router-dom";

const JurisdictionSelection = () => {
  const navigate = useNavigate();

  const { jurisdiction, setJurisdiction } = useContractUploadStore();

  const goToFreeAnalysis = () => {
    navigate("free-contract-analysis");
  };

  return (
    <div className="space-y-4 animate-slideUp">
      <div className="text-center space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Select Jurisdiction</h2>
          <p className="text-[#7E69AB]">
            Choose the country whose laws you want to use for the contract
            analysis
          </p>
        </div>

        <Select onValueChange={setJurisdiction} value={jurisdiction}>
          <SelectTrigger className="w-full max-w-xs mx-auto">
            <SelectValue placeholder="Select jurisdiction" />
          </SelectTrigger>
          <SelectContent className="bg-[#2D3348] border-[#D6BCFA] text-[#D6BCFA]">
            <SelectItem value="United States">United States</SelectItem>
            <SelectItem value="United Kingdom">United Kingdom</SelectItem>
            <SelectItem value="Canada">Canada</SelectItem>
            <SelectItem value="Australia">Australia</SelectItem>
            <SelectItem value="Germany">Deutschland</SelectItem>
          </SelectContent>
        </Select>

        <Button
          onClick={goToFreeAnalysis}
          disabled={!jurisdiction} // Disable while analyzing
          className="w-full max-w-xs bg-[#D6BCFA] text-[#2D3348]"
        >
          Start Analysis
        </Button>
      </div>
    </div>
  );
};

export default JurisdictionSelection;
