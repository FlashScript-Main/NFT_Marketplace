import { navbarLinks } from "@/constant"
import { useTranslations } from "next-intl";
import Link from "next/link"
import CustomButton from "./CustomButton";
import { StorefrontSVG } from "@/interface/StorefrontSVG";

const Header = ({ locale }: { locale: string }) => {

    const translateHeader = useTranslations('Header');
    const language = useTranslations("language");

    return (
        <header className={`w-full py-4 lg:py-9 | border-2 border-indigo-500 |  | `}>
            <nav className="max-w-[85%] md:max-w-[95%] xl:max-w-7xl mx-auto | text-nftCustom-navbar_text | flex justify-between items-center | ">
                <Link href={`/${locale}/`} className={` |  | flex justify-center items-center | group`}>
                    <StorefrontSVG />
        
                    <span className={` | text-base lg:text-xl font-semibold group-hover:text-nftCustom-navbar_text_hover |  | main-transition-color`}>
                        {translateHeader("logo")}
                    </span>
                </Link>

                <div className={`max-lg:hidden ${language("isEnglish") === "true" ? "text-left" : "text-right"}`}>
                    <ul>
                        {navbarLinks.map((link) => (
                            <li key={link.key}>
                                <Link href={link.href}>
                                    {translateHeader(link.language)}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <CustomButton 
                        translateButton={translateHeader("button")} 
                        locale={locale} 
                        className=""
                        type="link"
                        href="sign-up"
                        icon="user"
                    />
                    
                </div>

                <div className="lg:hidden">
                    Mobile Menu
                </div>
            </nav>
        </header>
    )

}

export default Header
/*
🔻 min-width 👉🏻 |➡------ 🔻
    xs: 👉🏻 475px 👉🏻 extend: { screens: { 'xs': '475px' } }
    sm: 👉🏻 640px
    md: 👉🏻 768px
    lg: 👉🏻 1024px
    xl: 👉🏻 1280px
    2xl: 👉🏻 1536px

🔻 max-width 👉🏻 ------⬅| 🔻
    max-xs: 👉🏻 475px
    max-sm: 👉🏻 640px
    max-md: 👉🏻 768px
    max-lg: 👉🏻 1024px
    max-xl: 👉🏻 1280px
    max-2xl: 👉🏻 1536px

🔻 'min-width' to 'max-width' 👉🏻 |➡------⬅| 🔻
    xs:max-lg 👉🏻 '475px' to '1024px'
    sm:max-xl 👉🏻 '640px' to '1280px'
    md:max-2xl 👉🏻 '768px' to '1536px'
*/