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
                        className={`${className} | main-transition-color | `}
                    >
                        {icon === "user" && <UserSVG />}
                        {icon === "rocket-launch" && <RocketLaunchSVG />}
                        {icon === "rocket-launch-rankings" && <RocketLaunchSVG place="rankings" />}

                        <span className={`${textClass}  |  |  | `}>
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