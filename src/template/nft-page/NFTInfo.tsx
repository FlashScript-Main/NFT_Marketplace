import { SectionToScroll } from "@/animations/ScrollAnimations";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { CountDownTimer } from "@/components";

const NFTInfo = ({ nft, locale }: { nft: NFTParamsType; locale: string }) => {

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

            <div className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto py-10 relative |  |  | border-2 border-indigo-500`}>
                <h1 className={`mb-[0.625rem] | text-nftCustom-text text-[1.75rem] leading-[140%] md:text-[2.375rem] md:leading-[120%] xl:text-[3.1875rem] xl:leading-[110%] font-semibold |  | `}>
                    {language("isEnglish") === "true" ? nft.artistNameEn : nft.artistNameFa}
                </h1>

                <span className={` | text-nftCustom-c_l_text text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal |  | `}>
                    {language("isEnglish") === "true" ? `Minted On ${nft.releaseDate}` : `${nft.releaseDate} انتشار یافته در`}
                </span>

                <div>
                    <CountDownTimer bid={true} />
                </div>

                <h4>
                    Created By
                </h4>

                <Link href={`/`}>
                    {/* <Image /> */}
                    <span>
                        Orbitian
                    </span>
                </Link>

                <h4>
                    Description
                </h4>

                <p>
                    The Orbitians...
                </p>

                <h4>
                    Details
                </h4>

                <Link href={`/`}>
                    <span>
                        svg
                    </span>

                    <span>
                        View on Etherscan
                    </span>
                </Link>

                <Link href={`/`}>
                    <span>
                        svg
                    </span>

                    <span>
                        View Original
                    </span>
                </Link>

                <div>
                    <h4>
                        Tags
                    </h4>

                    <div>
                        {/* {nftInfoTags.map()} */}
                    </div>
                </div>
            </div>
        </SectionToScroll>
    )

}

export default NFTInfo