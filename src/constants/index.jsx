import ProfileImage from "@/assets/profile-image.jpg";
import ProductImage from "@/assets/product-image.jpg";

import analyticsIcon from "@/assets/svgs/analytics.svg";
import ordersIcon from "@/assets/svgs/orders.svg";
import productIcon from "@/assets/svgs/product.svg";
import categoryIcon from "@/assets/svgs/categories.svg";
import brandsIcon from "@/assets/svgs/brands.svg";
import refundssIcon from "@/assets/svgs/refunds.svg";
import suppportIcon from "@/assets/svgs/support.svg";
import configurationIcon from "@/assets/svgs/configuration.svg";

export const navbarLinks = [
    {
        title: "Menu",
        links: [
            {
                label: "Analytics",
                icon: analyticsIcon,
                path: "/",
            },
            {
                label: "Orders",
                icon: ordersIcon,
                path: "/orders",
            },
            {
                label: "Products",
                icon: productIcon,
                path: "/products-only",
            },
            {
                label: "Categories",
                icon: categoryIcon,
                path: "/categories",
            },
            {
                label: "Brands",
                icon: brandsIcon,
                path: "/brands",
            },
            {
                label: "Refunds",
                icon: refundssIcon,
                path: "/refunds",
            },
        ],
    },
];

export const navbarLinksTwo = [
    {
        title: " ",
        links: [
            {
                label: "Support",
                icon: suppportIcon,
                path: "/support",
            },
            {
                label: "Configuration",
                icon: configurationIcon,
                path: "/configuration",
            },
        ],
    },
];

export const overviewData = [
    {
        name: "Jan",
        total: 1500,
    },
    {
        name: "Feb",
        total: 2000,
    },
    {
        name: "Mar",
        total: 1000,
    },
    {
        name: "Apr",
        total: 5000,
    },
    {
        name: "May",
        total: 2000,
    },
    {
        name: "Jun",
        total: 5900,
    },
    {
        name: "Jul",
        total: 2000,
    },
    {
        name: "Aug",
        total: 5500,
    },
    {
        name: "Sep",
        total: 2000,
    },
    {
        name: "Oct",
        total: 4000,
    },
    {
        name: "Nov",
        total: 1500,
    },
    {
        name: "Dec",
        total: 2500,
    },
];

export const recentSalesData = [
    {
        id: 1,
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        image: ProfileImage,
        total: 1500,
    },
    {
        id: 2,
        name: "James Smith",
        email: "james.smith@email.com",
        image: ProfileImage,
        total: 2000,
    },
    {
        id: 3,
        name: "Sophia Brown",
        email: "sophia.brown@email.com",
        image: ProfileImage,
        total: 4000,
    },
    {
        id: 4,
        name: "Noah Wilson",
        email: "noah.wilson@email.com",
        image: ProfileImage,
        total: 3000,
    },
    {
        id: 5,
        name: "Emma Jones",
        email: "emma.jones@email.com",
        image: ProfileImage,
        total: 2500,
    },
    {
        id: 6,
        name: "William Taylor",
        email: "william.taylor@email.com",
        image: ProfileImage,
        total: 4500,
    },
    {
        id: 7,
        name: "Isabella Johnson",
        email: "isabella.johnson@email.com",
        image: ProfileImage,
        total: 5300,
    },
];
