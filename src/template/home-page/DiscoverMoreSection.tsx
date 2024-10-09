import CustomButton from "@/components/CustomButton";
import { discoverMoreInfo } from "@/constant";
import { spaceMono } from "@/utils/fonts";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const DiscoverMoreSection = ({ locale }: { locale: string }) => {

    const translateDiscoverMore = useTranslations('Home-Discover-More');
    const language = useTranslations("language");

    return (
        <section className={`py-10 xl:py-20 |  |  | `}>
            <div className={` |  | md:flex | ${language("isEnglish") === "false" && "md:flex-row-reverse"} `}>
                <div className={` |  | md:basis-2/3 | `}>
                    <h2 className={` | text-nftCustom-text text-[1.75rem] xl:text-[2.375rem] font-semibold |  | ${language("isEnglish") === "false" && "text-end"}`}>
                        {translateDiscoverMore("title")}
                    </h2>

                    <p className={`mt-2 mb-10 xl:mb-12 | text-nftCustom-text text-base xl:text-[1.375rem] font-light |  | ${language("isEnglish") === "false" && "text-end"}`}>
                        {translateDiscoverMore("description")}
                    </p>
                </div>

                <div className={`max-md:hidden md:my-auto |  | md:basis-1/3 | `}>
                    <CustomButton
                        locale={locale} 
                        translateButton={translateDiscoverMore("button-text")} 
                        type="link" 
                        href="sign-up"
                        icon="eye"
                        className={`py-[1.1875rem] max-md:max-w-[315px] md:max-w-[247px] max-md:mx-auto border-4 border-nftCustom-cta bg-nftCustom-background hover:bg-nftCustom-text text-nftCustom-text flex justify-center items-center rounded-[20px] group ${language("isEnglish") === "true" ? "md:ml-auto" : "md:mr-auto"}`}
                        textClass={`text-[1rem] leading-[140%] font-medium text-nftCustom-text group-hover:text-nftCustom-cta ${language("isEnglish") === "true" ? "ml-3" : "mr-3 order-first"}`}
                    />
                </div>
            </div>

            <div className={`max-md:mb-10 md:mt-6 xl:mt-10 max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto |  | grid grid-cols-1 max-md:gap-5 md:grid-cols-2 md:gap-x-[1.875rem] xl:grid-cols-3 | `}>
                {discoverMoreInfo.map((card) => (
                    <Link
                        key={card.id}
                        href={`/${locale}/${card.href}`}
                        className={`overflow-hidden ${card.className} |  |  | rounded-[20px] group `}
                    >
                        <div className={`overflow-hidden  |  |  | `}>
                            <Image 
                                src={`/${card.image}`}
                                alt={`${card.titleEn} Image`}
                                width={315}
                                height={238}
                                className={`max-md:w-[19.6875rem] max-md:h-[14.875rem] md:w-full object-cover |  |  | group-hover:scale-110 duration-500 transition-transform`}
                            />
                        </div>

                        <div className={`px-5 pt-5 pb-6 | bg-nftCustom-background_secondary | flex flex-col gap-[1.5625rem] | `}>
                            <div>
                                <h5 className={`mb-[0.3125rem] | text-nftCustom-text group-hover:text-nftCustom-cta text-[1.375rem] font-semibold capitalize |  | main-transition-color ${language("isEnglish") === "false" && "text-end"}`}>
                                    {language("isEnglish") === "true" ? card.titleEn : card.titleFa}
                                </h5>

                                <div className={` |  | flex items-center gap-3 | ${language("isEnglish") === "true" ? "justify-start" : "justify-end"}`}>
                                    <Image 
                                        src={`/${card.avatarImage}`}
                                        alt={`${card.avatarName} Avatar`}
                                        width={24}
                                        height={24}
                                        className={` rounded-full |  |  | `}
                                    />

                                    <span className={` | text-nftCustom-text text-base font-normal ${spaceMono} |  | `}>
                                        {card.avatarName}
                                    </span>
                                </div>
                            </div>

                            <div className={` |  | flex flex-col gap-2 md:gap-[0.4rem] | `}>
                                <div className={` |  | flex justify-between items-center | ${language("isEnglish") === "false" && "flex-row-reverse"}`}>
                                    <p className={` | text-nftCustom-c_l_text text-xs font-normal ${spaceMono} |  | `}>
                                        {translateDiscoverMore("price")}
                                    </p>

                                    <p className={` | text-nftCustom-c_l_text text-xs font-normal ${spaceMono} |  | `}>
                                        {translateDiscoverMore("bid")}
                                    </p>
                                </div>

                                <div className={` |  | flex justify-between items-center | ${language("isEnglish") === "false" && "flex-row-reverse"}`}>
                                    <span className={` | text-nftCustom-text text-xs md:text-base font-normal ${spaceMono} |  | `}>
                                        {card.price} ETH
                                    </span>

                                    <span className={` | text-nftCustom-text text-xs md:text-base font-normal ${spaceMono} |  | `}>
                                        {card.highestBid} wETH
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className={`md:hidden |  |  | `}>
                <CustomButton 
                    locale={locale} 
                    translateButton={translateDiscoverMore("button-text")} 
                    type="link" 
                    href="sign-up"
                    icon="eye"
                    className="py-[1.1875rem] max-md:max-w-[315px] md:max-w-[247px] max-md:mx-auto md:ml-auto border-4 border-nftCustom-cta bg-nftCustom-background hover:bg-nftCustom-text text-nftCustom-text flex justify-center items-center rounded-[20px] group"
                    textClass={`text-[1rem] leading-[140%] font-medium text-nftCustom-text group-hover:text-nftCustom-cta ${language("isEnglish") === "true" ? "ml-3" : "mr-3 order-first"}`}
                />
            </div>
        </section>
    )

}

export default DiscoverMoreSection