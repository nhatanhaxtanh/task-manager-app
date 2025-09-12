import Home from "./pages/LandingPage";
import RootLayout from "./layout/RootLayout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";



const router = createBrowserRouter([
  // Public routes under RootLayout
  {
    path: "/task-manager-app",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "authorization",
        children: [
          { path: "login", element: <LoginPage /> },
        ],
      },
    ],
  },
  


]);

export default function App() {
  return <RouterProvider router={router} />;
}