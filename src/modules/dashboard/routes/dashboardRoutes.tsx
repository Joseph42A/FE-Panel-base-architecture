import { RouteObject } from "react-router-dom";
import TheDashboard from "@/modules/dashboard/views/TheDashboard";

export const dashboardRoutes: RouteObject[] = [
  {
    path: "dashboard",
    element: <TheDashboard />
  }
];

export default dashboardRoutes;
