import { GlobalMotionMain } from "@/animations/MotionAnimations";
import { nfts } from "@/constant/nft-database";
import MoreNFTSFromArtist from "@/template/nft-page/MoreNFTSFromArtist";
import NFTInfo from "@/template/nft-page/NFTInfo";
import NFTNotFound from "@/template/nft-page/NFTNotFound";
import { iranSans } from "@/utils/fonts";
import { useTranslations } from "next-intl";

const NFTPage = ({ params: { name, locale } }: NFTPagePropsType) => {

    const language = useTranslations("language");
    
    const nft = nfts.find(nft => nft.paramsName === name);

    if (nft) {
        return (
            <GlobalMotionMain className={` |  |  | ${language("isEnglish") === "false" && `${iranSans}`}`}>
                <NFTInfo 
                    nft={nft} 
                    locale={locale}
                />
                <MoreNFTSFromArtist 
                    nft={nft} 
                    locale={locale}
                />
            </GlobalMotionMain>
        )
    } 
    else {
        return (
            <NFTNotFound 
              name={name} 
              locale={locale} 
            />
        )
    }

}

export default NFTPage