import { forwardRef } from "react";
import { NavLink } from "react-router-dom";

import { navbarLinks } from "@/constants";
import { navbarLinksTwo } from "@/constants";


import addIcon from "@/assets/svgs/add-square.svg";
import jumiaIcon from "@/assets/svgs/jumia.svg";

import { cn } from "@/utils/cn";

import PropTypes from "prop-types";

export const Sidebar = forwardRef(({ collapsed }, ref) => {
    return (
        <aside
            ref={ref}
            className={cn(
                "fixed z-[100] flex h-full w-[340px] flex-col overflow-x-hidden   px-5 [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700 dark:bg-slate-900",
                collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
                collapsed ? "max-md:-left-full" : "max-md:left-0",
            )}
        >
            <div className="flex-col  py-3 justify-between bg-white px-4 shadow-md transition-colors mt-6 rounded-[10px]">
                <div className=" flex justify-between w-full border-b-[1px] border-[#E5E7EB] pb-2">
                    <div className=" text-black font-normal text-[12px] ">Your Store(s)</div>
                
                <div className="flex gap-1"><img src={addIcon} alt="Analytics Icon" className=" flex-shrink-0   w-4"  />
                
                <div className=" text-[#252D3C]  text-[12px] text-center flex justify-center items-center">Add store</div></div>
               </div>

                <div className=" flex justify-between w-full  py-2">

                <div className="flex gap-1 justify-center items-center"><img src={jumiaIcon } alt="jumia" className=" flex-shrink-0   w-8 h-8"  /> 
                <div className=" text-[#252D3C]  text-[14px] text-center flex justify-center items-center">Jumia</div></div>
                    <div className=" text-black font-bold text-[20px] ">...</div>
                
                
               
                </div>

                {/* button section */}

                <div className=" flex w-full mt-4 "><button className=" justify-center items-center bg-[#EBECEE] py-2 px-4 w-full rounded-md text-[14px]">View Shop</button></div>


                
         
                {/* {!collapsed && <p className="text-lg font-medium text-slate-900 transition-colors dark:text-slate-50">Logoipsum</p>} */}
            </div>
            <div className="bg [scrollbar-width:_thin]-[ bg bg bg- bg- bg-; bg pbg-inherit bg-[ bg- border-ra flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden rounded-[7px] bg-[#F5E8E9] px-2 py-3 mt-4" >
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

<img src={link.icon} alt="Analytics Icon" className=" flex-shrink-0   w-4"  />
                                {!collapsed && <p className="whitespace-nowrap">{link.label}</p>}
                            </NavLink>
                        ))}
                    </nav>
                ))}
            </div>



            <div className="bg [scrollbar-width:_thin]-[ bg bg bg- bg- bg-; bg pbg-inherit bg-[ bg- border-ra flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden rounded-[7px] bg-[#F5E8E9] px-2 py-3 mt-5">
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

<img src={link.icon} alt="analy con" className=" flex-shrink-0 w-4"  />
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
