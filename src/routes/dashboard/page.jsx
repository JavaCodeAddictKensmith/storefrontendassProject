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

            <StoreSessionsCard />
            {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"> */}
            <div className="flex w-full flex-wrap gap-4">
                <div className="min-h-[240px] rounded-md border border-gray-300 bg-white p-4 pb-6 shadow-sm md:min-w-[40%] lg:min-w-[32%]">
                    <div className="card-header">
                        <div className="flex w-full items-center justify-between">
                            <h2 className="text-lg font-semibold">Store Sessions</h2>
                            <img
                                src={documentTextIcon}
                                alt="Analytics Icon"
                                className="w-4 flex-shrink-0"
                            />
                        </div>
                    </div>

                    <p className="text-3xl font-bold">0 -</p>

                    <div className="mt-3 flex w-full items-center gap-2">
                        <div>₦10</div> <div className="h-[2px] flex-1 bg-[#CDD0D5] line-through"></div>
                    </div>

                    <div className="mt-3 flex w-full items-center gap-2">
                        <div>₦10</div> <div className="h-[2px] flex-1 bg-[#CDD0D5] line-through"></div>
                    </div>

                    <div className="mt-3 flex w-full items-center gap-2">
                        <div>₦10</div>
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
                    <div className="mt-3 flex w-full items-center justify-between gap-2">
                        <div></div>{" "}
                        <div className="flex h-[2px] flex-1 justify-between">
                            <div className="text-sm text-[#777F8C]">12:00 AM</div>
                            <div className="text-sm text-[#777F8C]">5:00 AM</div>
                            <div className="text-sm text-[#777F8C]">10:00 AM</div>
                            <div className="text-sm text-[#777F8C]">10:00 AM</div>
                        </div>
                    </div>

                    <div className="mt-7 flex items-center justify-end gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                            <div className="h-[2px] w-4 bg-red-700"></div>
                            <span>Aug 19, 2024</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-4 border-t-2 border-dashed border-red-700 opacity-50"></div> <span>Aug 18, 2024</span>
                        </div>
                    </div>
                </div>

                {/* second card */}

                <div className="min-h-[240px] rounded-md border border-gray-300 bg-white p-4 pb-6 shadow-sm md:min-w-[40%] lg:min-w-[32%]">
                    <div className="card-header">
                        <div className="flex w-full items-center justify-between">
                            <h2 className="text-lg font-semibold">Store Sessions</h2>
                            <img
                                src={documentTextIcon}
                                alt="Analytics Icon"
                                className="w-4 flex-shrink-0"
                            />
                        </div>
                    </div>

                    <p className="text-3xl font-bold">0 -</p>

                    <div className="mt-3 flex w-full items-center gap-2">
                        <div>₦10</div> <div className="h-[2px] flex-1 bg-[#CDD0D5] line-through"></div>
                    </div>

                    <div className="mt-3 flex w-full items-center gap-2">
                        <div>₦10</div> <div className="h-[2px] flex-1 bg-[#CDD0D5] line-through"></div>
                    </div>

                    <div className="mt-3 flex w-full items-center gap-2">
                        <div>₦10</div>
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
                    <div className="mt-3 flex w-full items-center justify-between gap-2">
                        <div></div>{" "}
                        <div className="flex h-[2px] flex-1 justify-between">
                            <div className="text-sm text-[#777F8C]">12:00 AM</div>
                            <div className="text-sm text-[#777F8C]">5:00 AM</div>
                            <div className="text-sm text-[#777F8C]">10:00 AM</div>
                            <div className="text-sm text-[#777F8C]">10:00 AM</div>
                        </div>
                    </div>

                    <div className="mt-7 flex items-center justify-end gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                            <div className="h-[2px] w-4 bg-red-700"></div>
                            <span>Aug 19, 2024</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-4 border-t-2 border-dashed border-red-700 opacity-50"></div> <span>Aug 18, 2024</span>
                        </div>
                    </div>
                </div>

                {/* third */}

                {/* <div className="min-h-[240px] rounded-md border border-gray-300 bg-white p-4 pb-6 shadow-sm md:min-w-[374px] lg:min-w-[374px]"> */}

                <div className="sm:[100%] min-h-[240px] rounded-md border border-gray-300 bg-white p-4 pb-6 shadow-sm md:min-w-[40%] lg:min-w-[32%]">
                    <div className="card-header">
                        <div className="flex w-full items-center justify-between">
                            <h2 className="text-lg font-semibold">Store Sessions</h2>
                            <img
                                src={documentTextIcon}
                                alt="Analytics Icon"
                                className="w-4 flex-shrink-0"
                            />
                        </div>
                    </div>

                    <p className="text-3xl font-bold">0 -</p>

                    <div className="mt-3 flex w-full items-center gap-2">
                        <div>₦10</div> <div className="h-[2px] flex-1 bg-[#CDD0D5] line-through"></div>
                    </div>

                    <div className="mt-3 flex w-full items-center gap-2">
                        <div>₦10</div> <div className="h-[2px] flex-1 bg-[#CDD0D5] line-through"></div>
                    </div>

                    <div className="mt-3 flex w-full items-center gap-2">
                        <div>₦10</div>
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
                    <div className="mt-3 flex w-full items-center justify-between gap-2">
                        <div></div>{" "}
                        <div className="flex h-[2px] flex-1 justify-between">
                            <div className="text-sm text-[#777F8C]">12:00 AM</div>
                            <div className="text-sm text-[#777F8C]">5:00 AM</div>
                            <div className="text-sm text-[#777F8C]">10:00 AM</div>
                            <div className="text-sm text-[#777F8C]">10:00 AM</div>
                        </div>
                    </div>

                    <div className="mt-7 flex items-center justify-end gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                            <div className="h-[2px] w-4 bg-red-700"></div>
                            <span>Aug 19, 2024</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-4 border-t-2 border-dashed border-red-700 opacity-50"></div> <span>Aug 18, 2024</span>
                        </div>
                    </div>
                </div>
                {/* stops here */}

                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <Users size={26} />
                        </div>
                        <p className="card-title">Total Customers</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">15,400k</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            15%
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <CreditCard size={26} />
                        </div>
                        <p className="card-title">Sales</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">12,340</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            19%
                        </span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="card col-span-1 md:col-span-2 lg:col-span-4">
                    <div className="card-header">
                        <p className="card-title">Overview</p>
                    </div>
                    <div className="card-body p-0">
                        <ResponsiveContainer
                            width="100%"
                            height={300}
                        >
                            <AreaChart
                                data={overviewData}
                                margin={{
                                    top: 0,
                                    right: 0,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <defs>
                                    <linearGradient
                                        id="colorTotal"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="5%"
                                            stopColor="#2563eb"
                                            stopOpacity={0.8}
                                        />
                                        <stop
                                            offset="95%"
                                            stopColor="#2563eb"
                                            stopOpacity={0}
                                        />
                                    </linearGradient>
                                </defs>
                                <Tooltip
                                    cursor={false}
                                    formatter={(value) => `$${value}`}
                                />

                                <XAxis
                                    dataKey="name"
                                    strokeWidth={0}
                                    stroke={theme === "light" ? "#475569" : "#94a3b8"}
                                    tickMargin={6}
                                />
                                <YAxis
                                    dataKey="total"
                                    strokeWidth={0}
                                    stroke={theme === "light" ? "#475569" : "#94a3b8"}
                                    tickFormatter={(value) => `$${value}`}
                                    tickMargin={6}
                                />

                                <Area
                                    type="monotone"
                                    dataKey="total"
                                    stroke="#2563eb"
                                    fillOpacity={1}
                                    fill="url(#colorTotal)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="card col-span-1 md:col-span-2 lg:col-span-3">
                    <div className="card-header">
                        <p className="card-title">Recent Sales</p>
                    </div>
                    <div className="card-body h-[300px] overflow-auto p-0">
                        {recentSalesData.map((sale) => (
                            <div
                                key={sale.id}
                                className="flex items-center justify-between gap-x-4 py-2 pr-2"
                            >
                                <div className="flex items-center gap-x-4">
                                    <img
                                        src={sale.image}
                                        alt={sale.name}
                                        className="size-10 flex-shrink-0 rounded-full object-cover"
                                    />
                                    <div className="flex flex-col gap-y-2">
                                        <p className="font-medium text-slate-900 dark:text-slate-50">{sale.name}</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{sale.email}</p>
                                    </div>
                                </div>
                                <p className="font-medium text-slate-900 dark:text-slate-50">${sale.total}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DashboardPage;
