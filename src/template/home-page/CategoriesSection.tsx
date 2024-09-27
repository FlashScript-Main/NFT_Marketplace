import { categories } from "@/constant"
import Image from "next/image"
import Link from "next/link"

const CategoriesSection = ({ locale }: { locale: string }) => {

    return (
        <section className={`py-10 xl:py-20 |  |  | `}>
            <h2 className={`mb-10 xl:mb-[3.75rem] | text-nftCustom-text text-[1.75rem] xl:text-[2.375rem] font-semibold |  | `}>
                Browse Categories
            </h2>

            <div className={`max-w-[22.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto |  | grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-7 | `}>
                {categories.map((category) => (
                    <Link 
                        key={category.id}
                        href={`/${locale}/${category.href}`}
                        className={`overflow-hidden | flex flex-col |  | rounded-[20px] group `}
                    >
                        <div className={`relative overflow-hidden inline-block h-[142px] w-[147.5] xl:h-[240px] xl:w-[240px]  |  |  | `}>
                            <Image 
                                src={`/${category.blurImage}`}
                                alt={`${category.title} Category`}
                                width={147.5}
                                height={142}
                                quality={100}
                                className={`w-full h-full object-cover mx-auto | blur-[0.3rem] group-hover:blur-none |  | rounded-t-[20px] group-hover:scale-110 duration-500 transition-transform`}
                            />

                            <Image 
                                src={`/${category.iconImage}`}
                                alt=""
                                width={80}
                                height={80}
                                className={`xl:w-[100px] xl:h-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group-hover:hidden |  |  | rounded-t-[20px]  duration-500 transition-transform`}
                            />
                        </div>

                        <div className={`py-5 px-5 xl:py-7 xl:px-7 | bg-nftCustom-background_secondary |  | `}>
                            <h6 className={` | text-nftCustom-text max-md:line-clamp-1 md:text-nowrap group-hover:text-nftCustom-cta text-base xl:text-[1.375rem] font-semibold |  | main-transition-color`}>
                                {category.title}
                            </h6>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )

}

export default CategoriesSection