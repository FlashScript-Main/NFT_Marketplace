import { footerIcons, footerLinks } from "@/constant";
import { StorefrontSVG } from "@/interface"
import { useTranslations } from "next-intl";
import Link from "next/link"
import SubscribeForm from "./SubscribeForm";

const Footer = ({ locale }: { locale: string }) => {

    const translateFooter = useTranslations('Footer');
    // const language = useTranslations("language");

    return (
        <footer className={`w-full px-8 md:px-[4.5rem] py-10 | bg-nftCustom-footer-bg | flex flex-col | `}>
            <div className={` |  | flex flex-col lg:flex-row | border-2 border-rose-700`}>
                <div className={` |  | flex flex-col justify-start items-start | border-2 border-indigo-700`}>
                    <Link 
                        href={`/${locale}/`} 
                        className={` |  | flex justify-center items-center | group`}
                    >
                        <StorefrontSVG footer={true} />
            
                        <span className={` | text-base lg:text-xl font-semibold text-nftCustom-header_logo group-hover:text-nftCustom-header_logo_hover |  | main-transition-color`}>
                            {translateFooter("logo")}
                        </span>
                    </Link>

                    <p>
                        {translateFooter("creation")} {" "}
                        <Link 
                            href={`/${locale}/flash-script`}
                        >
                            FlashScript
                        </Link>
                    </p>

                    <span>
                        {translateFooter("community")}
                    </span>
                    
                    <div className={` |  | flex | `}>
                        {footerIcons.map((icon) => (
                            <a 
                                key={icon.id}
                                href="https://github.com/FlashScript-Main"
                                target="_blank"
                            >
                                <icon.value />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h6>
                        {translateFooter("Explore")}
                    </h6>

                    {
                        footerLinks.map((link) => (
                            <Link 
                                key={link.id}
                                href={`/${locale}/${link.href}`}
                                className={` |  |  | `}
                            >
                                {translateFooter(link.language)}
                            </Link>
                        ))
                    }
                </div>

                <div>
                    <h6>
                        {translateFooter("Digest")}
                    </h6>

                    <p>
                        {translateFooter("Exclusive")}
                    </p>

                    <SubscribeForm />
                </div>
            </div>

            <div>
                &#169; NFT Market. Use this template freely.
                <br />
                (Huge Thanks from 
                <a 
                    href="https://github.com/FlashScript-Main" 
                    target="_blank"
                    className={` |  |  | `}
                >
                    {" "} FlashScript {" "}
                </a>
                to 
                <a 
                    href="" 
                    target="_blank"
                    className={` |  |  | `}
                >
                    {" "} TheDisignerName {" "}
                </a>
                for Creating this Beautiful Design and Sharing it for free)
            </div>
        </footer>
    )

}

export default Footer