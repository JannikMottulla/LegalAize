import { useState } from "react";
import { Globe } from "lucide-react";
import { useToast } from "../components/ui/use-toast";
import { Layout } from "../components/Layout";
import { UploadStepper } from "../components/UploadStepper";
import { UploadZone } from "../components/UploadZone";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import { ContractList } from "../components/ContractList";

interface Contract {
  id: string;
  name: string;
  uploadDate: string;
  status: "processing" | "ready" | "error";
}

const STEPS = ["Upload Contract", "Select Jurisdiction"];
const COUNTRIES = [
  "United States",
  "United Kingdom",
  "European Union",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Netherlands",
];

const Application = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const { toast } = useToast();

  const handleFileSelect = (files: FileList) => {
    const invalidFiles = Array.from(files).filter(
      (file) => !file.type.includes("pdf")
    );

    if (invalidFiles.length > 0) {
      toast({
        title: "Invalid file type",
        description: "Please upload PDF files only.",
        variant: "destructive",
      });
      return;
    }

    const newContracts = Array.from(files).map((file) => ({
      id: crypto.randomUUID(),
      name: file.name,
      uploadDate: new Date().toISOString(),
      status: "processing" as const,
    }));

    setContracts((prev) => [...newContracts, ...prev]);
    toast({
      title: "Files uploaded",
      description: `${files.length} file(s) have been uploaded successfully.`,
      className: "bg-[hsl(273_67%_12%)] border-[hsl(267_100%_70%)]",
    });
    setCurrentStep(1);

    // Simulate processing
    newContracts.forEach((contract) => {
      setTimeout(() => {
        setContracts((prev) =>
          prev.map((c) =>
            c.id === contract.id ? { ...c, status: "ready" as const } : c
          )
        );
      }, 2000);
    });
  };

  const handleCountrySelect = (value: string) => {
    setSelectedCountry(value);
  };

  const handleAnalyze = () => {
    if (!selectedCountry) {
      toast({
        title: "Country required",
        description: "Please select a country for the contract analysis.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Analysis started",
      description: `Analyzing contracts using ${selectedCountry} law.`,
      className: "bg-[hsl(273_67%_12%)] border-[hsl(267_100%_70%)]",
    });
  };

  return (
    <Layout>
      <div className="w-full flex flex-col items-center gap-8">
        <div className="container max-w-5xl">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">
              Upload a new Contract
            </h2>
            <p className="text-[#d7b5f7]">
              Your AI-based contract analysis tool. Because we cannot all be
              lawyers.
            </p>
          </div>
        </div>
        <UploadStepper currentStep={currentStep} steps={STEPS} />

        {currentStep === 0 && <UploadZone onFileSelect={handleFileSelect} />}

        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-[hsl(271_81%_24%)] rounded-full">
                <Globe className="w-8 h-8 text-[hsl(267_100%_70%)]" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-lg font-semibold">Select Jurisdiction</h3>
                <p className="text-sm text-[hsl(271_81%_84%)] max-w-[24rem]">
                  Choose the country whose laws you want to use for the contract
                  analysis
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <Select
                value={selectedCountry}
                onValueChange={handleCountrySelect}
              >
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {COUNTRIES.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                onClick={handleAnalyze}
                className="w-[280px] bg-[hsl(267_100%_70%)]"
                disabled={!selectedCountry}
              >
                Start Analysis
              </Button>
            </div>
          </div>
        )}

        {contracts.length > 0 && (
          <div className="container max-w-5xl">
            <h3 className="text-lg font-semibold pb-4">Recent Upload</h3>
            <ContractList contracts={contracts} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Application;
