import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Weather from "../Weather";
import Histry from "../Weather/Histry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Weather />,
  },
  {
    path: "/histroy",
    element: <Histry />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
