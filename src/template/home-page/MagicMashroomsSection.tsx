import CustomButton from "@/components/CustomButton"
import { useTranslations } from "next-intl";
import Image from "next/image"
import Link from "next/link"

const MagicMashroomsSection = ({ locale }: { locale: string }) => {

    const translateMagicMashrooms = useTranslations('Home-Magic-Mashrooms');

    return (
        <section className={`w-full pt-[7.5rem] md:pt-[22.5rem] pb-10 md:pb-[3.75rem] xl:py-96 mt-14 md:mt-16 xl:mt-20 relative |  |  | magic-mashrooms-background`}>
            <div className={`w-full h-full absolute inset-0 z-10 | bg-gradient-to-b from-transparent to-nftCustom-cta to-[110%] |  | `} />

            <div className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto relative z-20 |  | flex flex-col gap-[1.875rem] | border-2 border-indigo-500`}>
                <div className={` |  | flex flex-col gap-[1.875rem] | border-2 border-rose-600`}>
                    <Link 
                        href={`/${locale}/`}
                        className={`w-[9.4375rem] py-[0.625rem] | bg-nftCustom-background_secondary hover:bg-nftCustom-text | flex justify-center items-center gap-3 | rounded-[20px] group main-transition-color`}
                    >
                        <Image 
                            src="/shroomie-avatar.jpg"
                            alt="Shroomie Avatar"
                            width={24}
                            height={24}
                            className={` |  |  | rounded-full`}
                        />

                        <span className={` | text-nftCustom-text group-hover:text-nftCustom-cta text-base font-normal |  | main-transition-color`}>
                            Shroomie
                        </span>
                    </Link>

                    <h2 className={` | text-nftCustom-text text-[2.375rem] xl:text-[3.1875rem] font-semibold |  | `}>
                        Magic Mashrooms
                    </h2>

                    <div className={`max-md:hidden |  |  | `}>
                        <CustomButton
                            locale={locale} 
                            translateButton={translateMagicMashrooms("button-text")} 
                            type="link" 
                            href="sign-up"
                            icon="magic-mashrooms-eye"
                            className="py-[1.1875rem] max-md:max-w-[315px] md:max-w-[198px] max-md:mx-auto border-4 border-nftCustom-text bg-nftCustom-text hover:border-nftCustom-cta flex justify-center items-center rounded-[20px] group main-transition-color"
                            textClass="text-[1rem] leading-[140%] font-semibold text-nftCustom-background group-hover:text-nftCustom-cta ml-3"
                        />
                    </div>
                </div>

                <div>
                    {/* <CountDownTimer /> */}
                </div>

                <div className={`md:hidden |  |  | `}>
                    <CustomButton
                        locale={locale} 
                        translateButton={translateMagicMashrooms("button-text")} 
                        type="link" 
                        href="sign-up"
                        icon="magic-mashrooms-eye"
                        className="py-[1.1875rem] max-md:max-w-[315px] md:max-w-[247px] max-md:mx-auto border-4 border-nftCustom-text bg-nftCustom-text hover:border-nftCustom-cta flex justify-center items-center rounded-[20px] group main-transition-color"
                        textClass="text-[1rem] leading-[140%] font-semibold text-nftCustom-background group-hover:text-nftCustom-cta ml-3"
                    />
                </div>
            </div>
        </section>
    )

}

export default MagicMashroomsSection