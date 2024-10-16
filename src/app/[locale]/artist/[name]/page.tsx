import { GlobalMotionMain } from "@/animations/MotionAnimations";
import ArtistInfo from "@/template/artist-page/ArtistInfo";
import ArtistTabs from "@/template/artist-page/ArtistTabs";
import { iranSans } from "@/utils/fonts";
import { useTranslations } from "next-intl";

const ArtistPage = ({ params: { name } }: ArtistPagePropsType) => {

    const language = useTranslations("language");
    
    console.log(name);
    
    return (
        <GlobalMotionMain className={` |  |  | ${language("isEnglish") === "false" && `${iranSans}`}`}>
            <ArtistInfo />
            <ArtistTabs />
        </GlobalMotionMain>
    )

}

export default ArtistPage