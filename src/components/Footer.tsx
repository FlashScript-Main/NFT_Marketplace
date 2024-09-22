import { footerIcons, footerLinks } from "@/constant";
import { StorefrontSVG } from "@/interface"
import { useTranslations } from "next-intl";
import Link from "next/link"
import SubscribeForm from "./SubscribeForm";

const Footer = ({ locale }: { locale: string }) => {

    const translateFooter = useTranslations('Footer');
    // const language = useTranslations("language");

    return (
        <footer>
            <div>
                <div>
                    <Link 
                        href={`/${locale}/`} 
                        className={` |  | flex justify-center items-center | group`}
                    >
                        <StorefrontSVG />
            
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