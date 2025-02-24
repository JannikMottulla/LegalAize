import { createHashRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Layout from "./Layout";
import ApplicationLayout from "./ApplicationLayout";
import ApplicationUploadPageTwo from "./pages/ApplicationUploadPage/ApplicationUploadPageTwo";
import FreeContractAnalysis from "./pages/FreeContractAnalysis/FreeContractAnalysis";
import useContractUploadStore from "./stores/ContractUploadStore";

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
        loader: () => {
          const { analyzeContract } = useContractUploadStore.getState();
          analyzeContract();
          return null;
        },
        element: <FreeContractAnalysis />,
      },
    ],
  },
]);

export default router;
