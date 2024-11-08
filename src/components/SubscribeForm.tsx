"use client";

import { EnvelopeSimpleSVG } from "@/interface";
import { Input as NextUIInput } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast"
import { iranSans } from "@/utils/fonts";

const SubscribeForm = () => {

    const translateFooter = useTranslations('Footer');
    const language = useTranslations("language");

    const [value, setValue] = useState("");
    const [isInvalid, setIsInvalid] = useState(false);
    const { toast } = useToast();

    const handleSubscribe = () => {

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ( re.test(value) ) {
            setIsInvalid(false);
            setValue("");
            toast({
                title: ( translateFooter("Success") ),
                className: `bg-green-600 text-white border-4 border-green-900 ${language("isEnglish") === "false" && `${iranSans} flex items-center justify-end`}`,
                duration: 4000
            })
        }
        else {
            setIsInvalid(true);
            toast({
                title: ( translateFooter("Failure") ),
                className: `bg-rose-600 text-white border-4 border-red-900 ${language("isEnglish") === "false" && `${iranSans} flex items-center justify-end`}`,
                duration: 4000
            })
        }
    }

    return (
        <>  
            <div className={`max-md:max-w-[20rem] max-md:mx-auto md:max-w-[24rem] md:relative |  | max-md:flex max-md:flex-col | ${language("isEnglish") === "false" && "md:ml-auto"}`}>
                <NextUIInput 
                    type="email" 
                    label={isInvalid ? translateFooter("Failure") : translateFooter("Input-Field")}
                    isClearable
                    value={value}
                    onValueChange={setValue}
                    classNames={{
                        label: "text-nftCustom-background text-base font-normal md:font-medium pl-2 group-data-[focus=true]:mt-1",
                        input: [
                          "text-nftCustom-cta text-base font-normal mt-1",
                          "group-data-[focus=true]:text-nftCustom-cta",
                        ],
                        inputWrapper: [
                          "rounded-[1.2rem]",
                          "group-data-[focus=true]:text-nftCustom-cta",
                        ],
                        clearButton: ["md:mr-[8.7rem]"],
                    }}
                    className="max-h-[3.7rem]"
                />

                <button 
                    onClick={() => handleSubscribe()}
                    className={`py-3 md:px-8 mt-4 md:absolute md:right-0 md:top-0 md:mt-0 | bg-nftCustom-cta hover:bg-nftCustom-text | flex justify-center items-center | border-4 border-nftCustom-cta rounded-[20px] md:rounded-[18px] main-transition-color group`}
                >
                    <EnvelopeSimpleSVG />

                    <span className={` | text-nftCustom-text group-hover:text-nftCustom-cta text-base font-medium |  | ${language("isEnglish") === "true" ? "max-md:ml-3" : "max-md:mr-3 order-first"}`}>
                        {translateFooter("Input-Button")}
                    </span>
                </button>
            </div>

            <div></div>
        </>
    )

}

export default SubscribeForm