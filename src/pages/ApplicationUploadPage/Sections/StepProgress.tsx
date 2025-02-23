import { Progress } from "../../../components/ui/progress";
import useContractUploadStore from "../../../stores/ContractUploadStore";

function StepProgress() {
  const { step } = useContractUploadStore();
  // For the progress bars, we can show 100% once we've moved past that step
  const progress1Value = step >= 2 ? 100 : 0;
  const progress2Value = step >= 3 ? 100 : 0;

  return (
    <div className="flex items-center justify-center space-x-4 pb-8">
      {/* Step 1 */}
      <div
        className={`w-10 h-10 rounded-full ${
          step >= 1 ? "bg-[#D6BCFA]" : "bg-[#2D3348]"
        } flex items-center justify-center`}
      >
        <span
          className={`${
            step >= 1 ? "text-[#1A1F2C]" : "text-[#D6BCFA]"
          } font-bold`}
        >
          1
        </span>
      </div>

      {/* Progress bar from Step 1 to Step 2 */}
      <div className="flex-1">
        <Progress value={progress1Value} className="h-1 bg-[#D6BCFA]" />
      </div>

      {/* Step 2 */}
      <div
        className={`w-10 h-10 rounded-full ${
          step >= 2 ? "bg-[#D6BCFA]" : "bg-[#2D3348]"
        } flex items-center justify-center`}
      >
        <span
          className={`${
            step >= 2 ? "text-[#1A1F2C]" : "text-[#D6BCFA]"
          } font-bold`}
        >
          2
        </span>
      </div>

      {/* Progress bar from Step 2 to Step 3 */}
      <div className="flex-1">
        <Progress value={progress2Value} className="h-1 bg-[#D6BCFA]" />
      </div>

      {/* Step 3 */}
      <div
        className={`w-10 h-10 rounded-full ${
          step >= 3 ? "bg-[#D6BCFA]" : "bg-[#2D3348]"
        } flex items-center justify-center`}
      >
        <span
          className={`${
            step >= 3 ? "text-[#1A1F2C]" : "text-[#D6BCFA]"
          } font-bold`}
        >
          3
        </span>
      </div>
    </div>
  );
}

export default StepProgress;
