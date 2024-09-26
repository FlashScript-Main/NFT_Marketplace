import { trendingInfo } from "@/constant"
import { spaceMono } from "@/utils/fonts"
import Image from "next/image"
import Link from "next/link"

// https://dev.to/collegewap/how-to-handle-mouse-hover-event-in-react-5e3j
const TrendingSection = ({ locale }: { locale: string }) => {

    return (
        <section className={`pt-10 pb-6 xl:py-20 |  |  | border-2 border-indigo-600`}>
            <h2 className={` | text-nftCustom-text text-[1.75rem] xl:text-[2.375rem] font-semibold |  | `}>
                Trending Collection
            </h2>

            <p className={`mt-2 mb-10 xl:mb-12 | text-nftCustom-text text-base xl:text-[1.375rem] font-light |  | `}>
                Checkout our weekly updated trending collection.
            </p>

            <div className={` |  | grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-md:gap-10 | border-2 border-orange-600`}>
                {trendingInfo.map((trend) => (
                    <div
                        key={trend.id}
                        className={`max-w-[19.6875rem] md:max-w-[20.625rem] max-md:mx-auto |  |  | ${trend.className}`}
                    >
                        <Image 
                            src={`/${trend.bigImage}`}
                            alt={trend.imageAlt}
                            width={315}
                            height={315}
                            className={`w-auto h-auto md:w-[330px] md:h-[330px] object-cover |  |  | rounded-[20px]`}
                        />

                        <div className={`mt-4 |  | flex justify-between items-center | `}>
                            <Image 
                                src={`/${trend.smallImageOne}`}
                                alt={trend.imageAlt}
                                width={95}
                                height={95}
                                className={`w-aut h-auto md:w-[100px] md:h-[100px] |  |  | rounded-[20px]`}
                            />

                            <Image 
                                src={`/${trend.smallImageTwo}`}
                                alt={trend.imageAlt}
                                width={95}
                                height={95}
                                className={`w-aut h-auto md:w-[100px] md:h-[100px] |  |  | rounded-[20px]`}
                            />

                            <Link 
                                href={`/${locale}/${trend.href}`}
                                className={`w-[95px] h-[95px] md:w-[100px] md:h-[100px] | bg-nftCustom-cta hover:bg-nftCustom-text | grid place-content-center | border-4 border-nftCustom-cta rounded-[20px] group main-transition-color`}
                            >
                                <span className={` | text-nftCustom-text group-hover:text-nftCustom-cta text-base md:text-[1.375rem] font-bold ${spaceMono} |  | `}>
                                    {trend.numberImage}+
                                </span>
                            </Link>
                        </div>

                        <div className={`mt-[0.9375rem] |  |  | `}>
                            <h5 className={`mb-2 | text-nftCustom-text text-[1.375rem] font-medium |  | `}>
                                {trend.title}
                            </h5>

                            <Link 
                                href={`/${locale}/${trend.href}`} 
                                className={` |  | flex justify-start items-center gap-3 | group`}
                            >
                                <Image 
                                    src={`/${trend.avatarImage}`}
                                    alt={`${trend.avatarName} Avatar`}
                                    width={24}
                                    height={24}
                                    className={`w-aut h-auto  |  |  | rounded-full`}
                                />
                                
                                <span className={` | text-base font-light text-nftCustom-text group-hover:text-nftCustom-cta |  | main-transition-color`}>
                                    {trend.avatarName}
                                </span>
                            </Link>
                        </div>
                    </div>
                ))}
                <div>
                

                    
                </div>
            </div>
        </section>
    )

}

export default TrendingSection