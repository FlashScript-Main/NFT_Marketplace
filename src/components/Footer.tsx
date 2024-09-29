import { footerIcons, footerLinks } from "@/constant";
import { StorefrontSVG } from "@/interface"
import { useTranslations } from "next-intl";
import Link from "next/link"
import SubscribeForm from "./SubscribeForm";
import { spaceMono } from "@/utils/fonts";

const Footer = ({ locale }: { locale: string }) => {

    const translateFooter = useTranslations('Footer');
    // const language = useTranslations("language");
    // language("isEnglish") === "true"

    return (
        <footer className={`w-full px-8 md:px-[4.5rem] py-10 | bg-nftCustom-footer-bg | flex flex-col | `}>
            <div className={`xl:w-[66rem] xl:mx-auto |  | flex flex-col xl:flex-row xl:justify-between xl:items-center  | `}>
                <div className={`max-xl:mb-8 xl:w-[18rem] xl:mb-auto |  | flex flex-col justify-start items-start | `}>
                    <Link 
                        href={`/${locale}/`} 
                        className={` |  | flex justify-center items-center | group`}
                    >
                        <StorefrontSVG footer="true" />
            
                        <span className={` | text-xl font-semibold text-nftCustom-text group-hover:text-nftCustom-cta |  | main-transition-color`}>
                            {translateFooter("logo")}
                        </span>
                    </Link>

                    <p className={`mt-4 xl:mt-6 mb-3 xl:mb-4 xl:max-w-[12rem] | text-base font-light text-nftCustom-text_accent |  | main-transition-color`}>
                        {translateFooter("creation")} {" "}
                        
                        <Link 
                            href={`/${locale}/flash-script`}
                            className={` | font-medium text-nftCustom-cta hover:text-nftCustom-text |  | `}
                        >
                            FlashScript
                        </Link>
                    </p>

                    <span className={`mb-2 xl:mb-3 | text-base font-light text-nftCustom-text_accent |  | `}>
                        {translateFooter("community")}
                    </span>
                    
                    <div className={` |  | flex gap-2 | `}>
                        {footerIcons.map((icon) => (
                            <a 
                                key={icon.id}
                                href="https://github.com/FlashScript-Main"
                                target="_blank"
                                className={` |  |  | main-transition-color`}
                            >
                                <icon.value />
                            </a>
                        ))}
                    </div>
                </div>

                <div className={`max-xl:mb-8 xl:mb-auto |  | flex flex-col gap-3 | `}>
                    <h6 className={`mb-1 xl:mb-3 | text-nftCustom-text text-2xl font-bold ${spaceMono} |  | `}>
                        {translateFooter("Explore")}
                    </h6>

                    {
                        footerLinks.map((link) => (
                            <Link 
                                key={link.id}
                                href={`/${locale}/${link.href}`}
                                className={` | text-base font-normal text-nftCustom-text_accent hover:text-nftCustom-cta |  | `}
                            >
                                {translateFooter(link.language)}
                            </Link>
                        ))
                    }
                </div>

                <div className={`xl:mb-auto xl:w-[24.5rem] |  | flex flex-col gap-3 | `}>
                    <h6 className={`mb-2 xl:mb-1 | text-nftCustom-text text-[1.4rem] font-bold ${spaceMono} |  | `}>
                        {translateFooter("Digest")}
                    </h6>

                    <p className={`xl:w-[20rem] mb-4 | text-nftCustom-text_accent text-base font-normal |  | `}>
                        {translateFooter("Exclusive")}
                    </p>
                    
                    <SubscribeForm />
                </div>
            </div>

            <div className={`xl:w-[66rem] xl:mx-auto mt-8 md:mt-10 pt-5 | text-sm font-normal text-nftCustom-text_accent |  | border-t border-t-nftCustom-c_l_text main-transition-color`}>
                &#169; NFT Market. Use this template freely.
                <br />
                (Huge Thanks from 
                <a 
                    href="https://github.com/FlashScript-Main" 
                    target="_blank"
                    className={` | text-nftCustom-cta hover:text-nftCustom-text font-semibold |  | `}
                >
                    {" "} FlashScript {" "}
                </a>
                to 
                <a 
                    href="https://www.figma.com/community/file/1173962104946517060/nft-marketplace-template-create-an-nft-website-in-minutes" 
                    target="_blank"
                    className={` | text-nftCustom-cta hover:text-nftCustom-text font-semibold |  | `}
                >
                    {" "} animaapp.io {" "}
                </a>
                for Creating this Beautiful Design and Sharing it for free)
            </div>
        </footer>
    )

}

export default Footer