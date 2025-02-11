import React, { useState } from "react";
import documentTextIcon from "@/assets/svgs/document-text.svg";

import googleIcon from "@/assets/svgs/googleblue.svg";
import faceBookIcon from "@/assets/svgs/facebookicon.svg";
import instagramIcon from "@/assets/svgs/instagramicon.svg";
import twitterIcon from "@/assets/svgs/twitter.svg";
import freshLemon from "@/assets/svgs/freshlemonfruit.svg";
import baristardrink from "@/assets/svgs/baristardrink.svg";
import waterrose from "@/assets/svgs/waterrose.svg";
import freshfarmspag from "@/assets/svgs/freshfarmspag.svg";
import Canada from "@/assets/svgs/Canadaflags.svg";
import Aust from "@/assets/svgs/Austrflags.svg";
import nig from "@/assets/svgs/nigeriaflags.svg";
import Usaflag from "@/assets/svgs/Usaflags.svg";
import verasp from "@/assets/svgs/VeresPannaPerson.svg";
import Takacsp from "@/assets/svgs/TakacsBiankaPerson.svg";
import MiksaFruzsinaPerson from "@/assets/svgs/MiksaFruzsinaPerson.svg";

// MiksaFruzsinaPerson

const Card = ({ id, title, topAmount, data, setActiveTab, description, commerceSection }) => {
    //fIRST tyPE
    const CardWithAnyIconBody = () => (
        <div
            className=""
            key={id}
        >
            <div className="mt-3 w-full overflow-x-auto pb-4">
                <table className="w-full overflow-x-auto">
                    <thead className="bg-subtleGray w-full">
                        <tr className="bg-unusualGray w-full">
                            {data?.headers?.map((item) => (
                                <td
                                    className="text-xs font-semibold text-[#11192a]"
                                    key={item.id}
                                >
                                    {item.text}
                                </td>
                            ))}
                        </tr>
                    </thead>

                    <tbody className=" ">
                        {data.rows.map((cell, idx) => {
                            return (
                                <>
                                    {title === "Top Selling Products" ? (
                                        <tr
                                            key={idx}
                                            className="w-full items-start justify-start py-3"
                                        >
                                            <td className="mt-2 h-4 items-center gap-2 border-t-[1px] py-2 text-xs font-medium text-[#344054]">
                                                <div className="flex gap-2">
                                                    {" "}
                                                    {cell.name === "Fresh Lemon Fruit" ? (
                                                        <img
                                                            src={freshLemon}
                                                            alt="lemmon"
                                                            className="h-5 w-5"
                                                        />
                                                    ) : cell.name === "Barista Drink Latte Iit" ? (
                                                        <img
                                                            src={baristardrink}
                                                            alt="barista"
                                                            className="h-5 w-5"
                                                        />
                                                    ) : cell.name === "Essential Waitrose D" ? (
                                                        <img
                                                            src={waterrose}
                                                            alt="waterrose"
                                                            className="h-5 w-5"
                                                        />
                                                    ) : (
                                                        <img
                                                            src={freshfarmspag}
                                                            alt="freshfarmspag"
                                                            className="h-5 w-5"
                                                        />
                                                    )}
                                                    {cell.name}
                                                </div>
                                            </td>
                                            <td className="mt-2 items-center border-t-[1px] py-2 text-xs font-medium text-[#344054]">{cell.sku}</td>
                                            <td className="mt-2 border-t-[1px] py-2 text-xs font-medium text-[#344054]">{cell.qty}</td>
                                            {/* <td className="mt-2 border-t-[1px] py-1.5 text-xs font-medium text-[#344054]">{cell.revenue}</td> */}
                                        </tr>
                                    ) : title === "Sessions By Location" ? (
                                        <tr
                                            key={idx}
                                            className="w-full items-start justify-start"
                                        >
                                            <td className="mt-2 h-4 items-center gap-2 border-t-[1px] py-2 text-xs font-medium text-[#344054]">
                                                <div className="flex gap-2">
                                                    {" "}
                                                    {cell.name === "Australia" ? (
                                                        <img
                                                            src={Aust}
                                                            alt="australia"
                                                            className="w-4"
                                                        />
                                                    ) : cell.name === "Nigeria" ? (
                                                        <img
                                                            src={nig}
                                                            alt="Nig"
                                                            className="w-4"
                                                        />
                                                    ) : cell.name === "Canada" ? (
                                                        <img
                                                            src={Canada}
                                                            alt="canada"
                                                            className="w-4"
                                                        />
                                                    ) : (
                                                        <img
                                                            src={Usaflag}
                                                            alt="usa"
                                                            className="w-4"
                                                        />
                                                    )}
                                                    {cell.name}
                                                </div>
                                            </td>
                                            <td className="mt-2 items-center border-t-[1px] py-2 text-xs font-medium text-[#344054]">
                                                {cell.unique}
                                            </td>
                                            <td className="mt-2 border-t-[1px] py-2 text-xs font-medium text-[#344054]">{cell.sessions}</td>
                                            {/* <td className="mt-2 border-t-[1px] py-1.5 text-xs font-medium text-[#344054]">{cell.revenue}</td> */}
                                        </tr>
                                    ) : title === "Sessions By Social Source" ? (
                                        <tr
                                            key={idx}
                                            className="w-full items-start justify-start"
                                        >
                                            <td className="mt-2 h-4 items-center gap-2 border-t-[1px] py-2 text-xs font-medium text-[#344054]">
                                                <div className="flex gap-2">
                                                    {" "}
                                                    {cell.name === "Facebook" ? (
                                                        <img
                                                            src={faceBookIcon}
                                                            alt="facebook"
                                                            className="w-4"
                                                        />
                                                    ) : cell.name === "Instagram" ? (
                                                        <img
                                                            src={instagramIcon}
                                                            alt="instagram"
                                                            className="w-4"
                                                        />
                                                    ) : cell.name === "Twitter" ? (
                                                        <img
                                                            src={twitterIcon}
                                                            alt="twitter"
                                                            className="w-4"
                                                        />
                                                    ) : (
                                                        <img
                                                            src={googleIcon}
                                                            alt="google"
                                                            className="w-4"
                                                        />
                                                    )}
                                                    {cell.name}
                                                </div>
                                            </td>
                                            <td className="mt-2 items-center border-t-[1px] py-2 text-xs font-medium text-[#344054]">
                                                {cell.unique}
                                            </td>
                                            <td className="mt-2 border-t-[1px] py-2 text-xs font-medium text-[#344054]">{cell.sessions}</td>
                                        </tr>
                                    ) : (
                                        <tr
                                            key={idx}
                                            className="w-full items-start justify-start"
                                        >
                                            <td className="mt-2 h-4 items-center gap-2 border-t-[1px] py-2 text-xs font-medium text-[#344054]">
                                                <div className="flex gap-2">
                                                    {" "}
                                                    {cell.name === "Facebook" ? (
                                                        <img
                                                            src={faceBookIcon}
                                                            alt="facebook"
                                                            className="w-4"
                                                        />
                                                    ) : cell.name === "Instagram" ? (
                                                        <img
                                                            src={instagramIcon}
                                                            alt="instagram"
                                                            className="w-4"
                                                        />
                                                    ) : cell.name === "Twitter" ? (
                                                        <img
                                                            src={twitterIcon}
                                                            alt="twitter"
                                                            className="w-4"
                                                        />
                                                    ) : (
                                                        <img
                                                            src={googleIcon}
                                                            alt="google"
                                                            className="w-4"
                                                        />
                                                    )}
                                                    {cell.name}
                                                </div>
                                            </td>
                                            <td className="mt-2 items-center border-t-[1px] py-2 text-xs font-medium text-[#344054]">{cell.imp}</td>
                                            <td className="mt-2 border-t-[1px] py-2 text-xs font-medium text-[#344054]">{cell.clicks}</td>
                                            <td className="mt-2 border-t-[1px] py-1.5 text-xs font-medium text-[#344054]">{cell.revenue}</td>
                                        </tr>
                                    )}
                                </>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );

    // second type

    /*
      commerceSection: {
                values: { firstValue: "N10", secondValue: "N5", thirdValue: "N0" },
                intervals: { first: "12:00AM", second: "5:00AM", third: "10:00AM", fourth: "3:00PM", fifth: "8:00PM" },
                period: { startDate: "Aug 19, 2024", endDate: "Aug 18, 2024" },
            },




    */

    const CardWithLinesBody = () => (
        <div key={id}>
            {" "}
            <div className="mt-3 flex items-center gap-2">
                <div>{commerceSection?.values?.firstValue}</div>
                <div className="h-[2px] flex-1 bg-gray-300 line-through"></div>
            </div>
            <div className="mt-3 flex items-center gap-2">
                <div>{commerceSection?.values?.secondValue}</div>
                <div className="h-[2px] flex-1 bg-gray-300 line-through"></div>
            </div>
            <div className="mt-3 flex items-center gap-2">
                <div>{commerceSection?.values?.thirdValue}</div>
                {/* <div className="flex flex-1 items-center justify-between">
                                <div className="w-full border-t-2 border-dashed border-red-700"></div>
                            </div> */}

                {title !== "Returning Customer Rate" ? (
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
                ) : (
                    <div className="h-[2px] flex-1 bg-[#FBBF24] line-through"></div>
                )}
            </div>
            <div className="mt-1 flex items-center gap-2">
                {/* <div>N10</div> */}
                <div className="t flex flex-wrap justify-between gap-4 pl-7 text-[12px] text-[#777F8C]">
                    <span className="text-[12px]">{commerceSection?.intervals?.first}</span>
                    <span className="text-[12px]">{commerceSection?.intervals?.second} </span>
                    <span className="text-[12px]">{commerceSection?.intervals?.third}</span>
                    <span className="text-[12px]">{commerceSection?.intervals?.fourth}</span>
                    <span className="text-[12px]">{commerceSection?.intervals?.fifth}</span>
                    {/* {"12:00AM  5:00AM  10:00AM  3:00PM 8:00PM "} */}
                </div>
            </div>
            <div className="mt-7 flex justify-end gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                    {title !== "Returning Customer Rate" ? (
                        <div className="h-[2px] w-4 bg-[#AE4551]"></div>
                    ) : (
                        <div className="h-[2px] w-4 bg-[#158C7F]"></div>
                    )}

                    <span>{commerceSection?.period?.startDate}</span>
                </div>
                <div className="flex items-center gap-1">
                    {title !== "Returning Customer Rate" ? (
                        <div className="w-4 border-t-2 border-dashed border-red-700 opacity-50"></div>
                    ) : (
                        <div className="h-[2px] w-4 bg-[#FBBF24]"></div>
                    )}
                    <span>{commerceSection?.period?.endDate}</span>
                </div>
            </div>
        </div>
    );
    // third type

    const CardWithPersonIconBody = () => (
        <div
            className=""
            key={id}
        >
            <div className="mt-3 w-full overflow-x-auto pb-4">
                <table className="w-full overflow-x-auto">
                    <thead className="bg-subtleGray w-full">
                        <tr className="bg-unusualGray w-full">
                            {data?.headers?.map((item) => (
                                <td
                                    className="text-xs font-semibold text-[#11192a]"
                                    key={item.id}
                                >
                                    {item.text}
                                </td>
                            ))}
                        </tr>
                    </thead>

                    <tbody className=" ">
                        {data.rows.map((cell, idx) => {
                            return (
                                <>
                                    <tr
                                        key={idx}
                                        className="w-full items-start justify-start"
                                    >
                                        <td className="mt-2 h-4 items-center gap-2 border-t-[1px] py-2 text-xs font-medium text-[#344054]">
                                            <div className="flex gap-2">
                                                {" "}
                                                <div className="items-center justify-center">
                                                    {" "}
                                                    {cell.name === "Veres Panna" ? (
                                                        <img
                                                            src={verasp}
                                                            alt="verasp"
                                                            className="w-4"
                                                        />
                                                    ) : cell.name === "Takács Bianka" ? (
                                                        <img
                                                            src={Takacsp}
                                                            alt="Takacsp"
                                                            className="w-4"
                                                        />
                                                    ) : (
                                                        <img
                                                            src={MiksaFruzsinaPerson}
                                                            alt="MiksaFruzsinaPerson"
                                                            className="w-4"
                                                        />
                                                    )}
                                                </div>
                                                <div className="flex-col items-center justify-center">
                                                    <div>{cell.name}</div>
                                                    {/* <br /> */}
                                                    <dive className="text-[10px]">{cell.purchases}</dive>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="mt-2 items-center border-t-[1px] py-2 text-xs font-medium text-[#344054]">{cell.cltv}</td>

                                        <td className="mt-2 border-t-[1px] py-1.5 text-xs font-medium text-[#344054]">{cell.revenue}</td>
                                    </tr>
                                </>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const CardWithNoTableHeaderBody = () => (
        <div
            className=""
            key={id}
        >
            <div className="mt-3 w-full overflow-x-auto pb-4">
                <table className="w-full overflow-x-auto">
                    <tbody className=" ">
                        {data.rows.map((cell, idx) => {
                            return (
                                <>
                                    <tr
                                        key={idx}
                                        className="w-full items-start justify-start"
                                    >
                                        <td className="mt-2 h-4 items-center gap-2 border-b-[1px] py-2 text-xs font-medium text-[#344054]">
                                            <div className="flex gap-2">
                                                {" "}
                                                <div className="items-center justify-center"> </div>
                                                <div className="flex-col items-center justify-center">
                                                    <div>{cell.name}</div>
                                                    {/* <br /> */}
                                                    <dive className="text-[10px]">{cell.sessions}</dive>
                                                </div>
                                            </div>
                                        </td>
                                        {/* <td className="mt-2 items-center border-t-[1px] py-2 text-xs font-medium text-[#344054]">{cell.cltv}</td> */}

                                        <td className="mt-2 border-b-[1px] py-1.5 text-xs font-medium text-[#344054]">{cell.perc}</td>
                                    </tr>
                                </>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const CardWithNoMediaIconBody = () => (
        <div
            className=""
            key={id}
        >
            <div className="mt-3 w-full overflow-x-auto pb-4">
                <table className="w-full overflow-x-auto">
                    <thead className="bg-subtleGray w-full">
                        <tr className="bg-unusualGray w-full">
                            {data?.headers?.map((item) => (
                                <td
                                    className="text-xs font-semibold text-[#11192a]"
                                    key={item.id}
                                >
                                    {item.text}
                                </td>
                            ))}
                        </tr>
                    </thead>

                    <tbody className=" ">
                        {data.rows.map((cell, idx) => {
                            return (
                                <>
                                    <tr
                                        key={idx}
                                        className="w-full items-start justify-start"
                                    >
                                        <td className="mt-2 h-4 items-center gap-2 border-t-[1px] py-2 text-xs font-medium text-[#344054]">
                                            <div className="flex gap-2"> {cell.name}</div>
                                        </td>
                                        <td className="mt-2 items-center border-t-[1px] py-2 text-xs font-medium text-[#344054]">{cell.unique}</td>
                                        <td className="mt-2 border-t-[1px] py-2 text-xs font-medium text-[#344054]">{cell.sessions}</td>
                                    </tr>
                                </>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const ReturnBodyTye = () => {
        switch (title) {
            case "Sales By Social Source":
                return <CardWithAnyIconBody />;
            case "Top Selling Products":
                return <CardWithAnyIconBody />;
            case "Sales By Traffic Source":
                return <CardWithAnyIconBody />;
            case "Sessions By Location":
                return <CardWithAnyIconBody />;
            case "Sessions By Social Source":
                return <CardWithAnyIconBody />;
            case "Total Sales":
                return <CardWithLinesBody />;
            case "Store Sessions":
                return <CardWithLinesBody />;
            case "Total Orders":
                return <CardWithLinesBody />;

            case "Average Other Volume":
                return <CardWithLinesBody />;
            case "Fulfilled Orders Over Time":
                return <CardWithLinesBody />;
            case "Marketing Sales":
                return <CardWithLinesBody />;

            // Customer Lifetime Value (CLTV)
            case "Returning Customer Rate":
                return <CardWithLinesBody />;
            case "Customer Lifetime Value (CLTV)":
                return <CardWithPersonIconBody />;
            case "Conversion Rate":
                return <CardWithNoTableHeaderBody />;

            case "Sessions By Traffic Source":
                return <CardWithNoMediaIconBody />;

            default:
                return null;
        }
    };

    const [swap, setSwap] = useState(false);

    return (
        <div>
            {" "}
            <div
                className="relative h-[290px] rounded-md border border-gray-300 bg-white px-6 py-4 shadow-sm"
                onMouseOver={() => setSwap(true)}
                onMouseLeave={() => setSwap(false)}
            >
                {swap && (
                    <div
                        onClick={() => setActiveTab("records-history")}
                        className={`group-hover:duration-600 lg:w-[300px bg-gray-300/14 absolute left-4 top-3 flex-col flex-wrap gap-1 rounded-lg border-[0.2px] border-gray-300 bg-[#FAFAFA] px-3 py-2 shadow-lg duration-500 group-hover:-bottom-0 md:w-[300px]`}
                    >
                        <span className={`text-black ${swap ? "mb-0" : "mb-16"} text-base font-medium`}>{title}</span>
                        {/* <span className="text-3xl font-bold text-gray-800">{title}</span> */}
                        <div className="font-sm flex flex-wrap text-sm text-gray-700"> {description}</div>

                        <div className="mt-5 flex w-full items-center justify-center border-t-[0.3px] border-gray-300 py-1">
                            {" "}
                            <div className="mt-1 pt-1 text-[13px] font-medium text-black">View Reports</div>
                        </div>
                    </div>
                )}
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <img
                        src={documentTextIcon}
                        alt="Analytics Icon"
                        className="w-4"
                    />
                </div>
                <p className={`${title === "Top Selling Products" ? "hidden" : "mt-2 text-xl font-bold"} mt-2 text-3xl font-bold`}>{topAmount} -</p>
                {/* main box and body */}
                {/* <CardWithAnyIconBody /> */}
                <ReturnBodyTye />
                {/* main body stops here */}
            </div>
        </div>
    );
};

export default Card;
