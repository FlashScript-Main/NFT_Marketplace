import { UserSVG } from "@/interface/UserSVG"
import Link from "next/link"

const CustomButton = ({ locale, translateButton, type, href, className, icon }: CustomButtonType) => {

    return (
        <>
            {
                type === "link" ? 
                ( 
                    <Link href={`/${locale}/${href}`} className={`${className}`}>
                        {icon === "user" && <UserSVG />}

                        <span>
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