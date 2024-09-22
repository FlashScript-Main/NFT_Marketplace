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
            className={`py-2 lg:py-6  | bg-nftCustom-header_bg |  | `}
        >
            <div className={`w-full md:w-[95%] lg:max-w-[74rem] mx-auto |  | flex justify-between items-center | `}>
                <Link href={`/${locale}/`} className={` |  | flex justify-center items-center | group`}>
                    <StorefrontSVG />
        
                    <span className={` | text-base lg:text-xl font-semibold text-nftCustom-header_logo group-hover:text-nftCustom-header_logo_hover |  | main-transition-color`}>
                        {translateHeader("logo")}
                    </span>
                </Link>

                <div className={`max-lg:hidden |  | flex justify-between items-center gap-7 | `}>
                    <ul className={` |  | flex justify-center items-center gap-7 | `}>
                        {navbarLinks.map((link) => (
                            <li key={link.key}>
                                <Link 
                                    href={link.href} 
                                    className={` | text-base ${language("isEnglish") === "true" ? "font-semibold" : "font-light"} text-nftCustom-header_navlinks hover:text-nftCustom-header_navlinks_hover |  | main-transition-color`}
                                >
                                    {translateHeader(link.language)}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <CustomButton 
                        translateButton={translateHeader("button")} 
                        locale={locale} 
                        className="border-4 border-nftCustom-header_button_border bg-nftCustom-header_button_bg hover:bg-nftCustom-header_button_hover text-nftCustom-header_button_text flex justify-center items-center rounded-3xl px-[1.4rem] py-[1rem]  group"
                        textClass="text-[1rem] leading-[140%] font-semibold group-hover:text-nftCustom-header_button_text_hover ml-3"
                        type="link"
                        href="sign-up"
                        icon="user"
                    />
                    
                </div>

                <NextUINavbarMenu className="overflow-hidden lg:hidden">
                    {menuItems.map((item, index) => (
                        <NextUINavbarItem key={`${item}-${index}`}>
                            <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            >
                                {item}
                            </Link>
                        </NextUINavbarItem>
                    ))}
                </NextUINavbarMenu>   

                <NextUINavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="lg:hidden"
                />
            </div>
        </NextUINavbar>
    )

}

export default Header

/*
Hide on scroll

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
*/


/*
With Menu

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
*/


/*
With Border

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
*/