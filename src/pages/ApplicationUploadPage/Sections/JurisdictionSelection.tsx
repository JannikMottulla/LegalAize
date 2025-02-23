import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";
import useContractUploadStore from "../../../stores/ContractUploadStore";

const JurisdictionSelection = () => {
  const {
    jurisdiction,
    setJurisdiction,
    file,
    setAnalyzing,
    analyzing,
    setAnalyzingComplete,
    setProgress,
    progress,

    analyzeContract,
  } = useContractUploadStore();

  const startAnalysis = () => {
    if (!file || !jurisdiction) return;
    analyzeContract();
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setAnalyzing(false);
        setAnalyzingComplete(true);
      }
    }, 200);
  };

  return (
    <div className="space-y-4 animate-slideUp">
      <div className="text-center space-y-6">
        <div className="w-16 h-16 mx-auto bg-[#2D3348] rounded-full flex items-center justify-center">
          <Globe className="w-8 h-8 text-[#D6BCFA]" />
        </div>
        <h2 className="text-2xl font-semibold">Select Jurisdiction</h2>
        <p className="text-[#7E69AB]">
          Choose the country whose laws you want to use for the contract
          analysis
        </p>

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
          onClick={startAnalysis}
          disabled={!jurisdiction || analyzing}
          className="w-full max-w-xs bg-[#D6BCFA] text-[#2D3348]"
        >
          {analyzing ? (
            <div className="space-x-2 ">
              <span>Analyzing... {progress}%</span>
            </div>
          ) : (
            "Start Analysis"
          )}
        </Button>
      </div>
    </div>
  );
};

export default JurisdictionSelection;
