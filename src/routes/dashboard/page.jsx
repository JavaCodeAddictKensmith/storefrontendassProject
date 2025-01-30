import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Search, Sun } from "lucide-react";

import { useTheme } from "@/hooks/use-theme";

import { overviewData, recentSalesData, topProducts } from "@/constants";
import StoreSessionsCard from "./StoreSessionCard";

import { Footer } from "@/layouts/footer";

import { CreditCard, DollarSign, TrendingUp, Users } from "lucide-react";
import documentTextIcon from "@/assets/svgs/document-text.svg";
import globalIcon from "@/assets/svgs/global.svg";

import tickSqaureIcon from "@/assets/svgs/tick-square.svg";
import calenderIcon from "@/assets/svgs/calendar-2.svg";
import arrow3Icon from "@/assets/svgs/arrow-3.svg";

const DashboardPage = () => {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col gap-y-4">
            <div className="title">Analytics</div>

            {/* Next Section */}

            <div className="mt-5 flex w-full flex-wrap items-center justify-between gap-4 border-b-[1px] border-slate-300 py-4">
                {/* first layer */}
                <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col gap-y-2 rounded-lg bg-white p-2 shadow-md transition-colors dark:border-slate-700 dark:bg-slate-900">
                        <div className="flex gap-2">
                            <img
                                src={documentTextIcon}
                                alt="Analytics Icon"
                                className="w-4 flex-shrink-0"
                            />

                            <div className="flex items-center justify-center text-center text-[12px] text-[#252D3C]">Reports</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-2 rounded-lg bg-white p-2 shadow-md transition-colors dark:border-slate-700 dark:bg-slate-900">
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

            <div className="mt-5 flex w-full flex-wrap items-center justify-between gap-4">
                {/* first layer */}
                <div className="flex items-center justify-between gap-3">
                    {/* <div className="flex flex-col gap-y-2 rounded-lg shadow-md  bg-white p-2 transition-colors dark:border-slate-700 dark:bg-slate-900">
        <div className="flex gap-2">
            <img src={documentTextIcon} alt="Analytics Icon" className=" flex-shrink-0   w-4"  />

<div className=" text-[#252D3C]  text-[12px] text-center flex justify-center items-center">Reports</div>
</div>
</div> */}
                    <div className="flex-shrink-1 items-center gap-x-2 rounded-[20px] border-[0.1px] border-[#CDD0D5] bg-[#F9F9FA] px-2 py-2 text-base text-slate-900 transition-colors has-[input:focus]:border-blue-500 dark:border-slate-700 dark:text-slate-50 dark:focus:border-blue-600 md:flex md:w-auto lg:w-80">
                        <Search
                            size={20}
                            className="hidden text-[#777F8C] md:block lg:block"
                        />
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search reports"
                            className="w-full bg-transparent text-[16px] text-slate-900 outline-0 placeholder:text-[#777F8C]"
                        />
                    </div>

                    <div className="flex flex-col gap-y-2 rounded-lg bg-white p-2 shadow-md transition-colors dark:border-slate-700 dark:bg-slate-900">
                        <div className="flex gap-2">
                            <img
                                src={arrow3Icon}
                                alt="Analytics Icon"
                                className="w-4 flex-shrink-0"
                            />

                            <div className="flex items-center justify-center text-center text-[14px] text-[#252D3C]">Sort</div>
                        </div>
                    </div>

                    <div>
                        <select
                            className="flex flex-col gap-y-2 rounded-lg bg-white p-2 text-[14px] shadow-md transition-colors has-[input:focus]:border-none dark:border-slate-700 dark:bg-slate-900"
                            // onChange={(e) => {}}
                        >
                            <option
                                value=""
                                key="all-bids"
                            >
                                Category
                            </option>
                            <option
                                value="BID_ACTIVE"
                                key="bid-active"
                            >
                                Transact
                            </option>
                            <option
                                value="POSTED"
                                key="posted-request"
                            >
                                BlockChain
                            </option>
                        </select>
                    </div>
                </div>

                {/* second layer */}
                <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col gap-y-2 p-2 transition-colors">
                        <div className="flex gap-2">
                            <div className="flex items-center justify-center text-center text-[12px] text-[#252D3C]">12 results</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <StoreSessionsCard /> */}
            {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"> */}
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="min-h-[240px] rounded-md border border-gray-300 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold">Store Sessions</h2>
                            <img
                                src={documentTextIcon}
                                alt="Analytics Icon"
                                className="w-4"
                            />
                        </div>

                        <p className="mt-2 text-3xl font-bold">0 -</p>

                        <div className="mt-3 flex items-center gap-2">
                            <div>₦10</div>
                            <div className="h-[2px] flex-1 bg-gray-300 line-through"></div>
                        </div>

                        <div className="mt-3 flex items-center gap-2">
                            <div>₦10</div>
                            <div className="h-[2px] flex-1 bg-gray-300 line-through"></div>
                        </div>

                        <div className="mt-3 flex items-center gap-2">
                            <div>₦10</div>
                            {/* <div className="flex flex-1 items-center justify-between">
                                <div className="w-full border-t-2 border-dashed border-red-700"></div>
                            </div> */}
                            <div className="flex flex-1 items-center justify-between gap-2">
                                {" "}
                                {/* <div className="flex w-[30%] items-center">
                                <div className="h-[2px] w-full bg-[#AE4551] line-through"></div>
                            </div> */}
                                {/* <div className="flex justify-center font-bold text-[#E0B7BB]"> - - - - - - - - - - - -</div> */}
                                {/* <hr className="my-4 h-2 border-t-2 border-dashed border-gray-400" /> */}
                                <div className="flex w-full items-center space-x-2">
                                    <div className="h-0.5 w-[35%] bg-[#AE4551]"></div>
                                    <div className="h-0.5 w-[3%] bg-[#E0B7BB]"></div>
                                    <div className="h-0.5 w-[3%] bg-[#E0B7BB]"></div>
                                    <div className="h-0.5 w-[3%] bg-[#E0B7BB]"></div>
                                    <div className="h-0.5 w-[3%] bg-[#E0B7BB]"></div>
                                    <div className="h-0.5 w-[3%] bg-[#E0B7BB]"></div>
                                    <div className="h-0.5 w-[3%] bg-[#E0B7BB]"></div>
                                    <div className="h-0.5 w-[3%] bg-[#E0B7BB]"></div>
                                    <div className="h-0.5 w-[3%] bg-[#E0B7BB]"></div>
                                    <div className="h-0.5 w-[3%] bg-[#E0B7BB]"></div>
                                    <div className="h-0.5 w-[3%] bg-[#E0B7BB]"></div>
                                    <div className="h-0.5 w-[3%] bg-[#E0B7BB]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-7 flex justify-end gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                                <div className="h-[2px] w-4 bg-[#AE4551]"></div>
                                <span>Aug 19, 2024</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="w-4 border-t-2 border-dashed border-red-700 opacity-50"></div>
                                <span>Aug 18, 2024</span>
                            </div>
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className="min-h-[240px] rounded-md border border-gray-300 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold">Total Customers</h2>
                            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
                                <Users size={26} />
                            </div>
                        </div>

                        <p className="mt-2 text-3xl font-bold text-gray-900">15,400k</p>
                        <span className="mt-2 flex w-fit items-center gap-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500">
                            <TrendingUp size={18} />
                            15%
                        </span>
                    </div>

                    {/* Third Card */}
                    <div className="min-h-[240px] rounded-md border border-gray-300 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold">Sales</h2>
                            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
                                <CreditCard size={26} />
                            </div>
                        </div>

                        <p className="mt-2 text-3xl font-bold text-gray-900">12,340</p>
                        <span className="mt-2 flex w-fit items-center gap-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500">
                            <TrendingUp size={18} />
                            19%
                        </span>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DashboardPage;
