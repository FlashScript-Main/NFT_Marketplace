import CustomButton from "@/components/CustomButton"
import { topCreatorsInfo } from "@/constant"
import { spaceMono } from "@/utils/fonts"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

const TopCreatorsSection = ({ locale }: { locale: string }) => {

    const translateTopCreators = useTranslations('Home-top-creators');
    const language = useTranslations("language");

    return (
        <section className={`py-10 xl:py-20 |  |  | `}>
            <div className={` |  | md:flex | ${language("isEnglish") === "false" && "md:flex-row-reverse"}`}>
                <div className={` |  | md:basis-2/3 | `}>
                    <h2 className={` | text-nftCustom-text text-[1.75rem] xl:text-[2.375rem] font-semibold |  | ${language("isEnglish") === "false" && "text-end" }`}>
                        {translateTopCreators("title")}
                    </h2>

                    <p className={`mt-2 mb-10 xl:mb-12 | text-nftCustom-text text-base xl:text-[1.375rem] font-light |  | ${language("isEnglish") === "false" && "text-end" }`}>
                        {translateTopCreators("description")}
                    </p>
                </div>

                <div className={`max-md:hidden md:my-auto |  | md:basis-1/3 | `}>
                    <CustomButton 
                        locale={locale} 
                        translateButton={translateTopCreators("button-text")} 
                        type="link" 
                        href="sign-up"
                        icon="rocket-launch-rankings"
                        className={`py-[1.1875rem] max-md:max-w-[315px] md:max-w-[247px] max-md:mx-auto border-4 border-nftCustom-cta bg-nftCustom-background hover:bg-nftCustom-text text-nftCustom-text flex justify-center items-center rounded-[20px] group ${language("isEnglish") === "true" ? "md:ml-auto" : "md:mr-auto"}`}
                        textClass={`text-[1rem] leading-[140%] font-medium text-nftCustom-text group-hover:text-nftCustom-cta ${language("isEnglish") === "true" ? "ml-3" : "mr-3 order-first"}`}
                    />
                </div>
            </div>

            <div className={`max-md:mb-10 md:mt-6 xl:mt-10 |  | grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 max-md:gap-5 md:gap-x-[1.875rem] md:gap-y-[1.875rem] | `}>
                {topCreatorsInfo.map((top) => (
                    <Link 
                        key={top.id}
                        href={`/${locale}/${top.href}`}
                        className={`px-5 py-5 max-md:mx-auto | bg-nftCustom-background_secondary | flex xl:flex-col justify-between items-center max-md:gap-5 xl:gap-5 | rounded-[20px] group ${top.className}`}
                    >
                        <div className={`relative |  |  | `}>
                            <span className={`absolute top-0 left-0 max-xl:-top-[0.3975rem] xl:-top-[0.2rem] max-xl:-left-[0.45rem] xl:-left-[2.5rem] w-[1.875rem] h-[1.875rem] | text-nftCustom-c_l_text group-hover:text-nftCustom-cta text-base font-normal ${spaceMono} bg-nftCustom-background group-hover:bg-nftCustom-text | grid place-content-center | rounded-full main-transition-color`}>
                                {top.rank}
                            </span>

                            <Image 
                                src={`/${top.avatarImage}`}
                                alt={`${top.avatarName} Avatar`}
                                width={60}
                                height={60}
                                className={`w-auto h-auto xl:hidden |  |  | rounded-full`}
                            />

                            <Image 
                                src={`/${top.avatarImage}`}
                                alt={`${top.avatarName} Avatar`}
                                width={120}
                                height={120}
                                className={`w-auto h-auto max-xl:hidden |  |  | rounded-full`}
                            />
                        </div>

                        <div className={` |  | flex flex-col justify-center items-start xl:items-center |  `}>
                            <h6 className={` | text-nftCustom-text group-hover:text-nftCustom-cta text-[1.375rem] font-semibold |  | main-transition-color`}>
                                {top.avatarName}
                            </h6>

                            <p className={` | text-nftCustom-c_l_text text-base max-[390px]:text-sm font-normal | | ${language("isEnglish") === "false" && "flex justify-between"}`}>
                                <span className={` |  |  | ${language("isEnglish") === "false" && "order-last"}`}>
                                    {translateTopCreators("Total Sales")}
                                </span>
                                <span className={` | text-nftCustom-text text-base max-[390px]:text-sm font-normal ${spaceMono} |  | ${language("isEnglish") === "true" ? "ml-2" : "mr-2"}`}>
                                    {top.numberSales} ETH
                                </span>
                            </p>
                        </div>
                    </Link>
                ))}
                
            </div>

            <div className={`md:hidden |  |  | `}>
                <CustomButton 
                    locale={locale} 
                    translateButton={translateTopCreators("button-text")} 
                    type="link" 
                    href="sign-up"
                    icon="rocket-launch-rankings"
                    className="py-[1.1875rem] max-md:max-w-[315px] md:max-w-[247px] max-md:mx-auto md:ml-auto border-4 border-nftCustom-cta bg-nftCustom-background hover:bg-nftCustom-text text-nftCustom-text flex justify-center items-center rounded-[20px] group"
                    textClass="text-[1rem] leading-[140%] font-medium text-nftCustom-text group-hover:text-nftCustom-cta ml-3"
                />
            </div>
        </section>
    )

}

export default TopCreatorsSection