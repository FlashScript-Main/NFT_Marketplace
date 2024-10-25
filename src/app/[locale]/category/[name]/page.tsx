import { GlobalMotionMain } from "@/animations/MotionAnimations";
import { categories } from "@/constant/nft-database";
import CategoryInfo from "@/template/category-page/CategoryInfo";
import CategoryNFTs from "@/template/category-page/CategoryNFTs";
import CategoryNotFound from "@/template/category-page/CategoryNotFound";
import { iranSans } from "@/utils/fonts";
import { useTranslations } from "next-intl";

const CategoryPage = ({ params: { name, locale } }: NFTPagePropsType) => {

    const language = useTranslations("language");
    
    const category = categories.find(category => category.paramsName === name);

    if (category) {
        return (
            <GlobalMotionMain className={` | selection:text-nftCustom-cta selection:bg-nftCustom-text |  | ${language("isEnglish") === "false" && `${iranSans}`}`}>
                <CategoryInfo 
                    category={category} 
                    locale={locale}
                />
                <CategoryNFTs 
                    category={category} 
                    locale={locale}
                />
            </GlobalMotionMain>
        )
    } 
    else {
        return (
            <CategoryNotFound 
              name={name} 
              locale={locale} 
            />
        )
    }

}

export default CategoryPage