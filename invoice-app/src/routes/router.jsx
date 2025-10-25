import { createBrowserRouter } from "react-router-dom";
import publicRoute from "./publicRoute";
import PublicLayout from "../features/public/components/PublicLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [...publicRoute],
  },
]);

export default router;
