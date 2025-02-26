import { create } from "zustand";
import pdfToText from "react-pdftotext";
import { InitialAnalysis } from "../AIPrompts/InitialAnalysis";
import { useChatStore } from "./AiCommunicationStore";

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
  contractType: string;
  jurisdiction: string;
  contractContent: string;
  analyzing: boolean;
  analyzedContractRaw: string;
  analyzedContract: ContractAnalysis | null;
}

interface ContractUploadActions {
  setFile: (file: File | null) => void;
  setContractType: (contractType: string) => void;
  setJurisdiction: (jurisdiction: string) => void;
  setAnalyzing: (analyzing: boolean) => void;
  setAnalyzedContractRaw: (analyzedContractRaw: string) => void;
  setAnalizedContract: (contract: ContractAnalysis) => void;

  getContractContentFromPdf: () => void;
  getContractAnalysis: () => void;

  analyzeContract: () => void;
  responseToContractAnalysis: () => void;
}

type ContractUploadState = ContractUploadProperties & ContractUploadActions;

const useContractStore = create<ContractUploadState>((set, get) => ({
  file: null,
  setFile: (file) => set({ file }),

  contractType: "",
  setContractType: (contractType) => set({ contractType }),

  jurisdiction: "",
  setJurisdiction: (jurisdiction) => set({ jurisdiction }),

  contractContent: "",

  analyzedContractRaw: "",
  setAnalyzedContractRaw: (analyzedContractRaw) => set({ analyzedContractRaw }),

  analyzedContract: null,
  setAnalizedContract: (contract) => set({ analyzedContract: contract }),

  getContractContentFromPdf: async () => {
    const { file } = get();
    if (!file) throw Error("no file for conversion found"); //error werfen
    try {
      const text = await pdfToText(file);
      set({ contractContent: text });
    } catch (error) {
      //errror werfen
      console.log({ error });
    }
  },

  getContractAnalysis: async () => {
    const {
      contractContent,
      contractType,
      jurisdiction,
      setAnalyzedContractRaw,
    } = get();
    const { sendMessage } = useChatStore.getState();
    const contractMessage = InitialAnalysis(
      contractContent!,
      contractType,
      jurisdiction
    );
    await sendMessage(contractMessage);
    const { messages } = useChatStore.getState();

    const response = messages[1];
    setAnalyzedContractRaw(response.content);
  },

  responseToContractAnalysis: () => {
    const { setAnalizedContract, analyzedContractRaw } = get();
    try {
      const cleanedMessage = analyzedContractRaw
        .split("```json")[1]
        .split("```")[0];
      const parsedData = JSON.parse(cleanedMessage!);
      setAnalizedContract(parsedData);
    } catch (jsonError) {
      console.error("Error parsing JSON response:", jsonError);
    }
  },

  analyzeContract: async () => {
    const { setAnalyzing } = get();
    setAnalyzing(true);
    await get().getContractContentFromPdf();
    await get().getContractAnalysis();
    get().responseToContractAnalysis();
    setAnalyzing(false);
  },

  analyzing: false,
  setAnalyzing: (analyzing) => set({ analyzing }),
}));

export default useContractStore;
