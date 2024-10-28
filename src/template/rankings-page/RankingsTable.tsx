"use client";

import { DivToScroll } from "@/animations/ScrollAnimations";
import { useTranslations } from "next-intl";
import { motion } from 'framer-motion';
import { rankingsUsers } from "@/constant/nft-database";
import { rankingsHeaderTitles } from "@/constant";
import Image from "next/image";
import useSortConfig from "@/hooks/useSortConfig";
import useSticky from "@/hooks/useSticky";

const RankingsTable = ({ locale }: { locale: string }) => {

    const language = useTranslations("language");

    const { sortedData, sortConfig, handleSort } = useSortConfig(rankingsUsers);

    const { divRef, isSticky } = useSticky();

    

    return (
        <div className={`mt-10 |  |  | `}>
            <DivToScroll>
                <div 
                    className={`w-full |  |  | border-2 border-rose-600`}
                >
                    <div ref={divRef} className={`w-full sticky top-5 z-10 |  | flex justify-between items-center | border-2 ${isSticky ? "border-red-500" : "border-blue-500"}`}>
                        {rankingsHeaderTitles.map((title) => (
                        <div 
                            key={title.id}
                            onClick={() => handleSort(title.handleSort)}
                            className={`${sortConfig.key === `${title.handleSort}` ? "text-nftCustom-cta" : "inherit"} cursor-pointer |  |  | ${title.className}`}
                        >
                            <motion.span
                                initial={{ y: "-20%", opacity: 0 }}
                                whileInView={{ y: "0%", opacity: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: 0.25, duration: 0.5 }}
                            >
                                {language("isEnglish") === "fa" ? title.titleFa : title.titleEn}
                            </motion.span>
                        </div>

                        ))}
                    </div>

                    <div className={`mt-10 |  | flex flex-col | `}>
                        {sortedData.map((user, index) => (
                            <div key={user.id} className={`flex justify-between items-center |  |  | `}>
                                <div>
                                    <motion.span
                                        initial={{ y: "-20%", opacity: 0 }}
                                        whileInView={{ y: "0%", opacity: 1 }}
                                        viewport={{ once: true, margin: "-20px" }}
                                        transition={{ delay: 0.025 * (index + 0.025), duration: 0.5 }}
                                    >
                                        {user.id}
                                    </motion.span>
                                </div>
                                <div>
                                    <Image 
                                        src={`/${user.avatar}`} 
                                        alt={`${user.artist} Avatar`}
                                        width={40} 
                                        height={40} 
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>{user.artist}</div>
                                <div className={`max-md:hidden |  |  | `}>{user.change}</div>
                                <div className={`max-xl:hidden |  |  | `}>{user.sold_nfts}</div>
                                <div>{user.volume}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </DivToScroll>
        </div>
    )

}

export default RankingsTable
