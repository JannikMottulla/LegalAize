import { createHashRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Layout from "./Layout";
import ApplicationLayout from "./ApplicationLayout";
import ApplicationUploadPageTwo from "./pages/ApplicationUploadPage/ApplicationUploadPageTwo";
import FreeContractAnalysis from "./pages/FreeContractAnalysis/FreeContractAnalysis";
import useContractStore from "./stores/ContractStore";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/app",
    element: <ApplicationLayout />,
    // children: [{ index: true, element: <ApplicationUploadPage /> }],
    children: [
      { index: true, element: <ApplicationUploadPageTwo /> },
      {
        path: "free-contract-analysis",
        element: <FreeContractAnalysis />,
        loader: async () => {
          const { file, jurisdiction, contractType, analyzeContract } =
            useContractStore.getState();
          if (!file || !jurisdiction || !contractType) {
            //set Error
            window.location.href = "#/app";
          }
          analyzeContract();

          // debugger;
          // await useContractStore.getState().analyzeContract();
        },
      },
    ],
  },
]);

export default router;
