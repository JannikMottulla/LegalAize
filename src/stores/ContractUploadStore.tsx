import { create } from "zustand";
import { OpenAI } from "openai";
import pdfToText from "react-pdftotext";
import { InitialAnalysis } from "../AIPrompts/InitialAnalysis";

type ContractAnalysis = {
  summary: string;
  key_points: Record<string, string>;
  issues: Issue[];
  missing_clauses: MissingClause[];
  compliance: string;
  risk_rating: string;
  recommendation: string;
};

type Issue = {
  clause: string;
  problem: string;
  sureness_score: number;
  risk_level: "low" | "medium" | "high";
};

type MissingClause = {
  clause: string;
  sureness_score: number;
};

interface ContractUploadProperties {
  file: File | null;
  jurisdiction: string;
  analyzing: boolean;
  analyzingComplete: boolean;
  progress: number;
  contractType: string;
  step: number;
  analizedContract: ContractAnalysis | null;
}

interface ContractUploadActions {
  setFile: (file: File | null) => void;
  setJurisdiction: (jurisdiction: string) => void;
  setAnalyzing: (analyzing: boolean) => void;
  setAnalyzingComplete: (complete: boolean) => void;
  setProgress: (progress: number) => void;
  setContractType: (contractType: string) => void;
  setStep: (step: number) => void;
  setAnalizedContract: (contract: ContractAnalysis | null) => void;

  analyzeContract: () => void;
}

type ContractUploadState = ContractUploadProperties & ContractUploadActions;

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY!,
  dangerouslyAllowBrowser: true,
});

const getTextFromPdf = async (file: File): Promise<string | null> => {
  try {
    const text = await pdfToText(file);
    return text;
  } catch (error) {
    console.error("Failed to extract text from pdf", error);
    return null;
  }
};

const processAnswer = (answer: string) => {
  const { setAnalizedContract } = useContractUploadStore.getState();
  try {
    const cleanedMessage = answer.split("```json")[1].split("```")[0];
    const parsedData = JSON.parse(cleanedMessage!);
    setAnalizedContract(parsedData);
  } catch (jsonError) {
    console.error("Error parsing JSON response:", jsonError);
  }
};

const analyzeContract = async (
  contractContent: string,
  contractType: string,
  jurisdiction: string
) => {
  const { setAnalyzing } = useContractUploadStore.getState();
  setAnalyzing(true);
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [InitialAnalysis(contractContent, contractType, jurisdiction)],
    temperature: 0.1,
  });
  const analysis = response.choices[0].message.content;
  if (analysis) processAnswer(analysis);
};

const useContractUploadStore = create<ContractUploadState>((set, get) => ({
  file: null,
  setFile: (file) => set({ file }),

  jurisdiction: "",
  setJurisdiction: (jurisdiction) => set({ jurisdiction }),

  analyzing: false,
  setAnalyzing: (analyzing) => set({ analyzing }),

  analyzingComplete: false,
  setAnalyzingComplete: (complete) => set({ analyzingComplete: complete }),

  progress: 0,
  setProgress: (progress) => set({ progress }),

  contractType: "",
  setContractType: (contractType) => set({ contractType }),

  step: 1,
  setStep: (step) => set({ step }),

  analizedContract: null,
  setAnalizedContract: (contract) => set({ analizedContract: contract }),

  analyzeContract: async () => {
    const { file, jurisdiction, contractType } = get();
    if (!file) return;

    set({ analyzing: true });

    const contractContent = await getTextFromPdf(file);
    if (contractContent !== null)
      await analyzeContract(contractContent, contractType, jurisdiction);

    set({ analyzing: false, analyzingComplete: true });
    window.location.href = "#/app/free-contract-analysis";
  },
}));

export default useContractUploadStore;
