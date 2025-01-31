import { Search } from "lucide-react";

import { useTheme } from "@/hooks/use-theme";

import StoreSessionsCard from "./StoreSessionCard";

import { Footer } from "@/layouts/footer";

import documentTextIcon from "@/assets/svgs/document-text.svg";
import globalIcon from "@/assets/svgs/global.svg";

import tickSqaureIcon from "@/assets/svgs/tick-square.svg";
import calenderIcon from "@/assets/svgs/calendar-2.svg";
import arrow3Icon from "@/assets/svgs/arrow-3.svg";
import googleIcon from "@/assets/svgs/googleblue.svg";
import faceBookIcon from "@/assets/svgs/facebookicon.svg";
import instagramIcon from "@/assets/svgs/instagramicon.svg";
import twitterIcon from "@/assets/svgs/twitter.svg";
import Card from "./components/Card";

const DashboardPage = () => {
    // const { theme } = useTheme();

    const dummyData = {
        headers: [
            { id: 1, text: "Source" },
            { id: 2, text: "impressions" },
            { id: 3, text: "Clicks" },
            { id: 4, text: "Revenue" },
        ],
        rows: [
            {
                bidAmount: 1,
                name: "Facebook",
                imp: "35",
                clicks: "5",
                revenue: "₦ 22,035.00",
            },

            {
                bidAmount: 2,
                name: "Instagram",
                imp: "35",
                clicks: "5",
                revenue: "₦ 22,035.00",
            },
            {
                bidAmount: 3,
                name: "Twitter",
                imp: "35",
                clicks: "5",
                revenue: "₦ 22,035.00",
            },
            {
                bidAmount: 4,
                name: "Google",
                imp: "35",
                clicks: "5",
                revenue: "₦ 22,035.00",
            },
        ],
    };

    const dummyData2 = {
        headers: [
            { id: 1, text: "Customer" },
            { id: 2, text: "CLTV" },
            { id: 3, text: "Revenue" },
        ],
        rows: [
            {
                bidAmount: 1,
                name: "Veres Panas",
                cont: "202 Purchases",
                ctv: "202",
                revenue: "₦ 22,035.00",
            },

            {
                bidAmount: 2,
                name: "Mikso Fruzino",
                cont: "202 Purchases",
                ctv: "202",
                revenue: "₦ 22,035.00",
            },
            {
                bidAmount: 3,
                name: "Mikso Fruzino",
                cont: "202 Purchases",
                ctv: "202",
                revenue: "₦ 22,035.00",
            },
        ],
    };

    const dummydum = [
        {
            id: "1",
            title: "Total Sales",
            topAmount: "30",
            data: {
                headers: [
                    { id: 1, text: "Source" },
                    { id: 2, text: "impressions" },
                    { id: 3, text: "Clicks" },
                    { id: 4, text: "Revenue" },
                ],
                rows: [
                    {
                        bidAmount: 1,
                        name: "Facebook",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },

                    {
                        bidAmount: 2,
                        name: "Instagram",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 3,
                        name: "Twitter",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 4,
                        name: "Google",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                ],
            },
        },
        {
            id: "2",
            title: "Store Sessions",
            topAmount: "20",
            data: {
                headers: [
                    { id: 1, text: "Source" },
                    { id: 2, text: "impressions" },
                    { id: 3, text: "Clicks" },
                    { id: 4, text: "Revenue" },
                ],
                rows: [
                    {
                        bidAmount: 1,
                        name: "Facebook",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },

                    {
                        bidAmount: 2,
                        name: "Instagram",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 3,
                        name: "Twitter",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 4,
                        name: "Google",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                ],
            },
        },
        {
            id: "3",
            title: "Total Orders",
            topAmount: "2",
            data: {
                headers: [
                    { id: 1, text: "Source" },
                    { id: 2, text: "impressions" },
                    { id: 3, text: "Clicks" },
                    { id: 4, text: "Revenue" },
                ],
                rows: [
                    {
                        bidAmount: 1,
                        name: "Facebook",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },

                    {
                        bidAmount: 2,
                        name: "Instagram",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 3,
                        name: "Twitter",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 4,
                        name: "Google",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                ],
            },
        },
        {
            id: "4",
            title: "Average Other Volume",
            topAmount: "3",
            data: {
                headers: [
                    { id: 1, text: "Source" },
                    { id: 2, text: "impressions" },
                    { id: 3, text: "Clicks" },
                    { id: 4, text: "Revenue" },
                ],
                rows: [
                    {
                        bidAmount: 1,
                        name: "Facebook",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },

                    {
                        bidAmount: 2,
                        name: "Instagram",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 3,
                        name: "Twitter",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 4,
                        name: "Google",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                ],
            },
        },
        {
            id: "5",
            title: "Fulfilled Orders Over Time",
            topAmount: "9",
            data: {
                headers: [
                    { id: 1, text: "Source" },
                    { id: 2, text: "impressions" },
                    { id: 3, text: "Clicks" },
                    { id: 4, text: "Revenue" },
                ],
                rows: [
                    {
                        bidAmount: 1,
                        name: "Facebook",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },

                    {
                        bidAmount: 2,
                        name: "Instagram",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 3,
                        name: "Twitter",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 4,
                        name: "Google",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                ],
            },
        },
        {
            id: "6",
            title: "Marketing Sales",
            topAmount: "12",
            data: {
                headers: [
                    { id: 1, text: "Source" },
                    { id: 2, text: "impressions" },
                    { id: 3, text: "Clicks" },
                    { id: 4, text: "Revenue" },
                ],
                rows: [
                    {
                        bidAmount: 1,
                        name: "Facebook",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },

                    {
                        bidAmount: 2,
                        name: "Instagram",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 3,
                        name: "Twitter",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 4,
                        name: "Google",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                ],
            },
        },
        {
            id: "7",
            title: "Returning Customer Rate",
            topAmount: "18",
            data: {
                headers: [
                    { id: 1, text: "Source" },
                    { id: 2, text: "impressions" },
                    { id: 3, text: "Clicks" },
                    { id: 4, text: "Revenue" },
                ],
                rows: [
                    {
                        bidAmount: 1,
                        name: "Facebook",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },

                    {
                        bidAmount: 2,
                        name: "Instagram",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 3,
                        name: "Twitter",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 4,
                        name: "Google",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                ],
            },
        },

        {
            id: "7",
            title: "Returning Customer Rate",
            topAmount: "18",
            data: {
                headers: [
                    { id: 1, text: "Source" },
                    { id: 2, text: "impressions" },
                    { id: 3, text: "Clicks" },
                    { id: 4, text: "Revenue" },
                ],
                rows: [
                    {
                        bidAmount: 1,
                        name: "Facebook",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },

                    {
                        bidAmount: 2,
                        name: "Instagram",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 3,
                        name: "Twitter",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 4,
                        name: "Google",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                ],
            },
        },

        {
            id: "8",
            title: "Sales By Social Source",
            topAmount: "18",
            data: {
                headers: [
                    { id: 1, text: "Source" },
                    { id: 2, text: "impressions" },
                    { id: 3, text: "Clicks" },
                    { id: 4, text: "Revenue" },
                ],
                rows: [
                    {
                        bidAmount: 1,
                        name: "Facebook",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },

                    {
                        bidAmount: 2,
                        name: "Instagram",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 3,
                        name: "Twitter",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 4,
                        name: "Google",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                ],
            },
        },

        {
            id: "9",
            title: "Top Selling Products",
            topAmount: "1",
            data: {
                headers: [
                    { id: 1, text: "Product" },
                    { id: 2, text: "SKU" },
                    { id: 3, text: "Qty" },
                    // { id: 4, text: "Revenue" },
                ],
                rows: [
                    {
                        bidAmount: 1,
                        name: "Fresh Lemon Fruit",
                        sku: "41152845",
                        qty: "203",
                        // revenue: "₦ 22,035.00",
                    },

                    {
                        bidAmount: 2,
                        name: "Barista Drink Latte Iit",
                        sku: "41152845",
                        qty: "203",
                        // revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 3,
                        name: "Essential Waitrose D",
                        sku: "41152845",
                        qty: "203",
                        // revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 4,
                        name: "Freshfarm Spaghetti",
                        sku: "41152845",
                        qty: "203",
                        // revenue: "₦ 22,035.00",
                    },
                ],
            },
        },
        {
            id: "10",
            title: "Sales By Traffic Source",
            topAmount: "5",
            data: {
                headers: [
                    { id: 1, text: "Source" },
                    { id: 2, text: "impressions" },
                    { id: 3, text: "Clicks" },
                    { id: 4, text: "Revenue" },
                ],
                rows: [
                    {
                        bidAmount: 1,
                        name: "Facebook",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },

                    {
                        bidAmount: 2,
                        name: "Instagram",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 3,
                        name: "Twitter",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 4,
                        name: "Google",
                        imp: "35",
                        clicks: "5",
                        revenue: "₦ 22,035.00",
                    },
                ],
            },
        },
        {
            id: "11",
            title: "Sessions By Location",
            topAmount: "0",
            data: {
                headers: [
                    { id: 1, text: "Source" },
                    { id: 2, text: "Unique Visitors" },
                    { id: 3, text: "Session" },
                    // { id: 4, text: "Revenue" },
                ],
                rows: [
                    {
                        bidAmount: 1,
                        name: "Australia",
                        unique: "35",
                        sessions: "5",
                        // revenue: "₦ 22,035.00",
                    },

                    {
                        bidAmount: 1,
                        name: "Nigeria",
                        unique: "35",
                        sessions: "5",
                        // revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 1,
                        name: "Canada",
                        unique: "35",
                        sessions: "5",
                        // revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 1,
                        name: "USA",
                        unique: "35",
                        sessions: "5",
                        // revenue: "₦ 22,035.00",
                    },
                ],
            },
        },
        {
            id: "12",
            title: "Sessions By Social Source",
            topAmount: "0",
            data: {
                headers: [
                    { id: 1, text: "Source" },
                    { id: 2, text: "Unique Visitors" },
                    { id: 3, text: "Session" },
                    // { id: 4, text: "Revenue" },
                ],
                rows: [
                    {
                        bidAmount: 1,
                        name: "Facebook",
                        unique: "35",
                        sessions: "5",
                    },

                    {
                        bidAmount: 2,
                        name: "Instagram",
                        unique: "35",
                        sessions: "5",
                    },
                    {
                        bidAmount: 3,
                        name: "Twitter",
                        unique: "35",
                        sessions: "5",
                    },
                    {
                        bidAmount: 4,
                        name: "Google",
                        unique: "35",
                        sessions: "5",
                    },
                ],
            },
        },

        {
            id: "13",
            title: "Customer Lifetime Value (CLTV)",
            topAmount: "0",
            data: {
                headers: [
                    { id: 1, text: "Customer" },
                    { id: 2, text: "CLTV" },
                    { id: 3, text: "Revenue" },
                    // { id: 4, text: "Revenue" },
                ],
                rows: [
                    {
                        bidAmount: 1,
                        name: "Veres Panna",
                        cltv: "202",
                        purchases: "202 Purchases",
                        revenue: "₦ 22,035.00",
                    },

                    {
                        bidAmount: 2,
                        name: "Miksa Fruzsina",
                        cltv: "202",
                        purchases: "202 Purchases",
                        revenue: "₦ 22,035.00",
                    },
                    {
                        bidAmount: 3,
                        name: "Takács Bianka",
                        cltv: "202",
                        purchases: "202 Purchases",
                        revenue: "₦ 22,035.00",
                    },
                ],
            },
        },

        {
            id: "14",
            title: "Conversion Rate",
            topAmount: "0",
            data: {
                headers: [
                    { id: 1, text: "Customer" },
                    { id: 2, text: "CLTV" },
                    { id: 3, text: "Revenue" },
                    // { id: 4, text: "Revenue" },
                ],
                rows: [
                    {
                        bidAmount: 1,
                        name: "Added to cart",
                        sessions: "0 sessions",
                        perc: "0.00%",
                    },

                    {
                        bidAmount: 2,
                        name: "Reached Checkout",
                        sessions: "0 sessions",
                        perc: "0.00%",
                    },

                    {
                        bidAmount: 3,
                        name: "Sessions Converted",
                        sessions: "0 sessions",
                        perc: "0.00%",
                    },
                ],
            },
        },

        {
            id: "15",
            title: "Sessions By Traffic Source",
            topAmount: "0",
            data: {
                headers: [
                    { id: 1, text: "Source" },
                    { id: 2, text: "Unique Visitors" },
                    { id: 3, text: "Session" },
                    // { id: 4, text: "Revenue" },
                ],
                rows: [
                    {
                        bidAmount: 2,
                        name: "Search Engine",
                        unique: "35",
                        sessions: "5",
                    },
                    {
                        bidAmount: 3,
                        name: "Social Media",
                        unique: "35",
                        sessions: "5",
                    },
                    {
                        bidAmount: 1,
                        name: "Diirect",
                        unique: "35",
                        sessions: "5",
                    },
                    {
                        bidAmount: 4,
                        name: "Referrals",
                        unique: "35",
                        sessions: "5",
                    },
                ],
            },
        },
    ];

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
            <div className="container mx-auto mt-5">
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

                        {/* card body */}

                        <div>
                            {" "}
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
                            <div className="mt-1 flex items-center gap-2">
                                {/* <div>N10</div> */}
                                <div className="t flex justify-between gap-4 pl-7 text-[12px] text-[#777F8C]">
                                    <span className="text-[12px]">12:00AM</span>
                                    <span className="text-[12px]">5:00AM </span>
                                    <span className="text-[12px]">10:00AM </span>
                                    <span className="text-[12px]">3:00PM</span>
                                    <span className="text-[12px]">8:00PM</span>
                                    {/* {"12:00AM  5:00AM  10:00AM  3:00PM 8:00PM "} */}
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

                        {/* card body stops here */}
                    </div>
                    {/* Second Card */}

                    {dummydum.map((cell, idx) => (
                        <Card
                            id={cell.id}
                            key={cell.id}
                            title={cell.title}
                            topAmount={cell.topAmount}
                            data={cell.data}
                        />
                    ))}

                    {/* third */}

                    {/* */}

                    {/* <div className="mt-3 w-full overflow-x-auto pb-4">
                        <table className="w-full overflow-x-auto">
                            <thead className="bg-subtleGray w-full p-6">
                                <tr className="bg-unusualGray w-full px-6">
                                    <td class="p-4 text-xs font-semibold text-[#11192a]">Item </td>
                                    <td class="p-4 text-xs font-semibold text-[#11192a]">Description </td>
                                    <td class="p-4 text-xs font-semibold text-[#11192a]">Unit Price</td>
                                    <td class="p-4 text-xs font-semibold text-[#11192a]">Quantity</td>
                                    <td class="p-4 text-xs font-semibold text-[#11192a]">
                                        Amount
                                        <div> (before tax)</div>
                                    </td>
                                    <td class="p-4 text-xs font-semibold text-[#11192a]">Tax Rate</td>
                                    <td class="p-4 text-xs font-semibold text-[#11192a]">Tax Amount</td>
                                    <td class="p-4 text-xs font-semibold text-[#11192a]">Total Price</td>
                                </tr>
                            </thead>

                            <tbody className=" ">
                                {dummyData.map((cell, idx) => {
                                    return (
                                        <tr
                                            key={idx}
                                            className="w-full"
                                        >
                                            <td className="mt-2 p-4 text-xs font-semibold text-[#11192a]">{cell.item}</td>
                                            <td className="mt-2 p-4 text-xs font-semibold text-[#11192a]">{cell.description}</td>
                                            <td className="mt-2 p-4 text-xs font-semibold text-[#11192a]">{cell.unitPrice}</td>
                                            <td className="mt-2 text-center text-xs font-semibold text-[#11192a]">{cell.Quantity}</td>
                                            <td className="mt-2 p-4 text-xs font-semibold text-[#11192a]">{cell.amount}</td>
                                            <td className="mt-2 p-4 text-xs font-semibold text-[#11192a]">{cell.taxRate}</td>
                                            <td className="mt-2 p-4 text-xs font-semibold text-[#11192a]">{cell.taxAmount}</td>
                                            <td className="mt-2 p-4 text-xs font-semibold text-[#11192a]">{cell.totalPrice}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div> */}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DashboardPage;
