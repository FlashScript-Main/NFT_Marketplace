"use client";

import { rankingsTabsDetails } from "@/constant";
import { Tab, Tabs } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import RankingsTable from "./RankingsTable";

const RankingsTabs = ({ locale }: { locale: string }) => {

    const language = useTranslations("language");

    return (
        <section className={`pb-[3.5rem] mt-2 max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto | bg-nftCustom-background_secondary |  | `}>
            <Tabs 
                aria-label="Options" 
                items={rankingsTabsDetails}
                fullWidth 
                variant="underlined" 
                classNames={{
                    cursor: "w-full bg-nftCustom-c_l_text -mb-[0.16rem]",
                    tab: `h-12 xl:h-16`,
                    tabContent: "group-data-[selected=true]:text-nftCustom-text text-nftCustom-c_l_text font-semibold text-[1rem] leading-[140%] xl:text-[1.375rem] main-transition-color",
                    tabList: `${language("isEnglish") === "false" && "flex-row-reverse"}`
                }}
                className={` | bg-nftCustom-background  |  | `}
            >
                {(item) => (
                  <Tab 
                      key={item.id} 
                      title={
                          <div className={` |  | flex gap-4 items-center |  | ${language("isEnglish") === "false" && "flex-row-reverse"}`}>
                            <span className={`md:hidden | text-[1rem] xl:text-[1.375rem] leading-[140%] font-semibold |  | `}>
                                {language("isEnglish") === "true" ? item.titleEn_sm : item.titleFa_sm}
                            </span>

                            <span className={`max-md:hidden | text-[1rem] xl:text-[1.375rem] leading-[140%] font-semibold |  | `}>
                                {language("isEnglish") === "true" ? item.titleEn_big : item.titleFa_big}
                            </span>
                          </div>
                        }
                  >
                      <item.content locale={locale} />
                      <RankingsTable locale={locale} />
                  </Tab>
                )}
            </Tabs>
        </section>
    )

}

export default RankingsTabs