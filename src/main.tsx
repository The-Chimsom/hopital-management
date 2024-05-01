import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClerkDashboard } from "./pages/clerk/clerk.dashboard";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode></React.StrictMode>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: < ClerkDashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);