import { useState } from "react";

import { Bell, ChevronsLeft, Moon, Search, Sun } from "lucide-react";

import profileImg from "@/assets/profile-image.jpg";
import topLogoImg from "@/assets/svgs/LOGO.svg";
import topbell from "@/assets/svgs/top-bell.svg";
import topPerson from "@/assets/svgs/navbarperson.svg";
import toparrowdown from "@/assets/svgs/arrow-down.svg";
import searchNav from "@/assets/svgs/search-nav.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../appstate/slices/authSlice";

// search-nav.

import PropTypes from "prop-types";

export const Header = ({ collapsed, setCollapsed, isDesktop }) => {
    const [profileDropdown, setProfileDropdown] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDropdownClick = () => {
        setProfileDropdown(!profileDropdown);
    };

    return (
        <header className="relative z-10 flex h-[80px] items-center justify-between bg-[#171717] px-4 shadow-md transition-colors dark:bg-slate-900">
            <div className="flex items-center gap-x-3">
                {!isDesktop && (
                    <button
                        className="text-white"
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        {" "}
                        <ChevronsLeft className={collapsed && "rotate-180"} />
                    </button>
                )}

                {isDesktop && (
                    <button>
                        <img
                            src={topLogoImg}
                            alt="logo"
                            className="h-17 w-16"
                            width={90}
                        />
                    </button>
                )}
            </div>

            <div className="flex w-[30%] items-center justify-center gap-x-3">
                {" "}
                <div className="input">
                    {/* <Search
                        size={20}
                        className="text-slate-300"
                    /> */}
                    <img
                        src={searchNav}
                        alt="bell image"
                        className="w-6"
                        width={90}
                    />
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search"
                        className="font-poppins w-full bg-transparent text-white outline-0 placeholder:text-slate-300 dark:text-slate-50"
                    />
                </div>
            </div>
            <div className="flex items-center gap-x-7">
                <button className="">
                    {" "}
                    <img
                        src={topbell}
                        alt="bell image"
                        className="w-9"
                        width={90}
                    />
                </button>
                <div className="flex gap-2">
                    {" "}
                    <button className="size-10 overflow-hidden rounded-full">
                        <img
                            src={topPerson}
                            alt="profile image"
                            className="size-full object-cover"
                        />
                    </button>
                    <button
                        className="size-10 overflow-hidden rounded-full"
                        onClick={handleDropdownClick}
                    >
                        <img
                            src={toparrowdown}
                            alt="arrow down"
                            className="size-full object-cover"
                        />
                    </button>
                    {profileDropdown && (
                        <div className="border-[#D1D6DD][ border-[0.7px absolute top-[60px] z-[1] ml-[-10px] w-[136px] rounded-[4px] bg-white text-center text-white transition">
                            <div
                                className="flex items-center rounded-[4px] border-b-[1px] border-b-slate-300 bg-[#9A1725] p-[15px]"
                                onClick={() => {
                                    dispatch(logout());
                                }}
                            >
                                {/* <img
                                    src={profileIcon}
                                    alt=""
                                /> */}
                                <button className="ml-2 bg-[#9A1725] text-[14px] font-bold">Logout</button>
                            </div>

                            <div className={`flex items-center rounded-[4px] p-[15px] hover:bg-[#9A1725] hover:text-white`}>
                                <h4 className="ml-2 text-[14px] font-bold text-black hover:text-white">Support</h4>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    collapsed: PropTypes.bool,
    setCollapsed: PropTypes.func,
};
