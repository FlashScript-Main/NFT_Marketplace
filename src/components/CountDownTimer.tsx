"use client";

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

      return <span>{resultHours}:{resultMinutes}:{resultSeconds}</span>;
    }
};

const CountDownTimer = () => {

    return (
        <div className={` |  bg-nftCustom-countdown_bg/50 |  | `}>
            <Countdown
                date={Date.now() + 3455171970}
                renderer={renderer}
            />
        </div>
    )

}

export default CountDownTimer