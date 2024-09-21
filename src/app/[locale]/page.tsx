import ThemeSwitcher from "@/theme/ThemeSwitcher"
import { useTranslations } from 'next-intl';
// import { getMessages } from 'next-intl/server';

export const dynamicParams = false;

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

    const translateHome = useTranslations('HomePage');

    return (
        <>
            <div className="bg-nftCustom-bg text-nftCustom-text">
                {translateHome("title")}
            </div>

            <ThemeSwitcher locale={locale} />
        </>
    )

}

export default Home