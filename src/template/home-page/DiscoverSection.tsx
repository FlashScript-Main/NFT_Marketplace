import CustomButton from "@/components/CustomButton"
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link"
import DiscoverSectionCountUp from "./DiscoverSectionCountUp";

const DiscoverSection = ({ locale }: { locale: string }) => {

    const translateDiscover = useTranslations('Home-Discover');
    const language = useTranslations("language");

    return (
        <section className={`py-10 md:py-16 xl:py-20 | md:flex md:gap-8 |  | ${language("isEnglish") === "false" && "md:flex-row-reverse"}`}>
            <div className={` |  | flex flex-col items-center gap-[0.625rem] md:gap-5 md:basis-1/2 | `}>
                <h1 className={`max-md:mr-auto | text-nftCustom-text text-3xl md:text-4xl md:leading-[120%] font-semibold capitalize |  | ${language("isEnglish") === "true" ? "xl:text-[4.2rem]" : "text-end xl:text-[3.8rem]"}`}>
                    {translateDiscover("title")}
                </h1>

                <p className={`md:mb-1 xl:mb-3 | text-nftCustom-text text-base xl:text-2xl font-light |  | ${language("isEnglish") === "false" && "text-end"}`}>
                    {translateDiscover("description")}
                </p>

                <Link 
                    href={`/${locale}/`} 
                    className={`md:hidden overflow-hidden my-6 | flex flex-col |  | rounded-[20px] group`}
                >
                    <div className={`overflow-hidden inline-block h-fit |  |  | `}>
                        <Image 
                            src="/space-walking.png"
                            alt="Space Walking"
                            width={315}
                            height={216}
                            className={`w-auto h-auto object-cover |  |  | group-hover:scale-110 duration-500 transition-transform`}
                        />
                    </div>

                    <div className={`py-[1.375rem] px-5 space-y-[0.625rem] | bg-nftCustom-background_secondary |  | `}>
                        <h5 className={` | text-nftCustom-text group-hover:text-nftCustom-cta text-[1.375rem] font-medium capitalize |  | main-transition-color ${language("isEnglish") === "false" && "text-end"}`}>
                            {translateDiscover("card-title")}
                        </h5>

                        <div className={` |  | flex items-center gap-3 | ${language("isEnglish") === "true" ? "justify-start" : "justify-end"}`}>
                            <Image 
                                src="/animakid-avatar.png"
                                alt="Animakid Avatar"
                                width={24}
                                height={24}
                                className={`w-aut h-auto rounded-full |  |  | `}
                            />
                            
                            <span className={` | text-base font-light text-nftCustom-text |  | `}>
                                Animakid
                            </span>
                        </div>
                    </div>
                </Link>

                <CustomButton 
                    locale={locale} 
                    translateButton={translateDiscover("button-text")} 
                    type="link" 
                    href="sign-up"
                    icon="rocket-launch"
                    className={`max-[425px]:w-full max-sm:px-20 sm:px-20 md:px-0 md:w-[14rem] md:py-[1rem] md:mb-2 xl:mb-6 border-4 border-nftCustom-cta bg-nftCustom-cta hover:bg-nftCustom-text text-nftCustom-text flex justify-center items-center rounded-[20px] py-[1.1875rem] group ${language("isEnglish") === "true" ? "md:mr-auto" : "md:ml-auto"}`}
                    textClass={`text-[1rem] leading-[140%] font-medium group-hover:text-nftCustom-cta ${language("isEnglish") === "true" ? "ml-3" : "mr-3 order-first"}`}
                />

                <DiscoverSectionCountUp />
            </div>

            <div className={`max-md:hidden |  |  | md:basis-1/2 `}>
                <Link 
                    href={`/${locale}/`} 
                    className={`overflow-hidden my-6 md:my-0 xl:ml-auto xl:w-[31rem] xl:h-[31rem] | flex flex-col |  | rounded-[20px] group`}
                >
                    <div className={`overflow-hidden inline-block h-fit |  |  | `}>
                        <Image 
                            src="/space-walking.png"
                            alt="Space Walking"
                            width={315}
                            height={216}
                            className={`w-auto h-auto object-cover xl:w-full |  |  | group-hover:scale-110 duration-500 transition-transform`}
                        />
                    </div>

                    <div className={`py-[1.375rem] px-5 space-y-[0.625rem] | bg-nftCustom-background_secondary |  | `}>
                        <h5 className={` | text-nftCustom-text group-hover:text-nftCustom-cta text-[1.375rem] font-medium capitalize |  | main-transition-color ${language("isEnglish") === "true" ? "xl:ml-2" : "text-end xl:mr-2"}`}>
                            {translateDiscover("card-title")}
                        </h5>

                        <div className={` |  | flex items-center gap-3 | ${language("isEnglish") === "true" ? "justify-start xl:ml-2" : "justify-end xl:mr-2"}`}>
                            <Image 
                                src="/animakid-avatar.png"
                                alt="Animakid Avatar"
                                width={24}
                                height={24}
                                className={`w-aut h-auto rounded-full |  |  | `}
                            />
                            
                            <span className={` | text-base font-light text-nftCustom-text |  | `}>
                                Animakid
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )

}

export default DiscoverSection