import { RocketLaunchSVG, UserSVG } from "@/interface"
import Link from "next/link"

const CustomButton = ({ locale, translateButton, type, href, className, textClass, icon }: CustomButtonType) => {

    return (
        <>
            {
                type === "link" ? 
                ( 
                    <Link 
                        href={`/${locale}/${href}`} 
                        className={`${className} | main-transition-color | py-[1.1875rem] max-md:max-w-[315px] max-md:mx-auto border-4 border-nftCustom-cta bg-nftCustom-background hover:bg-nftCustom-text text-nftCustom-text flex justify-center items-center rounded-[20px] group`}
                    >
                        {icon === "user" && <UserSVG />}
                        {icon === "rocket-launch" && <RocketLaunchSVG />}
                        {icon === "rocket-launch-rankings" && <RocketLaunchSVG place="rankings" />}

                        <span className={`${textClass}  |  |  | text-[1rem] leading-[140%] font-medium text-nftCustom-text group-hover:text-nftCustom-cta ml-3`}>
                            {translateButton}
                        </span>
                    </Link>
                )
                : 
                (
                    <button></button>
                )
            }
        </>
    )

}

export default CustomButton