import CustomButton from "@/components/CustomButton"
import { topCreatorsInfo } from "@/constant"
import { spaceMono } from "@/utils/fonts"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

const TopCreatorsSection = ({ locale }: { locale: string }) => {

    const translateTopCreators = useTranslations('Home-top-creators');

    return (
        <section className={`py-10 xl:py-20 |  |  | `}>
            <div>
                <h2 className={` | text-nftCustom-text text-[1.75rem] xl:text-[2.375rem] font-semibold |  | `}>
                    Top Creators
                </h2>

                <p className={`mt-2 mb-10 xl:mb-12 | text-nftCustom-text text-base xl:text-[1.375rem] font-light |  | `}>
                    Checkout Top Rated Creators on the NFT Marketplace
                </p>
            </div>

            <div className={`max-md:mb-10 |  | grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 max-md:gap-5 | border-2 border-green-700`}>
                {topCreatorsInfo.map((top) => (
                    <Link 
                        key={top.id}
                        href={`/${locale}/${top.href}`}
                        className={`px-5 py-5 max-md:mx-auto | bg-nftCustom-background_secondary | flex justify-between items-center max-md:gap-5 | rounded-[20px] group ${top.className}`}
                    >
                        <div className={`relative |  |  | `}>
                            <span className={`absolute top-0 left-0 max-md:-top-[0.3975rem] max-md:-left-[0.45rem] w-[1.875rem] h-[1.875rem] | text-nftCustom-c_l_text group-hover:text-nftCustom-cta text-base font-normal ${spaceMono} bg-nftCustom-background group-hover:bg-nftCustom-text | grid place-content-center | rounded-full main-transition-color`}>
                                {top.rank}
                            </span>

                            <Image 
                                src={`/${top.avatarImage}`}
                                alt={`${top.avatarName} Avatar`}
                                width={60}
                                height={60}
                                className={`w-auto h-auto |  |  | rounded-full`}
                            />
                        </div>

                        <div className={` |  | flex flex-col justify-center items-start |  `}>
                            <h6 className={` | text-nftCustom-text group-hover:text-nftCustom-cta text-[1.375rem] font-semibold |  | main-transition-color`}>
                                {top.avatarName}
                            </h6>

                            <p className={` | text-nftCustom-c_l_text text-base max-[390px]:text-sm font-normal |  | `}>
                                Total Sales:
                                <span className={`ml-2 | text-nftCustom-text text-base max-[390px]:text-sm font-normal ${spaceMono} |  | `}>
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
                    className=""
                    textClass=""
                />
            </div>
        </section>
    )

}

export default TopCreatorsSection