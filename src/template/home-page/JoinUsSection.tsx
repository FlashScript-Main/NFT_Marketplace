import { JoinUsSubscribeForm } from "@/components"
import Image from "next/image"

const JoinUsSection = () => {

    return (
        <section className={`pt-10 pb-10 md:pb-20 |  |  | `}>
            <div className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto | md:bg-nftCustom-background_secondary | flex flex-col justify-between items-center | md:rounded-[20px] border-2 border-yellow-400`}>
                <div className={`max-md:mb-[1.875rem] |  |  | border-2 border-indigo-400`}>
                    <Image 
                        src="/astronaut.jpg"
                        alt="Astronaut"
                        width={425}
                        height={425}
                        quality={100}
                        className={`w-full |  |  | rounded-[20px]`}
                    />
                </div>

                <div>
                    <h2 className={` | text-nftCustom-text text-[1.75rem] xl:text-[2.375rem] font-medium |  | `}>
                        Join our weekly digest
                    </h2>

                    <p className={`mt-2 mb-10 | text-nftCustom-text text-base xl:text-[1.375rem] font-light |  | `}>
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