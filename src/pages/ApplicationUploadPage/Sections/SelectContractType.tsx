import { Button } from "../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "../../../components/ui/select";
import useContractUploadStore from "../../../stores/ContractUploadStore";

const SelectContractType = () => {
  const { setContractType, contractType, setStep } = useContractUploadStore();
  return (
    <div className="w-full flex flex-col items-center space-y-4">
      <div className="">
        <h2 className="text-2xl font-semibold">Select Contract Type</h2>
        <p className="text-[#7E69AB] text-sm">
          Chose the type of your Contract.
        </p>
      </div>
      <Select onValueChange={setContractType} value={contractType}>
        <SelectTrigger className="w-full max-w-xs mx-auto">
          <SelectValue placeholder="Select contract type" />
        </SelectTrigger>
        <SelectContent className="bg-[#2D3348] border-[#D6BCFA] text-[#D6BCFA]">
          <SelectItem value="Purchase Agreement">Purchase Agreement</SelectItem>
          <SelectItem value="Service Contract">Service Contract</SelectItem>
          <SelectItem value="Loan Agreement">Loan Agreement</SelectItem>
          <SelectItem value="Partnership Agreement">
            Partnership Agreement
          </SelectItem>
        </SelectContent>
      </Select>
      <p className="text-[#7E69AB] text-sm">
        Chose the type of your Contract. Cannot find your contract?{" "}
        <a>Click here</a>
      </p>
      <Button
        className="mt-8 w-full max-w-xs bg-[#D6BCFA] text-[#2D3348]"
        disabled={!contractType}
        onClick={() => setStep(3)}
      >
        Next
      </Button>
    </div>
  );
};

export default SelectContractType;
