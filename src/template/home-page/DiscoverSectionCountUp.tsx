"use client";

import { discoverNumbers } from "@/constant";
import { spaceMono } from "@/utils/fonts";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";

const DiscoverSectionCountUp = () => {
    
    const translateDiscover = useTranslations('Home-Discover');

    return (
        <div className={`md:w-full max-md:min-w-[20rem] max-md:mx-auto max-md:mt-6 |  | flex justify-between | `}>
            {discoverNumbers.map((number) => (
                <div
                    key={number.id}
                    className={` |  | flex flex-col justify-center | `}
                >   
                    <span className={` | text-xl xl:text-3xl font-bold text-nftCustom-text ${spaceMono} |  | `}>
                        <CountUp 
                            end={number.value}
                            duration={3}
                            delay={2.5}
                            />
                        k+
                    </span>

                    <p className={` | text-base xl:text-2xl font-light text-nftCustom-text |  | `}>
                        {translateDiscover(number.text)}
                    </p>
                </div>
            ))}
        </div>
    )

}

export default DiscoverSectionCountUp