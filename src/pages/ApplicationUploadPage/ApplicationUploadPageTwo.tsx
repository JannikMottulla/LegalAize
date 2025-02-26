import UploadContract from "./Sections/UploadContract";
import JurisdictionSelection from "./Sections/JurisdictionSelection";
import StepProgress from "./Sections/StepProgress";
import SelectContractType from "./Sections/SelectContractType";
import { useUiControlStore } from "../../stores/UiControlStore";

const ApplicationUploadPageTwo = () => {
  const { step } = useUiControlStore();

  return (
    <div className="bg-[#1A1F2C] text-[#D6BCFA] p-8 animate-fadeIn pt-12">
      <div className="max-w-3xl mx-auto space-y-4">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Upload a new Contract</h1>
          <p className="text-white">
            Your AI-based contract analysis tool. Because we cannot all be
            lawyers.
          </p>
        </header>
        <StepProgress />
        {step === 1 && <UploadContract />}
        {step === 2 && <SelectContractType />}
        {step === 3 && <JurisdictionSelection />}
      </div>
    </div>
  );
};

export default ApplicationUploadPageTwo;
