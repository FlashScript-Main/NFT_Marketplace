import { footerIcons, footerLinks } from "@/constant";
import { StorefrontSVG } from "@/interface"
import { useTranslations } from "next-intl";
import Link from "next/link"
import SubscribeForm from "./SubscribeForm";
import { iranSans, spaceMono } from "@/utils/fonts";
import { MotionA, MotionDiv, MotionH6, MotionP, MotionSpan } from "@/animations/motion-provider";
import { FooterToScroll } from "@/animations/ScrollAnimations";

const Footer = ({ locale }: { locale: string }) => {

    const translateFooter = useTranslations('Footer');
    const language = useTranslations("language");

    return (
        <FooterToScroll className={`w-full px-8 md:px-[4.5rem] py-10 | bg-nftCustom-footer-bg | flex flex-col | ${language("isEnglish") === "false" && `${iranSans}`}`}>
            <div className={`xl:w-[66rem] xl:mx-auto |  | flex flex-col xl:justify-between xl:items-center  | ${language("isEnglish") === "true" ? "xl:flex-row" : "xl:flex-row-reverse"}`}>
                <div className={`max-xl:mb-8 xl:w-[18rem] xl:mb-auto |  | flex flex-col justify-start items-start | `}>
                    <Link 
                        href={`/${locale}/`} 
                        className={` |  |  | group ${language("isEnglish") === "false" && "ml-auto"}`}
                    >
                        <MotionDiv
                            initial={{ y: "-20px", opacity: 0 }}
                            whileInView={{ y: "0%", opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={` | flex justify-center items-center |  | `}
                        >
                            <StorefrontSVG footer="true" />
                
                            <span className={` | text-xl font-semibold text-nftCustom-text group-hover:text-nftCustom-cta |  | main-transition-color ${language("isEnglish") === "true" ? "ml-1 lg:ml-3" : "order-first mr-1 lg:mr-3"}`}>
                                {translateFooter("logo")}
                            </span>
                        </MotionDiv>
                    </Link>

                    <MotionP 
                        initial={{ x: "-20px", opacity: 0 }}
                        whileInView={{ x: "0%", opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`mt-4 xl:mt-6 mb-3 xl:mb-4 | text-base font-light text-nftCustom-text_accent |  | main-transition-color ${language("isEnglish") === "true" ? "xl:max-w-[12rem]" : "flex flex-row-reverse gap-1 ml-auto"}`}
                    >
                        <span>
                            {translateFooter("creation")} {" "}
                        </span>
                        
                        <Link 
                            href={`/${locale}/flash-script`}
                            className={` | font-medium text-nftCustom-cta hover:text-nftCustom-text |  | `}
                        >
                            FlashScript
                        </Link>
                    </MotionP>

                    <MotionSpan 
                        initial={{ x: "-20px", opacity: 0 }}
                        whileInView={{ x: "0%", opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`mb-2 xl:mb-3 | text-base font-light text-nftCustom-text_accent |  | ${language("isEnglish") === "false" && "ml-auto"}`}
                    >
                        {translateFooter("community")}
                    </MotionSpan>
                    
                    <div className={` |  | flex gap-2 | ${language("isEnglish") === "false" && "ml-auto"}`}>
                        {footerIcons.map((icon, index) => (
                            <MotionA
                                key={icon.id}
                                href="https://github.com/FlashScript-Main"
                                target="_blank"
                                initial={{ x: "20%", opacity: 0 }}
                                whileInView={{ x: "0%", opacity: 1 }}
                                viewport={{ once: true, margin: "-10px" }}
                                transition={{ staggerChildren: 0.02, delay: 0.25 * (index + 0.25), duration: 0.25, ease: "easeInOut" }}
                                className={` |  |  | main-transition-color`}
                            >
                                <icon.value />
                            </MotionA>
                        ))}
                    </div>
                </div>

                <div className={`max-xl:mb-8 xl:mb-auto |  | flex flex-col gap-3 | ${language("isEnglish") === "false" && "text-end"}`}>
                    <MotionH6
                        initial={{ y: "-20px", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        viewport={{ once: true, margin: "-100px" }} 
                        className={`mb-1 xl:mb-3 | text-nftCustom-text text-2xl font-bold |  | ${language("isEnglish") === "true" ? `${spaceMono}` : `${iranSans}`}`}
                    >
                        {translateFooter("Explore")}
                    </MotionH6>

                    {
                        footerLinks.map((link, index) => (
                            <Link 
                                key={link.id}
                                href={`/${locale}/${link.href}`}
                                className={` | text-base font-normal text-nftCustom-text_accent hover:text-nftCustom-cta |  | `}
                            >
                                <MotionDiv
                                    initial={{ x: "-20px", opacity: 0 }}
                                    whileInView={{ x: "0%", opacity: 1 }}
                                    viewport={{ once: true, margin: "-10px" }}
                                    transition={{ staggerChildren: 0.02, delay: 0.25 * (index + 0.25), duration: 0.25, ease: "easeInOut" }}
                                >
                                    {translateFooter(link.language)}
                                </MotionDiv>
                            </Link>
                        ))
                    }
                </div>

                <div className={`xl:mb-auto xl:w-[24.5rem] |  | flex flex-col gap-3 | ${language("isEnglish") === "false" && "text-end"}`}>
                    <MotionH6 
                        initial={{ y: "-20px", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        viewport={{ once: true, margin: "-50px" }} 
                        className={`mb-2 xl:mb-1 | text-nftCustom-text text-[1.4rem] font-bold |  | ${language("isEnglish") === "true" ? `${spaceMono}` : `${iranSans}`}`}
                    >
                        {translateFooter("Digest")}
                    </MotionH6>

                    <MotionP 
                        initial={{ x: "-20px", opacity: 0 }}
                        whileInView={{ x: "0%", opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className={` mb-4 | text-nftCustom-text_accent text-base font-normal |  | ${language("isEnglish") === "true" && "xl:w-[20rem]"}`}
                    >
                        {translateFooter("Exclusive")}
                    </MotionP>
                    
                    <MotionDiv
                        initial={{ y: "20px", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <SubscribeForm />
                    </MotionDiv>
                </div>
            </div>

            <div className={`xl:w-[66rem] xl:mx-auto mt-8 md:mt-10 pt-5 | text-sm font-normal text-nftCustom-text_accent |  | border-t border-t-nftCustom-c_l_text main-transition-color ${language("isEnglish") === "false" && "hidden"}`}>
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

            <div className={`xl:w-[66rem] xl:mx-auto mt-8 md:mt-10 pt-5 | text-sm font-normal text-nftCustom-text_accent | flex flex-col items-center | border-t border-t-nftCustom-c_l_text main-transition-color ${language("isEnglish") === "true" && "hidden"}`}>
                <div className={`ml-auto |  | flex items-center gap-[0.15rem] | `}>
                    <div className={` |  | flex flex-row-reverse items-center gap-1 |`}>
                        <div className={` |  | flex | `}>
                            <span>.حق کپی رایت با بازار توکن دیجیتال می باشد</span>
                        </div>
                        <div className={` |  | flex flex-row-reverse items-center gap-1 | `}>
                            <div className={` |  | flex items-center gap-1 | `}>
                                <span>FlashScript</span>
                                <span>در صورت انتشار، نام</span>
                            </div>
                                <span>.را لحاظ کنید</span>
                            </div>
                    </div>
                    <span>@</span>
                </div>

                <div className={`ml-auto |  | flex flex-row-reverse items-center gap-[0.15rem] | `}>
                    <div>
                        <span>{"تشکر فراوان از طرف)"}</span>
                    </div>
                    
                    <a 
                        href="https://github.com/FlashScript-Main" 
                        target="_blank"
                        className={`mx-[0.15rem] | text-nftCustom-cta hover:text-nftCustom-text font-semibold |  | `}
                    >
                        {" "} FlashScript {" "}
                    </a>

                    <div>
                        <span>به</span>
                    </div>
                    
                    <a 
                        href="https://www.figma.com/community/file/1173962104946517060/nft-marketplace-template-create-an-nft-website-in-minutes" 
                        target="_blank"
                        className={`mx-[0.15rem] | text-nftCustom-cta hover:text-nftCustom-text font-semibold |  | `}
                    >
                        {" "} animaapp.io {" "}
                    </a>

                    <div>
                        <span>{"(برای طراحی این دیزاین زیبا و اشتراک گذاری آن به صورت رایگان"}</span>
                    </div>
                </div>

                <div className={`mt-2 | text-nftCustom-text |  | `}>
                    مانا و پیروز باشید
                </div>
            </div>
        </FooterToScroll>
    )

}

export default Footer