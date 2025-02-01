import { forwardRef } from "react";
import { NavLink } from "react-router-dom";

import { navbarLinks } from "@/constants";
import { navbarLinksTwo } from "@/constants";

import addIcon from "@/assets/svgs/add-square.svg";
import jumiaIcon from "@/assets/svgs/jumia.svg";

import { cn } from "@/utils/cn";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const Sidebar = forwardRef(({ collapsed }, ref) => {
    const navigate = useNavigate();
    return (
        <aside
            ref={ref}
            className={cn(
                "fixed z-[100] flex h-full w-[340px] flex-col overflow-x-hidden px-5 [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700 dark:bg-slate-900",
                collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
                collapsed ? "max-md:-left-full" : "max-md:left-0",
            )}
        >
            <div className="mt-6 flex-col justify-between rounded-[10px] bg-white px-4 py-3 shadow-md transition-colors">
                <div className="flex w-full justify-between border-b-[1px] border-[#E5E7EB] pb-2">
                    <div className="text-[12px] font-normal text-black">Your Store(s)</div>

                    <div className="flex gap-1">
                        <img
                            src={addIcon}
                            alt="Analytics Icon"
                            className="w-4 flex-shrink-0"
                        />

                        <div className="flex items-center justify-center text-center text-[12px] text-[#252D3C]">Add store</div>
                    </div>
                </div>

                <div className="flex w-full justify-between py-2">
                    <div className="flex items-center justify-center gap-1">
                        <img
                            src={jumiaIcon}
                            alt="jumia"
                            className="h-8 w-8 flex-shrink-0"
                        />
                        <div className="flex items-center justify-center text-center text-[14px] text-[#252D3C]">Jumia</div>
                    </div>
                    <div className="text-[20px] font-bold text-black">...</div>
                </div>

                {/* button section */}

                <div
                    onClick={() => {
                        localStorage.removeItem("user");

                        navigate("/login");
                        localStorage.removeItem("user");
                    }}
                    className="mt-4 flex w-full"
                >
                    <button className="w-full items-center justify-center rounded-md bg-[#EBECEE] px-4 py-2 text-[14px]">View Shop</button>
                </div>

                {/* {!collapsed && <p className="text-lg font-medium text-slate-900 transition-colors dark:text-slate-50">Logoipsum</p>} */}
            </div>
            <div className="bg [scrollbar-width:_thin]-[ bg bg bg- bg- bg-; bg pbg-inherit bg-[ bg- border-ra mt-4 flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden rounded-[7px] bg-[#F5E8E9] px-2 py-3">
                {navbarLinks.map((navbarLink) => (
                    <nav
                        key={navbarLink.title}
                        className={cn("sidebar-group", collapsed && "md:items-center")}
                    >
                        <p className={cn("sidebar-group-title", collapsed && "md:w-[45px]")}>{navbarLink.title}</p>
                        {navbarLink.links.map((link) => (
                            <NavLink
                                key={link.label}
                                to={link.path}
                                className={cn("sidebar-item", collapsed && "md:w-[45px]")}
                            >
                                {/* <link.icon
                                    size={22}
                                    className="flex-shrink-0"
                                /> */}

                                <img
                                    src={link.icon}
                                    alt="Analytics Icon"
                                    className="w-4 flex-shrink-0"
                                />
                                {!collapsed && <p className="whitespace-nowrap">{link.label}</p>}
                            </NavLink>
                        ))}
                    </nav>
                ))}
            </div>

            <div className="bg [scrollbar-width:_thin]-[ bg bg bg- bg- bg-; bg pbg-inherit bg-[ bg- border-ra mt-5 flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden rounded-[7px] bg-[#F5E8E9] px-2 py-3">
                {navbarLinksTwo.map((navbarLink) => (
                    <nav
                        key={navbarLink.title}
                        className={cn("sidebar-group", collapsed && "md:items-center")}
                    >
                        <p className={cn("sidebar-group-title", collapsed && "md:w-[45px]")}>{navbarLink.title}</p>
                        {navbarLink.links.map((link) => (
                            <NavLink
                                key={link.label}
                                to={link.path}
                                className={cn("sidebar-item", collapsed && "md:w-[45px]")}
                            >
                                {/* <link.icon
                                    size={22}
                                    className="flex-shrink-0"
                                /> */}

                                <img
                                    src={link.icon}
                                    alt="analy con"
                                    className="w-4 flex-shrink-0"
                                />
                                {!collapsed && <p className="whitespace-nowrap">{link.label}</p>}
                            </NavLink>
                        ))}
                    </nav>
                ))}
            </div>
        </aside>
    );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
    collapsed: PropTypes.bool,
};
