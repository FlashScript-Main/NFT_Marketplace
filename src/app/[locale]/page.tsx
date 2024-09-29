// import ThemeSwitcher from "@/theme/ThemeSwitcher"
import { CategoriesSection, DiscoverMoreSection, DiscoverSection, HowItWorksSection, JoinUsSection, MagicMashroomsSection, TopCreatorsSection, TrendingSection } from '@/template/home-page';
// import { useTranslations } from 'next-intl';
// import { getMessages } from 'next-intl/server';

// export const dynamicParams = false;

// export const generateStaticParams = () => {
//   return ["en", "fa"].map(locale => ({ locale }))
// }

// export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {

//     const messages: TodoType = await getMessages({ locale });
    
//     const title = messages.NavbarLinks.homeTitle;
  
//     return {
//       title,
//       description: `Home page in ${locale} locale`,
//     }
  
// }

const Home = ({ locale }: { locale: string }) => {

    // const translateHome = useTranslations('Home-Discover');
    // const language = useTranslations("language");
    // language("isEnglish") === "true"

    return (
        <main>
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

            {/* <ThemeSwitcher locale={locale} /> */}
        </main>
    )

}

export default Home