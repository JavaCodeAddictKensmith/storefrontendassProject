import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import ProtectedRoute from "./routes/authroutes/ProtectedRoutes";
import SignupPage from "./routes/authroutes/SignUpPage";

import Login from "./routes/authroutes/Login";
// import Brands from "./routes/dashboard/pages/brands";
// import Categories from "./routes/dashboard/pages/categories";
// import Orders from "./routes/dashboard/pages/Orders";
// import Products from "./routes/dashboard/pages/products";
import Brands from "./routes/dashboard/pages/brands";
import Categories from "./routes/dashboard/pages/categories";
import Products from "./routes/dashboard/pages/products";
// import Orders from "./routes/dashboard/pages/orders";
import Refunds from "./routes/dashboard/pages/refunds";
import Configurations from "./routes/dashboard/pages/configuration";
import Supports from "./routes/dashboard/pages/supports";
import Orders from "./routes/dashboard/pages/Orders";

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
                { path: "orders", element: <Orders /> },
                { path: "products-only", element: <Products /> },
                { path: "categories", element: <Categories /> },
                { path: "brands", element: <Brands /> },
                { path: "refunds", element: <Refunds /> },
                { path: "support", element: <Supports /> },
                { path: "configuration", element: <Configurations /> },
                // /support
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
