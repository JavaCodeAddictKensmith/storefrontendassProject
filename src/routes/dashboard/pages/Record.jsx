import { Search } from "lucide-react";

import { useTheme } from "@/hooks/use-theme";

import { Footer } from "@/layouts/footer";

import documentTextIcon from "@/assets/svgs/document-text.svg";
import globalIcon from "@/assets/svgs/global.svg";

import tickSqaureIcon from "@/assets/svgs/tick-square.svg";
import calenderIcon from "@/assets/svgs/calendar-2.svg";
import arrow3Icon from "@/assets/svgs/arrow-3.svg";
import TransitionScale from "../../../layouts/TransitionScale";

const RecordHistory = ({ data }) => {
    // const { theme } = useTheme();

    return (
        <TransitionScale>
            {" "}
            <div className="flex min-h-lvh flex-col gap-y-4 rounded-md border border-gray-300 bg-white py-3 shadow-sm">
                {/* next search section */}

                <div className="flex w-full flex-wrap items-center justify-between gap-4 px-3">
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
                <div className="mt-2">
                    <div className="w-full overflow-x-auto pb-4">
                        <table className="w-full table-fixed border-collapse">
                            <thead className="w-full border-y bg-[#F9F9FA]">
                                <tr className="bg-unusualGray w-full">
                                    {/* {data?.headers?.map((item) => ( */}
                                    <td className="px-6 py-3 text-xs font-semibold text-[#11192a]">{"Name"}</td>
                                    <td className="px-6 text-xs font-semibold text-[#11192a]">{"Category"}</td>
                                    <td className="px-6 text-xs font-semibold text-[#11192a]">{"Last View"}</td>
                                    {/* // ))} */}
                                </tr>
                            </thead>

                            <tbody className="">
                                {data?.map((cell, idx) => {
                                    return (
                                        <>
                                            <tr
                                                key={idx}
                                                className="w-full items-start justify-start"
                                            >
                                                <td className="mt-2 h-4 items-center gap-2 border-t-[1px] px-6 py-2 text-[12px] font-medium text-[#344054]">
                                                    <div className="flex"> {cell.name}</div>
                                                </td>
                                                <td className="mt-2 h-4 items-center border-t-[1px] px-6 py-2 text-xs font-medium text-[#344054]">
                                                    {/* <div className="flex items-center"> */}{" "}
                                                    <button className="rounded-lg bg-[#EBEDEF] px-2 py-1 text-[12px]">{cell.category}</button>
                                                    {/* </div> */}
                                                </td>
                                                <td className="mt-2 border-t-[1px] px-6 py-2 text-[12px] font-medium text-[#344054]">
                                                    {cell.lastView}
                                                </td>
                                            </tr>
                                        </>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    {/* Second Card */}

                    {/* {dummydum.map((cell, idx) => (
                <Card
                    id={cell.id}
                    key={cell.id}
                    title={cell.title}
                    topAmount={cell.topAmount}
                    data={cell.data}
                />
            ))} */}

                    {/* third */}

                    {/* */}
                </div>
            </div>
        </TransitionScale>
    );
};

export default RecordHistory;
