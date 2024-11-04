import { GlobalMotionMain } from '@/animations/MotionAnimations';
import { metadataValues } from '@/constant';
import { CategoriesSection, DiscoverMoreSection, DiscoverSection, HowItWorksSection, JoinUsSection, MagicMashroomsSection, TopCreatorsSection, TrendingSection } from '@/template/home-page';
import { iranSans } from '@/utils/fonts';
import { useTranslations } from 'next-intl';
import { redirect } from 'next/navigation';

export const generateMetadata = async ({ params: { locale } }: MainPagePropsType) => {

    return {
        title: locale === "en" ? metadataValues.homeTitleEn : metadataValues.homeTitleFa,
        description: locale === "en" ? metadataValues.homeDescriptionEn : metadataValues.homeDescriptionFa,
    }
  
}

const Home = ({ params: { locale } }: MainPagePropsType) => {

    const language = useTranslations("language");

    const validLocales = ['en', 'fa'];
    
    // Redirect to Home if the locale is invalid
    if (!validLocales.includes(locale)) {
        if (language("isEnglish") === "true") {
            redirect('/en/');
        }
        else {
            redirect('/fa/');
        }
    }

    // 🔥 Basic 🔥
    // ${language("isEnglish") === "true" ? "flex-row" : "flex-row-reverse"}
    // ${language("isEnglish") === "false" && "flex-row-reverse"}
    // ${language("isEnglish") === "true" ? "" : ""}
    // ${language("isEnglish") === "false" && ""}

    // ⭐ Basic ⭐
    // initial={{ y: "10%", opacity: 0 }}
    // whileInView={{ y: "0%", opacity: 1 }}
    // viewport={{ once: true, margin: "-200px" }}
    // transition={{ staggerChildren: 0.02, delay: 0.25 * index, duration: 0.5 }}

    // initial={{ y: "20%", opacity: 0 }}
    // whileInView={{ y: "0%", opacity: 1 }}
    // viewport={{ once: true, margin: "-200px" }}
    // transition={{ staggerChildren: 0.02, delay: 0.5 * (index + 1), duration: 0.25 }}

    // initial={{ y: "20%", opacity: 0 }}
    // whileInView={{ y: "0%", opacity: 1 }}
    // viewport={{ once: true, margin: "-100px" }}
    // transition={{ staggerChildren: 0.02, delay: 0.5 * (index + 0.5), duration: 0.25 }}

    // initial={{ y: "20%", opacity: 0 }}
    // whileInView={{ y: "0%", opacity: 1 }}
    // viewport={{ once: true, margin: "-50px" }}
    // transition={{ staggerChildren: 0.02, delay: 0.2 * (index + 0.25), duration: 0.25, ease: "easeInOut" }}
    
    // initial={{ x: language("isEnglish") === "true" ? "-10%" : "10%", opacity: 0 }}
    // whileInView={{ x: "0%", opacity: 1 }}
    // viewport={{ once: true, margin: "-50px" }}
    // transition={{ delay: 0.5, duration: 0.5 }}

    return (
        <GlobalMotionMain className={` | selection:text-nftCustom-cta selection:bg-nftCustom-text |  | ${language("isEnglish") === "false" && `${iranSans}`}`}>
            <div className={`max-md:px-[1.875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto |  |  | `}>
                <DiscoverSection locale={locale} />

                <TrendingSection locale={locale} />

                <TopCreatorsSection locale={locale} />

                <CategoriesSection locale={locale} />

                <DiscoverMoreSection locale={locale} />
            </div>

                <MagicMashroomsSection locale={locale} />

            <div className={`max-md:px-[1.875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto |  |  | `}>
                <HowItWorksSection />

                <JoinUsSection />
            </div>
        </GlobalMotionMain>
    )

}

export default Home