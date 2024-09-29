"use client";

import { spaceMono } from '@/utils/fonts';
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
        <div className={` | text-nftCustom-text | flex flex-col | `}>
            <div className={` | ${spaceMono} | flex justify-between items-center | `}>
                <span className={` | text-[2.375rem] font-bold |  | `}>{resultHours}</span>
                <span className={` | text-[1.75rem] font-bold |  | `}>:</span>
                <span className={` | text-[2.375rem] font-bold |  | `}>{resultMinutes}</span>
                <span className={` | text-[1.75rem] font-bold |  | `}>:</span>
                <span className={` | text-[2.375rem] font-bold |  | `}>{resultSeconds}</span>
            </div>

            <div className={` | text-xs font-normal ${spaceMono} | flex justify-between items-center | `}>
                <p>Hours</p>
                <p className={`ml-4 |  |  | `}>Minutes</p>
                <p>Seconds</p>
            </div>
        </div>
      );
    }
};

const CountDownTimer = () => {

    return (
        <div className={`p-[1.875rem] md:w-[18.4375rem] | bg-nftCustom-countdown_bg/50 |  | rounded-[20px]`}>
            <h6 className={`mb-1 | text-nftCustom-text text-xs font-normal ${spaceMono} |  | `}>
                Auction ends in:
            </h6>

            <Countdown
                date={Date.now() + 3455171970}
                renderer={renderer}
            />
        </div>
    )

}

export default CountDownTimer