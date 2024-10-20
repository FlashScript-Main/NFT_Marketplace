import { SectionToScroll } from "@/animations/ScrollAnimations";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { CountDownTimer } from "@/components";
import { spaceMono } from "@/utils/fonts";
import { GlobeSVG } from "@/interface";
import { nftInfoTags } from "@/constant";

const NFTInfo = ({ nft, locale }: { nft: NFTParamsType; locale: string }) => {

    const translateNFTInfo = useTranslations('NFT-Page');
    const language = useTranslations("language");

    return (
        <SectionToScroll>
            <div className={`w-full |  |  | `}>
                <Image 
                    src={`/${nft.topImage}`}
                    alt={`${nft.artistNameEn} Image`}
                    width={1280}
                    height={560}
                    className={`w-full h-[20rem] md:h-[26.25rem] xl:h-[35rem] object-cover |  |  | `}
                />
            </div>

            <div className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto py-10 relative |  |  | ${language("isEnglish") === "false" && "text-end"} border-2 border-indigo-500`}>
                <h1 className={`mb-[0.625rem] | text-nftCustom-text text-[1.75rem] leading-[140%] md:text-[2.375rem] md:leading-[120%] xl:text-[3.1875rem] xl:leading-[110%] font-semibold |  | `}>
                    {language("isEnglish") === "true" ? nft.artistNameEn : nft.artistNameFa}
                </h1>

                <span className={` | text-nftCustom-c_l_text text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal |  | `}>
                    {language("isEnglish") === "true" ? `Minted On ${nft.releaseDate}` : `${nft.releaseDate} انتشار یافته در`}
                </span>

                <div>
                    <CountDownTimer bid={true} />
                </div>

                <h4 className={`md:mt-[1.875rem] mb-[0.625rem] | text-nftCustom-c_l_text text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal xl:font-bold ${spaceMono} |  | `}>
                    {translateNFTInfo("created-by")}
                </h4>

                <div>
                    <Link 
                        href={`/${locale}/${nft.artistHref}`}
                        className={`w-fit |  | flex items-center gap-3 | group main-transition-color ${language("isEnglish") === "false" && "ml-auto flex-row-reverse"}`}
                    >
                        <Image 
                            src={`/${nft.artistImage}`}
                            alt={`${nft.artistNameEn} Image`}
                            width={500}
                            height={500}
                            className={`w-6 h-6 object-cover |  |  | rounded-full`}
                        />

                        <span className={`mt-1 | text-nftCustom-text group-hover:text-nftCustom-cta text-[1rem] xl:text-[1.375rem] leading-[140%] font-normal xl:font-semibold |  | `}>
                            {language("isEnglish") === "true" ? nft.createdArtistEn : nft.createdArtistFa}
                        </span>
                    </Link>
                </div>

                <h4 className={`mt-5 md:mt-[1.875rem] mb-[0.625rem] | text-nftCustom-c_l_text text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal xl:font-bold ${spaceMono} |  | `}>
                    {translateNFTInfo("description")}
                </h4>

                <p className={`md:max-w-[22rem] xl:max-w-[37.8125rem] | text-nftCustom-text text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal text-pretty break-keep |  | ${language("isEnglish") === "false" && "text-end ml-auto"}`}>
                    {language("isEnglish") === "true" ? nft.descriptionEn : nft.descriptionFa}
                </p>

                <h4 className={`mt-5 md:mt-[1.875rem] mb-[0.625rem] | text-nftCustom-c_l_text text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal xl:font-bold ${spaceMono} |  | `}>
                    {translateNFTInfo("details")}
                </h4>

                <a 
                    href="https://github.com/FlashScript-Main"
                    target="_blank"
                    className={`w-fit |  | flex items-center gap-3 | group main-transition-color ${language("isEnglish") === "false" && "ml-auto flex-row-reverse"}`}
                >
                    <GlobeSVG place="nft-page" />

                    <span className={` | text-nftCustom-text group-hover:text-nftCustom-cta text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal |  | `}>
                        {translateNFTInfo("view-on-etherscan")}
                    </span>
                </a>

                <a 
                    href="https://github.com/FlashScript-Main"
                    target="_blank"
                    className={`w-fit |  | flex items-center gap-3 | group main-transition-color ${language("isEnglish") === "false" && "ml-auto flex-row-reverse"}`}
                >
                    <GlobeSVG place="nft-page" />

                    <span className={`mt-[0.625rem] | text-nftCustom-text group-hover:text-nftCustom-cta text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal |  | `}>
                        {translateNFTInfo("view-original")}
                    </span>
                </a>

                <h4 className={`mt-5 md:mt-[1.875rem] mb-5 | text-nftCustom-c_l_text text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal xl:font-bold ${spaceMono} |  | `}>
                    {translateNFTInfo("tags")}
                </h4>

                <div className={` |  | flex flex-col xl:flex-row gap-5 | ${language("isEnglish") === "false" && "xl:flex-row-reverse"}`}>
                    {nftInfoTags.map((tag, index) => (
                        <a 
                            key={tag.id}
                            href="https://github.com/FlashScript-Main"
                            target="_blank"
                            className={`px-[1.875rem] py-3 w-fit | text-nftCustom-text hover:text-nftCustom-cta text-[1rem] leading-[140%] font-semibold bg-nftCustom-background_secondary hover:bg-nftCustom-text uppercase |  | rounded-[20px] main-transition-color ${language("isEnglish") === "false" && `max-xl:ml-auto ${index === nftInfoTags.length - 1 && "xl:ml-auto" }`}`}
                        >
                            {language("isEnglish") === "true" ? tag.textEn : tag.textFa}
                        </a>
                    ))}
                </div>
            </div>
        </SectionToScroll>
    )

}

export default NFTInfo