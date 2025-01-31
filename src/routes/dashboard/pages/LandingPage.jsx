import { Search } from "lucide-react";

import { useTheme } from "@/hooks/use-theme";

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
import Card from "../../../layouts/components/Card";

import { NavLink, Link } from "react-router-dom";

const LandingPage = () => {
    // const { theme } = useTheme();

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
            {/* Next Section */}

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
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
