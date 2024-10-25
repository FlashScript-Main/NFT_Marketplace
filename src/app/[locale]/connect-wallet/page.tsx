import { GlobalMotionMain } from "@/animations/MotionAnimations";
import ConnectWalletSection from "@/template/connect-wallet-page/ConnectWalletSection";
import { iranSans } from "@/utils/fonts";
import { useTranslations } from "next-intl";

const ConnectWallet = () => {

    const language = useTranslations("language");
    
    return (
        <GlobalMotionMain className={` | selection:text-nftCustom-cta selection:bg-nftCustom-text |  | ${language("isEnglish") === "false" && `${iranSans}`}`}>
            <ConnectWalletSection />
        </GlobalMotionMain>
    )

}

export default ConnectWallet