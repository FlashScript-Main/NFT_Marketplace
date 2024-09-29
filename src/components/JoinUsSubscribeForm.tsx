"use client";

import { EnvelopeSimpleSVG } from "@/interface";
import { Input as NextUIInput } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast"

const JoinUsSubscribeForm = () => {

    const translateJoinUs = useTranslations('Home-Join-Us');
    // const language = useTranslations("language");

    const [value, setValue] = useState("");
    const [isInvalid, setIsInvalid] = useState(false);
    const { toast } = useToast();

    const handleSubscribe = () => {

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ( re.test(value) ) {
            setIsInvalid(false);
            setValue("");
            toast({
                title: ( translateJoinUs("Success") ),
                className: "bg-green-600 text-white border-4 border-green-900",
                duration: 4000
            })
        }
        else {
            setIsInvalid(true);
            toast({
                title: ( translateJoinUs("Failure") ),
                className: "bg-rose-600 text-white border-4 border-red-900",
                duration: 4000
            })
        }
    }

    return (
        <>  
            <div className={`max-xl:max-w-[20rem] max-xl:mx-auto xl:max-w-[24rem] xl:relative |  | max-xl:flex max-xl:flex-col | `}>
                <NextUIInput 
                    type="email" 
                    label={isInvalid ? translateJoinUs("Failure") : translateJoinUs("Input-Field")}
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
                        clearButton: ["xl:mr-[8.7rem]"],
                    }}
                    className="max-h-[3.7rem]"
                />

                <button 
                    onClick={() => handleSubscribe()}
                    className={`py-3 xl:px-8 mt-4 xl:absolute xl:right-0 xl:top-0 xl:mt-0 | bg-nftCustom-cta hover:bg-nftCustom-text | flex justify-center items-center | border-4 border-nftCustom-cta rounded-[20px] xl:rounded-[18px] main-transition-color group`}
                >
                    <EnvelopeSimpleSVG />

                    <span className={`max-xl:ml-3 | text-nftCustom-text group-hover:text-nftCustom-cta text-base font-medium |  | `}>
                        {translateJoinUs("Input-Button")}
                    </span>
                </button>
            </div>

            <div></div>
        </>
    )

}

export default JoinUsSubscribeForm