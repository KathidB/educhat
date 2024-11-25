import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CategoryList } from "./components/CategoryList/CategoryList.jsx";
import { CommunityServers } from "./constans/CommunityServers.jsx";
import App from "./App.jsx";
import "./styles/theme.css";
import "./styles/globals.css";
import { CommunityServerFunctionContext } from "./context/CommunityServersContext.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: (
          <CommunityServerFunctionContext>
            <CommunityServers />
          </CommunityServerFunctionContext>
        ),
        path: "/",
      },
      {
        element: (
          <CommunityServerFunctionContext>
            <CategoryList />
          </CommunityServerFunctionContext>
        ),
        path: "/music",
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
