import Image from "next/image"
import CopyNFTCodeButton from "./CopyNFTCodeButton"
import FollowArtist from "./FollowArtist"
import { useTranslations } from "next-intl";
import ArtistInfoCountUp from "./ArtistInfoCountUp";
import { spaceMono } from "@/utils/fonts";
import { ArtistInfoLinks } from "@/constant";
import { DiscordLogoSVG, GlobeSVG, InstagramLogoSVG, TwitterLogoSVG, YoutubeLogoSVG } from "@/interface";
import { MotionA } from "@/animations/motion-provider";

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

                <div className={`relative z-30 mt-[1.875rem] mb-[1.875rem] |  |  | `}>
                    <ArtistInfoCountUp artist={artist} />
                </div>

                <div className={`relative z-30 | text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] |  | ${language("isEnglish") === "false" && "text-end"}`}>
                    <h5 className={` | text-nftCustom-c_l_text font-bold ${spaceMono} |  | `}>
                        {language("isEnglish") === "true" ? "Bio" : "توضیحات"}
                    </h5>

                    <p className={`mt-[0.625rem] mb-[1.875rem] | text-nftCustom-text font-normal |  | `}>
                        {language("isEnglish") === "true" ? artist.bioEn : artist.bioFa}
                    </p>
                </div>

                <div className={`relative z-30 |  |  | border-2 border-indigo-500`}>
                    <h5 className={`mb-[0.625rem] | text-nftCustom-c_l_text text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-bold ${spaceMono} |  | ${language("isEnglish") === "false" && "text-end"}`}>
                        {language("isEnglish") === "true" ? "Links" : "لینک ها"}
                    </h5>

                    <div className={`w-fit |  | flex items-center gap-[0.625rem] | ${language("isEnglish") === "false" && "ml-auto flex-row-reverse"} border-2 border-rose-500`}>
                        {ArtistInfoLinks.map((link, index) => (
                            <MotionA
                                key={link.id}
                                href="https://github.com/FlashScript-Main"
                                target="_blank"
                                initial={{ y: "20%", opacity: 0 }}
                                whileInView={{ y: "0%", opacity: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ staggerChildren: 0.02, delay: 0.25 * (index + 0.25), duration: 0.25, ease: "easeInOut" }}
                                aria-label={`${link.imageAlt} Link`}
                                className={` |  |  | main-transition-color`}
                            >
                                {link.svgIcon === "GlobeSVG" && <GlobeSVG place="artist-page" />}
                                {link.svgIcon === "DiscordLogoSVG" && <DiscordLogoSVG place="artist-page" />}
                                {link.svgIcon === "YoutubeLogoSVG" && <YoutubeLogoSVG place="artist-page" />}
                                {link.svgIcon === "TwitterLogoSVG" && <TwitterLogoSVG place="artist-page" />}
                                {link.svgIcon === "InstagramLogoSVG" && <InstagramLogoSVG place="artist-page" />}
                            </MotionA>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ArtistInfo