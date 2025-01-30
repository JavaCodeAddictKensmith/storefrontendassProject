import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                },
                {
                    path: "orders",
                    element: <h1 className="title">Orders Coming soon</h1>,
                },
                {
                    path: "products-only",
                    element: <h1 className="title"> Products only</h1>,
                },
                {
                    path: "categories",
                    element: <h1 className="title">Categories Coming soon</h1>,
                },
                {
                    path: "brands",
                    element: <h1 className="title">Brands Coming soon</h1>,
                },
                {
                    path: "refunds",
                    element: <h1 className="title">Refunds coming soon</h1>,
                },
                {
                    path: "support",
                    element: <h1 className="title">Support coming soon</h1>,
                },
                {
                    path: "configuration",
                    element: <h1 className="title">Configuration coming soon</h1>,
                },
                {
                    path: "inventory",
                    element: <h1 className="title">Inventory</h1>,
                },
                {
                    path: "settings",
                    element: <h1 className="title">Settings</h1>,
                },
            ],
        },
    ]);

    return (
        // <ThemeProvider storageKey="theme">
        <RouterProvider router={router} />
        // </ThemeProvider>
    );
}

export default App;
