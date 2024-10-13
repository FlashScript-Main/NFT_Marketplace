import { GlobalMotionMain } from "@/animations/MotionAnimations"
import CreateAccountSection from "@/template/create-acount-page/CreateAccountSection";
import { iranSans } from "@/utils/fonts";
import { useTranslations } from "next-intl";

const CreateAccount = ({ params: {locale} }: { params: {locale: string} }) => {

    const language = useTranslations("language");
    console.log(locale)
    return (
        <GlobalMotionMain className={` |  |  | ${language("isEnglish") === "false" && `${iranSans}`}`}>
            <CreateAccountSection locale={locale} />
        </GlobalMotionMain>
    )

}

export default CreateAccount