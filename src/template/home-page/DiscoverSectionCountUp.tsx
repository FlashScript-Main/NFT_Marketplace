"use client";

import { discoverNumbers } from "@/constant";
import { spaceMono } from "@/utils/fonts";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";

const DiscoverSectionCountUp = () => {
    
    const translateDiscover = useTranslations('Home-Discover');

    return (
        <div className={`w-full max-md:mt-6 |  | flex justify-between | border-2 border-rose-800`}>
            {discoverNumbers.map((number) => (
                <div
                    key={number.id}
                    className={` |  | flex flex-col justify-center | border-2 border-yellow-500`}
                >   
                    <span className={` | text-xl font-bold text-nftCustom-text ${spaceMono} |  | `}>
                        <CountUp 
                            end={number.value}
                            duration={2}
                            delay={3}
                            />
                        k+
                    </span>

                    <p className={` | text-base font-light text-nftCustom-text |  | `}>
                        {translateDiscover(number.text)}
                    </p>
                </div>
            ))}
        </div>
    )

}

export default DiscoverSectionCountUp