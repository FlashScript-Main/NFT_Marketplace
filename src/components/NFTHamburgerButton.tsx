"use client";

import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { useTranslations } from "next-intl";

const NFTHamburgerButton = () => {

    const language = useTranslations("language");

    const [active, setActive] = useState(false);

    const VARIANTS = {
        top: {
            open: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["25%", "50%", "50%"],
            },
            closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "25%"],
            },
        },
        middle: {
            open: {
                rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
                rotate: ["-45deg", "0deg", "0deg"],
            },
        },
        bottom: {
            open: {
                rotate: ["0deg", "0deg", "45deg"],
                bottom: ["25%", "50%", "50%"],
                left: "50%",
                right: `${language("isEnglish") === "true" ? "" : "calc(50% - 2.5px)%"}`,
            },
            closed: {
                rotate: ["45deg", "0deg", "0deg"],
                bottom: ["50%", "50%", "25%"],
                left: `${language("isEnglish") === "true" ? "calc(50% + 10px)" : ""}`,
                right: `${language("isEnglish") === "true" ? "" : "calc(50% - 2.5px)"}`,
            },
        },
    };

    return (
        <MotionConfig
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
        >
            <motion.button
                initial={false}
                animate={active ? "open" : "closed"}
                onClick={() => setActive((pv) => !pv)}
                className="relative h-10 w-10 rounded-full bg-white/0 transition-colors group"
            >
                <motion.span
                    variants={VARIANTS.top}
                    className="absolute h-1 w-8 bg-nftCustom-text rounded-full"
                    style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                />
                <motion.span
                    variants={VARIANTS.middle}
                    className="absolute h-1 w-8 bg-nftCustom-text rounded-full"
                    style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                />
                <motion.span
                    variants={VARIANTS.bottom}
                    className="absolute h-1 w-3 bg-nftCustom-text rounded-full"
                    style={{
                        x: "-50%",
                        y: "50%",
                        bottom: "35%",
                        left: `${language("isEnglish") === "true" ? "calc(50% + 10px)" : ""}`,
                        right: `${language("isEnglish") === "true" ? "" : "calc(50% - 10px)"}`,
                    }}
                />
            </motion.button>
        </MotionConfig>
    );

}

export default NFTHamburgerButton

/*



const AnimatedHamburgerButton = () => {
  
};


*/