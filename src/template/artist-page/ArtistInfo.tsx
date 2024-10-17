import Image from "next/image"
import CopyNFTCodeButton from "./CopyNFTCodeButton"
import FollowArtist from "./FollowArtist"
import { useTranslations } from "next-intl";
import ArtistInfoCountUp from "./ArtistInfoCountUp";

const ArtistInfo = ({ artist }: { artist: ArtistParamsType }) => {

    const language = useTranslations("language");

    return (
        <section className={` |  |  | border-2 border-indigo-500`}>
            <div className={`w-full relative |  |  | `}>
                <Image 
                    src={`/${artist.topImage}`}
                    alt="Artist Page View"
                    width={1280}
                    height={320}
                    className={`w-full h-[15.625rem] md:h-[17.5rem] xl:h-[20rem] object-cover |  |  | `}
                />

                <div className={`w-full h-full absolute inset-0 z-10 | bg-gradient-to-b from-transparent to-nftCustom-cta to-[110%] |  | `} />
            </div>

            <div className={`relative max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto |  |  | border-2 border-yellow-400`}>
                <div className={`absolute inset-0 -top-[4.5rem] z-20 |  |  | `}>
                    <Image 
                        src={`/${artist.avatar}`}
                        alt={`${artist.artistNameEn} Image`}
                        width={320}
                        height={320}
                        className={`w-[7.5rem] h-[7.5rem] object-cover max-md:mx-auto |  |  | border-2 border-nftCustom-background rounded-[20px] ${language("isEnglish") === "false" && "md:ml-auto"}`}
                    />
                </div>

                <div className={`pt-20 xl:pt-24 relative z-30 |  | flex flex-col xl:flex-row xl:justify-between xl:items-center | ${language("isEnglish") === "false" && "xl:flex-row-reverse md:max-xl:justify-end md:max-xl:items-end"}`}>
                    <h1 className={`max-xl:mb-[1.875rem] | text-nftCustom-text text-[1.75rem] md:text-[2.375rem] xl:text-[3.1875rem] leading-[140%] md:leading-[120%] xl:leading-[110%] font-semibold |  | ${language("isEnglish") === "false" && "max-xl:text-end"}`}>
                        {language("isEnglish") === "true" ? artist.artistNameEn : artist.artistNameFa}
                    </h1>

                    <div className={` |  | flex flex-col md:flex-row gap-5 | `}>
                        <CopyNFTCodeButton />

                        <FollowArtist />
                    </div>
                </div>

                <div className={`relative z-30 mt-[1.875rem] |  |  | border-2 border-rose-700`}>
                    <ArtistInfoCountUp artist={artist} />
                </div>

                <div>
                    <h5>
                        Bio
                    </h5>

                    <p>
                        {"The Internet's Friendliest Designer Kid."}
                    </p>
                </div>

                <div>
                    <h5>
                        Links
                    </h5>

                    <div>
                        {/* {ArtistInfoLinks} */}
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ArtistInfo