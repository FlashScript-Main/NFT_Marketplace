"use client";

import { navbarLinks } from "@/constant"
import { useTranslations } from "next-intl";
import Link from "next/link"
import CustomButton from "./CustomButton";
import { StorefrontSVG } from "@/interface";
import {  
    Navbar as NextUINavbar,   
    NavbarItem as NextUINavbarItem,
    NavbarMenu as NextUINavbarMenu,
    NavbarMenuToggle as NextUINavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import { iranSans } from "@/utils/fonts";

const Header = ({ locale }: { locale: string }) => {
    // ${language("isEnglish") === "true" ? "text-left" : "text-right"}

    const translateHeader = useTranslations('Header');
    const language = useTranslations("language");

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <NextUINavbar 
            onMenuOpenChange={setIsMenuOpen} 
            position="sticky" 
            shouldHideOnScroll 
            maxWidth="full"
            height="3.375rem"
            className={`py-2 lg:py-6 | bg-nftCustom-background |  | ${language("isEnglish") === "false" && `${iranSans}`}`}
        >
            <div className={`w-full md:w-[95%] lg:max-w-[74rem] mx-auto |  | flex justify-between items-center | `}>
                <Link href={`/${locale}/`} className={` |  | flex justify-center items-center | group ${language("isEnglish") === "false" && "order-last"}`}>
                    <StorefrontSVG />
        
                    <span className={` | text-base lg:text-xl text-nftCustom-text group-hover:text-nftCustom-cta |  | main-transition-color ${language("isEnglish") === "true" ? "font-semibold ml-1 lg:ml-3" : `font-bold order-first mr-1 lg:mr-3`}`}>
                        {translateHeader("logo")}
                    </span>
                </Link>

                <div className={`max-lg:hidden |  | flex justify-between items-center gap-7 | `}>
                    <ul className={` |  | flex justify-center items-center gap-7 | ${language("isEnglish") === "false" && "flex-row-reverse"}`}>
                        {navbarLinks.map((link) => (
                            <li key={link.key}>
                                <Link 
                                    href={link.href} 
                                    className={` | text-base text-nftCustom-text hover:text-nftCustom-cta font-semibold |  | main-transition-color`}
                                >
                                    {translateHeader(link.language)}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <CustomButton 
                        translateButton={translateHeader("button-text")} 
                        locale={locale} 
                        className={`border-4 border-nftCustom-cta bg-nftCustom-cta hover:bg-nftCustom-text text-nftCustom-text flex justify-center items-center rounded-3xl px-[1.4rem] py-[1rem] group ${language("isEnglish") === "false" && "order-first"}`}
                        textClass={`text-[1rem] leading-[140%] group-hover:text-nftCustom-cta ${language("isEnglish") === "true" ? "ml-3 font-semibold" : "mr-3 font-bold order-first"}`}
                        type="link"
                        href="sign-up"
                        icon="user"
                    />
                    
                </div>

                <NextUINavbarMenu className={`lg:hidden pt-6 | bg-nftCustom-background |  | overflow-hidden`}>
                    {menuItems.map((item, index) => (
                        <NextUINavbarItem key={`${item}-${index}`}>
                            <Link
                                color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
                                className={`w-full | text-nftCustom-text hover:text-nftCustom-cta |  | main-transition-color`}
                                href="#"
                            >
                                {item}
                            </Link>
                        </NextUINavbarItem>
                    ))}
                </NextUINavbarMenu>   

                <NextUINavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className={`lg:hidden py-2 px-4 | text-nftCustom-text hover:text-nftCustom-cta |  | main-transition-color`}
                />
            </div>
        </NextUINavbar>
    )

}

export default Header