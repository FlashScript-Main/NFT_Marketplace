"use client";

import { EnvelopeSimpleSVG } from "@/interface";
import { Input as NextUIInput } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const SubscribeForm = () => {

    const translateFooter = useTranslations('Footer');
    // const language = useTranslations("language");

    const [value, setValue] = useState("");
    const [isInvalid, setIsInvalid] = useState(false);

    const handleSubscribe = () => {
        // don't remember from where i copied this code, but this works.
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ( re.test(value) ) {

        setValue("yeah")
        // this is a valid email address
        // call setState({email: email}) to update the email
        // or update the data in redux store.
    }
    else {
        // invalid email, maybe show an error to the user.
        setValue("No");
        setIsInvalid(true);
    }
    }

    return (
        <>  
            <div className={`max-md:max-w-[20rem] max-md:mx-auto |  | max-md:flex max-md:flex-col | border-2 border-orange-500`}>
                <NextUIInput 
                    type="email" 
                    label={translateFooter("Input-Field")}
                    isClearable
                    value={value}
                    onValueChange={setValue}
                    classNames={{
                        label: "text-nftCustom-background text-base font-normal pl-2 group-data-[focus=true]:mt-1",
                        input: [
                          "text-nftCustom-cta text-base font-normal mt-1",
                          "group-data-[focus=true]:text-nftCustom-cta",
                        ],
                        inputWrapper: [
                          "rounded-[1.2rem]",
                          "group-data-[focus=true]:text-nftCustom-cta",
                        ],
                    }}
                    className="max-h-[3.7rem]"
                />

                <button 
                    onClick={() => handleSubscribe()}
                    className={`py-2 mt-3 | bg-nftCustom-cta hover:bg-nftCustom-footer-bg | flex justify-center items-center | border-4 border-nftCustom-cta rounded-[20px] main-transition-color group`}
                >
                    <EnvelopeSimpleSVG />

                    <span className={`max-md:ml-3 | text-nftCustom-text group-hover:text-nftCustom-cta text-base font-medium |  | `}>
                        {translateFooter("Input-Button")}
                    </span>
                </button>
            </div>

            <div></div>
        </>
    )

}

export default SubscribeForm