import { Search } from "lucide-react";

import { useTheme } from "@/hooks/use-theme";

import { Footer } from "@/layouts/footer";

import documentTextIcon from "@/assets/svgs/document-text.svg";
import globalIcon from "@/assets/svgs/global.svg";

import tickSqaureIcon from "@/assets/svgs/tick-square.svg";
import calenderIcon from "@/assets/svgs/calendar-2.svg";

import { useEffect, useMemo, useState } from "react";
import LandingPage from "./pages/LandingPage";
import RecordHistory from "./pages/Record";

const DashboardPage = () => {
    const [activePage, setActivePage] = useState("dashboard");
    const MainComponent = () => {
        switch (activePage) {
            case "dashboard":
                return <LandingPage setActiveTab={setActivePage} />;
            case "records-history":
                return <RecordHistory />;
            default:
                return null;
        }
    };

    useEffect(() => {
        setActivePage("dashboard");
    }, []);

    const records = useMemo(
        () => [
            { id: "1", name: "Store sessions", category: "Acquisition", lastView: "11 Aug 2024" },
            { id: "2", name: "Sessions by over time", category: "Acquisition", lastView: "11 Aug 2024" },
            { id: "3", name: "Store conversion over time", category: "Acquisition", lastView: "" },
            { id: "4", name: "Cart Analysis", category: "Acquisition", lastView: "" },
            { id: "5", name: "Store sessions", category: "Acquisition", lastView: "" },
            { id: "6", name: "Store sessions", category: "Acquisition", lastView: " " },
            { id: "7", name: "Store sessions", category: "Acquisition", lastView: "" },
            { id: "8", name: "Store sessions", category: "Acquisition", lastView: "" },

            { id: "11", name: "Top Searches", category: "Behavoir", lastView: "" },
            { id: "12", name: "Top Searches", category: "Behavoir", lastView: "" },
            { id: "13", name: "Top Searches", category: "Behavoir", lastView: "" },
            { id: "14", name: "Top Searches", category: "Behavoir", lastView: "" },
            { id: "9", name: "Store sessions", category: "Customers", lastView: "" },
            { id: "10", name: "Store sessions", category: "Customers", lastView: "" },
            { id: "7", name: "Store sessions", category: "Finance", lastView: "" },
            { id: "8", name: "Store sessions", category: "Finance", lastView: "" },
            { id: "15", name: "Store sessions", category: "Finance", lastView: "" },
            { id: "16", name: "Store sessions", category: "Finance", lastView: "" },
            { id: "17", name: "Store sessions", category: "Finance", lastView: "" },
            { id: "18", name: "Store sessions", category: "Finance", lastView: "" },
            { id: "19", name: "Store sessions", category: "Fraud", lastView: "" },
            { id: "20", name: "Store sessions", category: "Fraud", lastView: "" },
            { id: "21", name: "Store sessions", category: "Fraud", lastView: "" },
            { id: "22", name: "Store sessions", category: "Inventory", lastView: "" },
            { id: "23", name: "Store sessions", category: "Inventory", lastView: "" },
            { id: "24", name: "Store sessions", category: "Inventory", lastView: "" },
            { id: "25", name: "Sales Attribute to Marketing", category: "Marketing", lastView: "" },
            { id: "26", name: "Sales Attribute to Marketing", category: "Marketing", lastView: "" },
            { id: "28", name: "Fulfilment over time", category: "Orders", lastView: "" },
            { id: "27", name: "Fulfilment  delivery over time", category: "Orders", lastView: "" },
            { id: "28", name: "Fulfilment over time", category: "Orders", lastView: "" },
            { id: "29", name: "Fulfilment  delivery over time", category: "Orders", lastView: "" },
            { id: "30", name: "Profit By POS", category: "Orders", lastView: "Profit Margin" },
            { id: "31", name: "Profit By Location", category: "Profit Margin", lastView: "" },
            { id: "32", name: "Profit By Product Variant SKU", category: "Profit Margin", lastView: "" },
            { id: "33", name: "Sales by Product", category: "Sales", lastView: "" },
            { id: "34", name: "Average Orders time", category: "Sales", lastView: "" },
            { id: "35", name: "Total sales", category: "Sales", lastView: "" },
            { id: "36", name: "Sales by Customer Name", category: "Sales", lastView: "" },
            { id: "37", name: "Sales by discount", category: "Sales", lastView: "" },
            { id: "38", name: "Sales by Product Variat SKU", category: "Sales", lastView: "" },
            { id: "39", name: "Sales by brand", category: "Sales", lastView: "" },
        ],
        [],
    );
    return (
        <div className="flex flex-col gap-y-4">
            <div className="title">Analytics</div>

            {/* Next Section */}

            <div className="mt-5 flex w-full flex-wrap items-center justify-between gap-4 border-b-[1px] border-slate-300 py-4">
                {/* first layer */}
                <div className="flex items-center justify-between gap-3">
                    <button
                        className={`flex flex-col gap-y-2 rounded-lg p-2 shadow-md transition-colors dark:border-slate-700 dark:bg-slate-900 ${activePage === "records-history" ? "bg-[#F5E8E9]" : "bg-white"}`}
                        onClick={() => setActivePage("records-history")}
                    >
                        <div className="flex gap-2">
                            <img
                                src={documentTextIcon}
                                alt="Analytics Icon"
                                className="w-4 flex-shrink-0"
                            />
                            {/* <Link to={"/records-history"}> */}{" "}
                            <div className="flex items-center justify-center text-center text-[12px] text-[#252D3C]">Reports</div>
                            {/* </Link> */}
                        </div>
                    </button>

                    <div
                        className="flex flex-col gap-y-2 rounded-lg bg-white p-2 shadow-md transition-colors dark:border-slate-700 dark:bg-slate-900"
                        onClick={() => setActivePage("dashboard")}
                    >
                        <div className="flex gap-2">
                            <img
                                src={globalIcon}
                                alt="Analytics Icon"
                                className="w-4 flex-shrink-0"
                            />

                            <div className="flex items-center justify-center text-center text-[12px] text-[#252D3C]">Live View</div>
                        </div>
                    </div>
                </div>

                {/* second layer */}
                <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col gap-y-2 rounded-lg bg-white p-2 shadow-md transition-colors dark:border-slate-700 dark:bg-slate-900">
                        <div className="flex gap-2">
                            <img
                                src={calenderIcon}
                                alt="Analytics Icon"
                                className="w-4 flex-shrink-0"
                            />

                            <div className="flex items-center justify-center text-center text-[12px] text-[#252D3C]">Today</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-2 rounded-lg bg-white p-2 shadow-md transition-colors dark:border-slate-700 dark:bg-slate-900">
                        <div className="flex items-center justify-center text-center text-[12px] text-[#252D3C]">Compare to: Yesterday</div>
                    </div>

                    <div className="flex flex-col gap-y-2 p-2 transition-colors">
                        <div className="flex gap-2">
                            <img
                                src={tickSqaureIcon}
                                alt="Analytics Icon"
                                className="w-4 flex-shrink-0"
                            />

                            <div className="flex items-center justify-center text-center text-[12px] text-[#252D3C]">Auto refresh</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* next search section */}

            <MainComponent />

            <Footer />
        </div>
    );
};

export default DashboardPage;
