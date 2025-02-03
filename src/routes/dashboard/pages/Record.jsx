import { Search } from "lucide-react";

import arrow3Icon from "@/assets/svgs/arrow-3.svg";
import TransitionScale from "../../../layouts/TransitionScale";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchUserRecordDetails } from "../../../appstate/slices/transactionSlice";
import { useMemo, useState, useCallback } from "react";

const RecordHistory = () => {
    // const { theme } = useTheme();

    const dispatch = useDispatch();

    // Selecting state from Redux store
    const { data: userAccounts, loading: recordsLoading, error: recordsError } = useSelector((state) => state.transactions.userAccounts);

    // const { data: userAccounts, loading: userAccountsLoading, error: userAccountsError } = useSelector((state) => state.transactions.userAccounts);

    useEffect(() => {
        dispatch(fetchUserRecordDetails());
        // dispatch(fetchUserAccountDetails());
    }, [dispatch]);

    const records = useMemo(() => userAccounts, [userAccounts]);
    // console.log("===userAccountsrecord==", userAccounts);

    const [searchValue, setSearchValue] = useState(""); // To store the search input value
    const [activeFilter, setActiveFilter] = useState("");
    const [filteredData, setFilteredData] = useState(userAccounts || []); // To store the filtered data
    const data = useMemo(() => userAccounts || [], [userAccounts]);

    useEffect(() => {
        const filterValue = activeFilter || "";

        if (filterValue === "") {
            setFilteredData(data); // Show all items
        } else if (filterValue === "Acquisition") {
            setFilteredData(data.filter((bid) => bid.category === "Acquisition"));
        } else if (filterValue === "Behavior") {
            setFilteredData(data.filter((bid) => bid.category === "Behavior"));
        } else if (filterValue === "Customers") {
            setFilteredData(data.filter((bid) => bid.category === "Customers"));
        } else if (filterValue === "Finance") {
            setFilteredData(data.filter((bid) => bid.category === "Finance"));
        } else if (filterValue === "Fraud") {
            setFilteredData(data.filter((bid) => bid.category === "Fraud"));
        } else if (filterValue === "Inventory") {
            setFilteredData(data.filter((bid) => bid.category === "Inventory"));
        } else if (filterValue === "Marketing") {
            setFilteredData(data.filter((bid) => bid.category === "Marketing"));
        } else if (filterValue === "Orders") {
            setFilteredData(data.filter((bid) => bid.category === "Orders"));
        } else if (filterValue === "Profit Margin") {
            setFilteredData(data.filter((bid) => bid.category === "Profit Margin"));
        } else if (filterValue === "Sales") {
            setFilteredData(data.filter((bid) => bid.category === "Sales"));
        } else if (filterValue === "Marketing Sales") {
            setFilteredData(data.filter((bid) => bid.category === "Marketing Sales"));
        }
    }, [activeFilter, data]);

    useEffect(() => {
        setFilteredData(userAccounts || []); // Reset filtered data when new data is fetched
    }, [userAccounts]);

    const filterData = useCallback(() => {
        let updatedData = [...data];

        // Apply filter by type
        if (activeFilter) {
            updatedData = updatedData.filter((item) => item.category === activeFilter);
        }

        // Apply search filter
        if (searchValue) {
            updatedData = updatedData.filter((item) => {
                const lowerSearch = searchValue.toLowerCase();
                return (
                    item.name.toLowerCase().includes(lowerSearch) ||
                    item.category.toLowerCase().includes(lowerSearch) ||
                    item.lastView.toLowerCase().includes(lowerSearch)
                );
            });
        }

        setFilteredData(updatedData);
    }, [data, activeFilter, searchValue, setFilteredData]);

    useEffect(() => {
        filterData();
    }, [filterData]);

    // Synchronize data when filters or data chang

    // Synchronize data when filters or data change

    const handleFilterChangeOne = (e) => {
        setActiveFilter(e.target.value);
    };

    const handleSearchChangeOne = (e) => {
        setSearchValue(e.target.value);
    };

    if (recordsLoading) return <p>Loading...</p>;
    if (recordsError) return <p>Error occure</p>;

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
                                value={searchValue}
                                onChange={handleSearchChangeOne}
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
                                onChange={handleFilterChangeOne}
                                value={activeFilter}
                            >
                                <option
                                    value=""
                                    disabled
                                    selected
                                >
                                    Filter by{" "}
                                </option>
                                <option
                                    value=""
                                    selected
                                >
                                    All
                                </option>

                                <option value={"Acquisition"}>Acquisition</option>
                                <option value="Behavior">Behavior</option>
                                <option value="Customers">Customers</option>
                                <option value="Finance">Finance</option>
                                <option value="Fraud">Fraud</option>
                                <option value="Inventory">Inventory</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Orders">Orders</option>
                                <option value="Profit Margin">Profit Margin</option>
                                <option value="Sales">Sales</option>
                            </select>
                        </div>
                    </div>

                    {/* second layer */}
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex flex-col gap-y-2 p-2 transition-colors">
                            <div className="flex gap-2">
                                <div className="flex items-center justify-center text-center text-[12px] text-[#252D3C]">
                                    {records.length} results
                                </div>
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
                                {filteredData?.map((cell, idx) => {
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
                </div>
            </div>
        </TransitionScale>
    );
};

export default RecordHistory;
