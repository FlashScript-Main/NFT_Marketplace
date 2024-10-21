import { GlobalMotionMain } from "@/animations/MotionAnimations";
import { SectionToScroll } from "@/animations/ScrollAnimations";
import MarketplaceTabs from "@/template/marketplace-page/MarketplaceTabs";
import { iranSans } from "@/utils/fonts";
import { useTranslations } from "next-intl";

const MarketplacePage = ({ params: { locale } }: MarketplacePagePropsType) => {

    const translateMarketplace = useTranslations('Marketplace');
    const language = useTranslations("language");

    return (
        <GlobalMotionMain className={` |  |  | ${language("isEnglish") === "false" && `${iranSans}`}`}>
            <SectionToScroll>
                <div>
                    <h1>
                        {translateMarketplace("title")}
                    </h1>

                    <p>
                        {translateMarketplace("description")}
                    </p>
                </div>
            </SectionToScroll>

            <MarketplaceTabs locale={locale} />
        </GlobalMotionMain>
    )

}

export default MarketplacePage