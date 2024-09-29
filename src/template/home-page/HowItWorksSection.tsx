import { howItWorksInfo } from "@/constant"
import Image from "next/image"

const HowItWorksSection = () => {

    return (
        <section className={`py-10 xl:py-20 |  |  | `}>
            <h2 className={` | text-nftCustom-text text-[1.75rem] xl:text-[2.375rem] font-semibold |  | `}>
                How it works
            </h2>

            <p className={`mt-1 mb-10 xl:mb-12 | text-nftCustom-text text-base xl:text-[1.375rem] font-light |  | `}>
                Find out how to get started
            </p>

            <div className={` |  | grid grid-cols-1 max-md:gap-y-5 md:grid-cols-3 md:gap-x-[1.875rem] | border-2 border-indigo-600`}>
                {howItWorksInfo.map((info) => (
                    <div key={info.id} className={`max-md:p-5 md:pt-2 md:px-5 md:pb-[1.875rem] xl:pt-3 xl:px-[1.875rem] | bg-nftCustom-background_secondary | flex md:flex-col justify-between items-center max-md:gap-2 md:gap-5 | rounded-[20px]`}>
                        <Image
                            src={`/${info.image}`}
                            alt={`${info.imageAlt} Icon`}
                            width={250}
                            height={250}
                            quality={100}
                            className={`w-[100px] h-[100px] md:w-[160px] xl:w-[250px] md:h-[160px] xl:h-[250px] object-contain |  |  | `}
                        />

                        <div className={`md:mb-auto | md:text-center |  | border-2 border-green-600`}>
                            <h6 className={`mb-2 | text-nftCustom-text text-base xl:text-[1.375rem] font-medium |  | `}>
                                {info.title}
                            </h6>

                            <p className={`xl:w-11/12 xl:mx-auto | text-nftCustom-text text-xs xl:text-base font-light |  | `}>
                                {info.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

}

export default HowItWorksSection