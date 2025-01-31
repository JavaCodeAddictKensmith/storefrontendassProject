import React from "react";
import documentTextIcon from "@/assets/svgs/document-text.svg";

import globalIcon from "@/assets/svgs/global.svg";

import tickSqaureIcon from "@/assets/svgs/tick-square.svg";
import calenderIcon from "@/assets/svgs/calendar-2.svg";
import arrow3Icon from "@/assets/svgs/arrow-3.svg";
import googleIcon from "@/assets/svgs/googleblue.svg";
import faceBookIcon from "@/assets/svgs/facebookicon.svg";
import instagramIcon from "@/assets/svgs/instagramicon.svg";
import twitterIcon from "@/assets/svgs/twitter.svg";
import PropTypes from "prop-types";

const Card = ({ id, title, topAmount, data }) => {
    return (
        <div>
            {" "}
            <div className="min-h-[240px] rounded-md border border-gray-300 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <img
                        src={documentTextIcon}
                        alt="Analytics Icon"
                        className="w-4"
                    />
                </div>

                <p className={`${title === "Top Selling Products" ? "hidden" : "mt-2 text-3xl font-bold"}`}>{topAmount}-</p>

                {/* main box and body */}

                <div className="">
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
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* main body stops here */}
            </div>
        </div>
    );
};

export default Card;
