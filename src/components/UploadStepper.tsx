import React from "react";
import { cn } from "../lib/utils";

interface UploadStepperProps {
  currentStep: number;
  steps: string[];
}

export function UploadStepper({ currentStep, steps }: UploadStepperProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center space-x-2">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors",
                currentStep > index
                  ? "border-[hsl(267_100%_70%)] bg-[hsl(267_100%_70%)] text-white"
                  : currentStep === index
                  ? "border-[hsl(267_100%_70%)] text-[hsl(267_100%_70%)]"
                  : "border-[hsl(271_81%_84%)] text-[hsl(271_81%_84%)]"
              )}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn("h-0.5 w-16", {
                  "bg-[hsl(267_100%_70%)]": currentStep > index,
                  "bg-[hsl(271_81%_84%)]": currentStep <= index,
                })}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <p className="text-center text-sm text-[hsl(271_81%_84%)]">
        {steps[currentStep]}
      </p>
    </div>
  );
}
