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
                    <div key={info.id} className={`p-5 | bg-nftCustom-background_secondary | flex gap-2 | rounded-[20px]`}>
                        <Image
                            src={`/${info.image}`}
                            alt={`${info.imageAlt} Icon`}
                            width={100}
                            height={100}
                            className={`object-contain |  |  | `}
                        />

                        <div className={` |  |  | border-2 border-rose-900`}>
                            <h6 className={`mb-2 | text-nftCustom-text text-base font-medium |  | `}>
                                {info.title}
                            </h6>

                            <p className={` | text-nftCustom-text text-xs font-light |  | `}>
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