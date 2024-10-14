import { useTranslations } from "next-intl";
import Image from "next/image";

const ConnectWalletSection = () => {

    const translateCreateAccount = useTranslations('Create-Wallet');
    const language = useTranslations("language");

    return (
        <section className={`xl:h-[48rem] |  | flex flex-col md:flex-row gap-[1.875rem] md:gap-10 xl:gap-[3.75rem] | border-2 border-indigo-600`}>
            <div className={` |  | md:basis-1/2 | border-2 border-rose-700`}>
                <Image
                    src="/connect-wallet-page.jpg"
                    alt="NFT Space-Ship"
                    width={610}
                    height={642}
                    className={`w-full h-[14.5rem] md:h-full object-cover |  |  | `}
                />
            </div>

            <div className={`max-md:max-w-[19.6875rem] md:max-w-[20.3125rem] xl:max-w-[28.75rem] max-md:mx-auto max-md:mb-10 md:py-20 xl:py-[6.25rem] |  | md:basis-1/2 | border-2 border-green-600`}>
                <h1 className={` | text-[2.375rem] xl:text-[3.1875rem] leading-[120%] xl:leading-[110%] font-semibold text-nftCustom-text |  | ${language("isEnglish") === "false" && "text-end"}`}>
                    {translateCreateAccount("title")}
                </h1>

                <p className={`mt-5 mb-[1.875rem] md:mb-10 | text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal text-nftCustom-text |  | ${language("isEnglish") === "false" && "text-end"}`}>
                    {translateCreateAccount("description")}
                </p>

                {/* <NewAccountForm locale={locale} /> */}
                {/* className={`xl:max-w-[20.625rem] |  | flex flex-col gap-y-[0.9375rem] | ${language("isEnglish") === "false" && "xl:ml-auto"}`} */}
            </div>
        </section>
    )

}

export default ConnectWalletSection