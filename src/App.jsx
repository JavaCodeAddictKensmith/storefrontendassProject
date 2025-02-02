import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import ProtectedRoute from "./routes/authroutes/ProtectedRoutes";
import SignupPage from "./routes/authroutes/SignUpPage";
import LandingPage from "./routes/dashboard/pages/LandingPage";
import Login from "./routes/authroutes/Login";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            ),
            children: [
                { index: true, element: <DashboardPage /> },
                { path: "orders", element: <h1>Orders</h1> },
                { path: "products-only", element: <h1>Products</h1> },
                { path: "categories", element: <h1>Categories</h1> },
                { path: "brands", element: <h1>Brands</h1> },
                { path: "refunds", element: <h1>Refunds</h1> },
            ],
        },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignupPage /> },
    ]);
    return (
        // <ThemeProvider storageKey="theme">
        <RouterProvider router={router} />
        // </ThemeProvider>
    );
}

export default App;
