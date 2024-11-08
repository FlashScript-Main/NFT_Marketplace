"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import useUserStore from "@/stores/useUserStore";
import { spaceMono } from "@/utils/fonts";

interface IntervalRefType {
    current: NodeJS.Timeout | null;
}

const UserSignedUp = () => {

    const language = useTranslations("language");

    const { username } = useUserStore();

    const CYCLES_PER_LETTER = 2;
    const SHUFFLE_TIME = 50;

    // const CHARS = "!@#$%^&*():{};|,.<>/?";
    const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const intervalRef = useRef<IntervalRefType["current"]>(null);

    const [text, setText] = useState(username);

    const scramble = () => {
        let pos = 0;

        intervalRef.current = setInterval(() => {
        const scrambled = username.split("")
            .map((char, index) => {
            if (pos / CYCLES_PER_LETTER > index) {
                return char;
            }

            const randomCharIndex = Math.floor(Math.random() * CHARS.length);
            const randomChar = CHARS[randomCharIndex];

            return randomChar;
            })
            .join("");

        setText(scrambled);
        pos++;

        if (pos >= username.length * CYCLES_PER_LETTER) {
            stopScramble();
        }
        }, SHUFFLE_TIME);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current || undefined);

        setText(username);
    };

    return (
        <Link href={`/${language("isEnglish") === "true" ? "en" : "fa"}/dashboard`}>
            <motion.button
                // whileHover={{
                //     scale: 1.025,
                // }}
                // whileTap={{
                //     scale: 0.975,
                // }}
                onMouseEnter={scramble}
                onMouseLeave={stopScramble}
                className={`px-4 py-2 relative overflow-hidden | bg-nftCustom-text hover:bg-nftCustom-cta text-nftCustom-cta hover:text-nftCustom-text uppercase font-semibold ${spaceMono} |  | rounded-[20px] border-4 border-nftCustom-text group transition-colors`}
            >
                <div className="relative z-10 flex items-center gap-2">
                    <span>{text}</span>
                </div>
            </motion.button>
        </Link>
    );

}

export default UserSignedUp