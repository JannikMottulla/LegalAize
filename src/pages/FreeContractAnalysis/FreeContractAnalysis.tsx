import ContractAnalysis from "./Sections/ContractAnalysis";
import { Button } from "../../components/ui/button";
import PayPalButton from "./Components/PaypalButton";
import useContractStore from "../../stores/ContractStore";
import LargeLoadingSpinner from "./Components/LoadingSpinner";

const FreeContractAnalysis = () => {
  const { analyzing, analyzedContract } = useContractStore();

  return (
    <div className="bg-[#1A1F2C] text-[#D6BCFA] p-8 animate-fadeIn pt-12">
      <div className="max-w-3xl mx-auto space-y-4">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Your free Analysis</h1>
          <p className="text-[#7E69AB]">
            This is the free version of your contract analysis
          </p>
        </header>
        <Button className="w-full p-8 text-md bg-[#D6BCFA] text-[#2D3348]">
          <span className="max-w-sm text-wrap">
            Get your full analysis and live chat for 4,99$
          </span>
        </Button>
        <PayPalButton />
        {analyzing && <LargeLoadingSpinner />}
        {!analyzing && analyzedContract && <ContractAnalysis />}
      </div>
    </div>
  );
};

export default FreeContractAnalysis;
