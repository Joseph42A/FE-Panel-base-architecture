import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/error-page";
import TheLayout from "@/layout/TheLayout";
import dashboardRoutes from "@/modules/dashboard/routes/dashboardRoutes";

export const routerConfig = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },

  {
    path: "/admin",
    element: <TheLayout />,
    children: [
      ...dashboardRoutes,
      { index: true, element: <div>Default route</div> } // Render as default
    ]
  }
];

const router = createBrowserRouter(routerConfig);
export default router;
