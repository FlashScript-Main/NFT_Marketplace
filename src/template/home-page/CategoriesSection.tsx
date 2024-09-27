import { categories } from "@/constant"
import Image from "next/image"
import Link from "next/link"

const CategoriesSection = ({ locale }: { locale: string }) => {

    return (
        <section className={`py-10 xl:py-20 |  |  | `}>
            <h2>
                Browse Categories
            </h2>
            
            <div className={`max-w-[22.6875rem] md:max-w-[20.625rem] max-md:mx-auto |  | grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-4 | border-2 border-blue-800`}>
                {categories.map((category) => (
                    <Link 
                        key={category.id}
                        href={`/${locale}/${category.href}`}
                        className={`overflow-hidden | flex flex-col |  | rounded-[20px] group border-2 border-orange-600`}
                    >
                        <div className={`relative overflow-hidden inline-block h-[142px] w-[147.5]  |  |  | border-2 border-green-700`}>
                            <Image 
                                src={`/${category.blurImage}`}
                                alt={`${category.title} Category`}
                                width={147.5}
                                height={142}
                                className={`w-full h-full object-cover mx-auto | blur-[0.3rem] group-hover:blur-none |  | rounded-t-[20px] group-hover:scale-110 duration-500 transition-transform`}
                            />

                            <Image 
                                src={`/${category.iconImage}`}
                                alt=""
                                width={80}
                                height={80}
                                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group-hover:hidden |  |  | rounded-t-[20px]  duration-500 transition-transform`}
                            />
                        </div>

                        <div className={`py-5 px-5 | bg-nftCustom-background_secondary |  | border-2 border-indigo-700`}>
                            <h6 className={` | text-nftCustom-text line-clamp-1 group-hover:text-nftCustom-cta text-base font-semibold |  | `}>
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