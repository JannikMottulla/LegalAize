import { createHashRouter } from "react-router-dom";
import App from "./App";
import Application from "./pages/Application";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/app",
    element: <Application />,
  },
]);

export default router;
