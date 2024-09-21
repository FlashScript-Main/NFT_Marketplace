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
        
                    <span className={` | text-base lg:text-xl font-semibold text-nftCustom-header_logo group-hover:text-nftCustom-header_logo_hover |  | main-transition-color`}>
                        {translateHeader("logo")}
                    </span>
                </Link>

                <div className={`max-lg:hidden ${language("isEnglish") === "true" ? "text-left" : "text-right"}`}>
                    <ul>
                        {navbarLinks.map((link) => (
                            <li key={link.key}>
                                <Link href={link.href} className="text-nftCustom-header_navlinks hover:text-nftCustom-header_navlinks_hover">
                                    {translateHeader(link.language)}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <CustomButton 
                        translateButton={translateHeader("button")} 
                        locale={locale} 
                        className="text-nftCustom-header_button_text bg-nftCustom-header_button_bg hover:bg-nftCustom-header_button_hover border border-nftCustom-header_button_border"
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