import { Footer } from "@/layouts/footer";

import documentTextIcon from "@/assets/svgs/document-text.svg";
import globalIcon from "@/assets/svgs/global.svg";

import tickSqaureIcon from "@/assets/svgs/tick-square.svg";
import calenderIcon from "@/assets/svgs/calendar-2.svg";

import { useEffect, useState } from "react";
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
