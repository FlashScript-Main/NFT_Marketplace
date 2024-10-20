"use client";

import { iranSans, spaceMono } from '@/utils/fonts';
import { useTranslations } from 'next-intl';
import Countdown from 'react-countdown';

const Completionist = () => (
    <a 
        href="https://github.com/FlashScript-Main" 
        target="_blank"
        className={` | text-nftCustom-text hover:text-nftCustom-cta font-semibold |  | `}
    >
        FlashScript
    </a>
);

type RendererPropsType = {
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
};


const renderer = ({ hours, minutes, seconds, completed }: RendererPropsType) => {

    const formatZeroes = (num: number) => {  
        const newNum = num.toString();
        return newNum.length >= 2 ? num : '0' + num;
    }

    if (completed) {
      return <Completionist />;
    } else {
      const resultHours = formatZeroes(hours);
      const resultMinutes = formatZeroes(minutes);  
      const resultSeconds = formatZeroes(seconds);

      return (
        <div className={` | ${spaceMono} | flex justify-between items-center | `}>
            <span className={` | text-[2.375rem] font-bold |  | `}>{resultHours}</span>
            <span className={` | text-[1.75rem] font-bold |  | `}>:</span>
            <span className={` | text-[2.375rem] font-bold |  | `}>{resultMinutes}</span>
            <span className={` | text-[1.75rem] font-bold |  | `}>:</span>
            <span className={` | text-[2.375rem] font-bold |  | `}>{resultSeconds}</span>
        </div>
      );
    }
};

const CountDownTimer = ({ bid }: { bid?: boolean }) => {

    const language = useTranslations("language");

    return (
        <div className={`p-[1.875rem] md:w-[18.4375rem] | bg-nftCustom-countdown_bg/50 |  | rounded-[20px] ${bid && `max-md:my-5 md:absolute md:inset-0 md:mt-10 ${language("isEnglish") === "true" ? "md:ml-auto md:h-[14.8125rem]" : "md:mr-auto md:h-[15.3rem]"}`}`}>
            <h6 className={`mb-1 | text-nftCustom-text |  | ${language("isEnglish") === "true" ? `${spaceMono} text-xs font-normal` : `${iranSans} text-sm font-bold text-end`}`}>
                {language("isEnglish") === "true" ? "Auction ends in:" : ":پایان تخفیفات جشنواره"}
            </h6>

            <div className={` | text-nftCustom-text | flex flex-col | `}>
                <Countdown
                    date={Date.now() + 3455171970}
                    renderer={renderer}
                />

                <div className={` |  | flex justify-between items-center | ${language("isEnglish") === "true" ? `${spaceMono} text-xs font-normal` : `${iranSans} text-sm font-normal pl-2`}`}>
                    <p>
                        {language("isEnglish") === "true" ? "Hours" : "ساعت"}
                    </p>
                    <p className={` |  |  | ${language("isEnglish") === "true" ? "ml-4" : "mr-2"}`}>
                        {language("isEnglish") === "true" ? "Minutes" : "دقیقه"}
                    </p>
                    <p className={` |  |  | ${language("isEnglish") === "false" && "mr-1"}`}>
                        {language("isEnglish") === "true" ? "Seconds" : "ثانیه"}
                    </p>
                </div>
            </div>

            {bid && (
                <a 
                    href="https://github.com/FlashScript-Main" 
                    target="_blank" 
                    className={`mt-[1.875rem] h-[3.75rem] | text-nftCustom-text hover:text-nftCustom-cta font-semibold bg-nftCustom-cta hover:bg-nftCustom-text | grid place-content-center | border-4 border-nftCustom-cta rounded-[20px] main-transition-color`}
                >
                    {language("isEnglish") === "true" ? "Place Bid" : "قیمت پیشنهادی شما"}
                </a>
            )}
        </div>
    )

}

export default CountDownTimer