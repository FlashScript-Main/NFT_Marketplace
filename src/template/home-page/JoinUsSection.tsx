import { JoinUsSubscribeForm } from "@/components"
import Image from "next/image"

const JoinUsSection = () => {

    return (
        <section className={`pt-10 pb-10 md:pb-20 |  |  | `}>
            <div className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto md:py-10 md:px-[1.875rem] xl:p-[3.75rem] | md:bg-nftCustom-background_secondary | flex flex-col md:flex-row max-md:justify-between max-md:items-center md:gap-[1.875rem] xl:gap-20 | md:rounded-[20px] `}>
                <div className={`max-md:mb-[1.875rem] |  | md:basis-1/2 | `}>
                    <Image 
                        src="/astronaut.jpg"
                        alt="Astronaut"
                        width={425}
                        height={425}
                        quality={100}
                        className={`w-full md:object-cover xl:w-[425px] xl:h-[310px] |  |  | rounded-[20px]`}
                    />
                </div>

                <div className={`xl:pt-4 |  | md:basis-1/2 |`}>
                    <h2 className={` | text-nftCustom-text text-[1.75rem] xl:text-[2.375rem] xl:leading-[120%] font-medium capitalize |  | `}>
                        Join our weekly digest
                    </h2>

                    <p className={`mt-2 mb-10 | text-nftCustom-text text-base xl:text-[1.375rem] xl:leading-[160%] font-light xl:capitalize |  | `}>
                        Get exclusive promotions & updates straight to your inbox.
                    </p>

                    <div>
                        <JoinUsSubscribeForm />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default JoinUsSection