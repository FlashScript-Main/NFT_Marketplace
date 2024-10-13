import Image from "next/image"
import NewAccountForm from "./NewAccountForm"
import { useTranslations } from "next-intl";

const CreateAccountSection = ({ locale }: { locale: string }) => {

    const translateCreateAccount = useTranslations('Create-Account');
    const language = useTranslations("language");

    return (
        <section className={`xl:h-[48rem] |  | flex flex-col md:flex-row gap-[1.875rem] md:gap-10 xl:gap-[3.75rem] | `}>
            <div className={` |  | md:basis-1/2 | `}>
                <Image 
                    src="/create-account.jpg"
                    alt="NFT Space-Ship"
                    width={610}
                    height={691}
                    className={`w-full h-[14.5rem] md:h-full object-cover |  |  | `}
                />
            </div>

            <div className={`max-md:max-w-[19.6875rem] md:max-w-[20.3125rem] xl:max-w-[28.75rem] max-md:mx-auto max-md:mb-10 md:py-20 xl:py-[6.25rem] |  | md:basis-1/2 | `}>
                <h1 className={` | text-[2.375rem] xl:text-[3.1875rem] leading-[120%] xl:leading-[110%] font-semibold text-nftCustom-text |  | ${language("isEnglish") === "false" && "text-end"}`}>
                    {translateCreateAccount("title")}
                </h1>

                <p className={`mt-5 mb-[1.875rem] md:mb-10 | text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal text-nftCustom-text |  | ${language("isEnglish") === "false" && "text-end"}`}>
                    {translateCreateAccount("description")}
                </p>

                <NewAccountForm locale={locale} />
            </div>
        </section>
    )

}

export default CreateAccountSection