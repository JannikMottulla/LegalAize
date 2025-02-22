import { FileText } from "lucide-react";
import { cn } from "../lib/utils";

interface Contract {
  id: string;
  name: string;
  uploadDate: string;
  status: "processing" | "ready" | "error";
}

interface ContractListProps {
  contracts: Contract[];
}

export function ContractList({ contracts }: ContractListProps) {
  return (
    <div className="w-full  flex flex-col gap-4 overflow-x-hidden">
      {contracts.map((contract) => (
        <div key={contract.id} className="contract-card slide-up-animation">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-[hsl(271_81%_24%)] rounded-lg">
              <FileText className="w-5 h-5 text-[hsl(267_100%_70%)]" />
            </div>
            <div className="space-y-1 w-full">
              <h4 className="font-medium truncate w-7/10">{contract.name}</h4>
              <p className="text-sm text-[hsl(271_81%_84%)]">
                {new Date(contract.uploadDate).toLocaleDateString()}
              </p>
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium truncate",
                  {
                    "bg-yellow-500/20 text-yellow-200":
                      contract.status === "processing",
                    "bg-green-500/20 text-green-200":
                      contract.status === "ready",
                    "bg-red-500/20 text-red-200": contract.status === "error",
                  }
                )}
              >
                {contract.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
