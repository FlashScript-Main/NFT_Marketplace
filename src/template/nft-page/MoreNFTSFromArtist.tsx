import { SectionToScroll } from "@/animations/ScrollAnimations";
import Link from "next/link";

const MoreNFTSFromArtist = ({ nft, locale }: { nft: NFTParamsType; locale: string }) => {

    return (
        <SectionToScroll className={`max-w-[] |  |  | `}>
            <div>
                <h2>
                    More From This Artist
                </h2>

                <Link 
                    href={`/`}
                    className={`max-md:hidden |  |  | `}
                >
                    <span>
                        svg
                    </span>

                    <span>
                        Go To Artist Page
                    </span>
                </Link>
            </div>

            <div className={` |  | grid | `}>
                {/* {nft.MoreNFTsFromArtist.map(moreNFT => ()} */}
            </div>

            <Link 
                href={`/`}
                className={`md:hidden |  |  | `}
            >
                <span>
                    svg
                </span>

                <span>
                    Go To Artist Page
                </span>
            </Link>
        </SectionToScroll>
    )

}

export default MoreNFTSFromArtist