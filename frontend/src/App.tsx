import Home from "./pages/LandingPage";
import RootLayout from "./layout/RootLayout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import FeaturesPage from "./pages/FeaturesPage";
import HowItWorks from "./pages/HowItWorks";



const router = createBrowserRouter([
  // Public routes under RootLayout
  {
    path: "/task-manager-app/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "authorization",
        children: [
          { path: "login", element: <LoginPage /> },
        ],
      },
      { path: "features", element: <FeaturesPage /> },
      { path: "howitworks", element: <HowItWorks /> },
    ],
  },
  


]);

export default function App() {
  return <RouterProvider router={router} />;
}