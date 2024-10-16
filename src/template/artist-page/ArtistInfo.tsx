import Image from "next/image"

const ArtistInfo = () => {

    return (
        <section className={` |  |  | border-2 border-indigo-500`}>
            <div className={`w-full relative |  |  | `}>
                <Image 
                    src="/artist-page.jpg"
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
                        src="/animakid-avatar.png"
                        alt="Animakid Image"
                        width={320}
                        height={320}
                        className={`w-[7.5rem] h-[7.5rem] object-cover max-md:mx-auto |  |  | border-2 border-nftCustom-background rounded-[20px]`}
                    />
                </div>

                <div className={`pt-20 xl:pt-24 |  | flex flex-col xl:flex-row xl:justify-between xl:items-center | border-2 border-green-500`}>
                    <h1 className={`max-xl:mb-[1.875rem] |  |  | `}>
                        Animakid // 👈🏻 Start From Here
                    </h1>

                    <div>
                        {/* Copy NFT Code Button */}

                        {/* Follow Button */}
                    </div>
                </div>

                <div>
                    {/* <ArtistInfoCountUp /> */}
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