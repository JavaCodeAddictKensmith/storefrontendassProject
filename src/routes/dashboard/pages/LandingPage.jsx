import { Search } from "lucide-react";

import arrow3Icon from "@/assets/svgs/arrow-3.svg";

import Card from "../../../layouts/components/Card";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useCallback, useState } from "react";
// import { fetchSalesOverview } from "../../../appstate/api/dashboard";
// import { fetchAccounTransactions } from "../../../appstate/slices/transactionSlice";
import { fetchAccountTransactions } from "../../../appstate/slices/transactionSlice";

const LandingPage = ({ setActiveTab }) => {
    // const { theme } = useTheme();
    const dispatch = useDispatch();

    // Selecting state from Redux store
    const { data: transactions, loading: transactionsLoading, error: transactionsError } = useSelector((state) => state.transactions.transactions);

    // const { data: userAccounts, loading: userAccountsLoading, error: userAccountsError } = useSelector((state) => state.transactions.userAccounts);

    useEffect(() => {
        dispatch(fetchAccountTransactions());
        // dispatch(fetchUserAccountDetails());
    }, [dispatch]);

    const [searchValue, setSearchValue] = useState(""); // To store the search input value
    const [activeFilter, setActiveFilter] = useState("");
    const [filteredData, setFilteredData] = useState(transactions || []); // To store the filtered data
    const data = useMemo(() => transactions || [], [transactions]);

    useEffect(() => {
        const filterValue = activeFilter || "";

        if (filterValue === "") {
            setFilteredData(data); // Show all items
        } else if (filterValue === "Sales By Social Source") {
            setFilteredData(data.filter((bid) => bid.title === "  Top Selling Products"));
        } else if (filterValue === "Top Selling Products") {
            setFilteredData(data.filter((bid) => bid.title === "Top Selling Products"));
        } else if (filterValue === "Sales By Traffic Source") {
            setFilteredData(data.filter((bid) => bid.title === "Sales By Traffic Source"));
        } else if (filterValue === "Sessions By Location") {
            setFilteredData(data.filter((bid) => bid.title === "Sessions By Location"));
        } else if (filterValue === "Sessions By Social Source") {
            setFilteredData(data.filter((bid) => bid.title === "Sessions By Social Source"));
        } else if (filterValue === "Total Sales") {
            setFilteredData(data.filter((bid) => bid.title === "Total Sales"));
        } else if (filterValue === "Store Sessions") {
            setFilteredData(data.filter((bid) => bid.title === "Store Sessions"));
        } else if (filterValue === "Total Orders") {
            setFilteredData(data.filter((bid) => bid.title === "Total Order"));
        } else if (filterValue === "Average Other Volume") {
            setFilteredData(data.filter((bid) => bid.title === "Average Other Volume"));
        } else if (filterValue === "Fulfilled Orders Over Time") {
            setFilteredData(data.filter((bid) => bid.title === "Fulfilled Orders Over Time"));
        } else if (filterValue === "Marketing Sales") {
            setFilteredData(data.filter((bid) => bid.title === "Marketing Sales"));
        } else if (filterValue === "Returning Customer Rate") {
            setFilteredData(data.filter((bid) => bid.title === "Returning Customer Rate"));
        } else if (filterValue === "Customer Lifetime Value (CLTV)") {
            setFilteredData(data.filter((bid) => bid.title === "Customer Lifetime Value (CLTV)"));
        } else if (filterValue === "Conversion Rate") {
            setFilteredData(data.filter((bid) => bid.title === "Conversion Rate"));
        } else if (filterValue === "Sessions By Traffic Source") {
            setFilteredData(data.filter((bid) => bid.title === "Sessions By Traffic Source"));
        }
    }, [activeFilter, data]);

    useEffect(() => {
        setFilteredData(transactions || []); // Reset filtered data when new data is fetched
    }, [transactions]);

    const filterData = useCallback(() => {
        let updatedData = [...data];

        // Apply filter by type
        if (activeFilter) {
            updatedData = updatedData.filter((item) => item.title === activeFilter);
        }

        // Apply search filter
        if (searchValue) {
            updatedData = updatedData.filter((item) => {
                const lowerSearch = searchValue.toLowerCase();
                return (
                    item.title.toLowerCase().includes(lowerSearch) ||
                    item.topAmount.toLowerCase().includes(lowerSearch) ||
                    item.description.toLowerCase().includes(lowerSearch)
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
    useEffect(() => {
        filterData();
    }, [filterData]);

    const handleFilterChangeOne = (e) => {
        setActiveFilter(e.target.value);
    };

    const handleSearchChangeOne = (e) => {
        setSearchValue(e.target.value);
    };

    // {
    //   page,
    //   pageSize,
    //   bulk,
    //   status,
    //   search,
    // }
    /*
  
  INVOICING, EARLY_PAYMENT_REQUEST, EARLY_PAYMENT_OFFERS, OPEN_MARKET, DIRECT_FUNDING, PFP

  */
    if (transactionsLoading) return <p>Loading...</p>;
    if (transactionsError) return <p>Error: {transactionsError}</p>;

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

                            <option value={"Sales By Social Source"}>Sales By Social Source</option>
                            <option value="Top Selling Products">Top Selling Products</option>
                            <option value="Sales By Traffic Source">Sales By Traffic Source</option>
                            <option value="Sessions By Location">Sessions By Location</option>
                            <option value="Sessions By Social Source">Sessions By Social Source</option>
                            <option value="Total Sales">Total Sales</option>
                            <option value="Store Sessions">Store Sessions</option>
                            <option value="Total Orders">Total Orders</option>
                            <option value="Average Other Volume">Average Other Volume</option>
                            <option value="Fulfilled Orders Over Time">Fulfilled Orders Over Time</option>
                            <option value="Marketing Sales">Marketing Sales</option>
                            <option value="Returning Customer Rate">Returning Customer Rate</option>
                            <option value="Customer Lifetime Value (CLTV)">Customer Lifetime Value (CLTV)</option>
                            <option value="Conversion Rate">Conversion Rate</option>
                            <option value="Sessions By Traffic Source">Sessions By Traffic Source</option>
                        </select>
                    </div>
                </div>

                {/* second layer */}
                <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col gap-y-2 p-2 transition-colors">
                        <div className="flex gap-2">
                            <div className="flex items-center justify-center text-center text-[12px] text-[#252D3C]">
                                {transactions?.length} results
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <StoreSessionsCard /> */}
            {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"> */}
            <div className="container mx-auto mt-5">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Second Card */}

                    {filteredData?.map((cell, idx) => (
                        <Card
                            id={cell.id}
                            key={cell.id}
                            title={cell.title}
                            topAmount={cell.topAmount}
                            data={cell.data}
                            description={cell.description}
                            setActiveTab={setActiveTab}
                            commerceSection={cell.commerceSection}
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
