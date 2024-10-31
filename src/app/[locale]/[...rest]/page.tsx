import { MotionH1, MotionP, MotionSpan } from "@/animations/motion-provider";
import { charVariants } from "@/animations/motion-variants";
import { GlobalMotionMain } from "@/animations/MotionAnimations";
import { SectionToScroll } from "@/animations/ScrollAnimations";
import { iranSans } from "@/utils/fonts";
import { useTranslations } from "next-intl";

const NotFoundPage = () => {

    const translateNotFound = useTranslations('NotFound');
    const language = useTranslations("language");

    return (
        <GlobalMotionMain className={` | selection:text-nftCustom-cta selection:bg-nftCustom-text |  | ${language("isEnglish") === "false" && `${iranSans}`}`}>
            <SectionToScroll className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto py-[1.875rem] md:py-10 xl:py-20 |  |  | ${language("isEnglish") === "false" && "text-end"}`}>
                <MotionH1 
                    initial="hidden"
                    whileInView="reveal"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ staggerChildren: 0.02, delay: 1.5 }} 
                    className={`mb-[0.625rem] md:mb-5 | text-nftCustom-text text-[1.75rem] md:text-[2.375rem] xl:text-[3.1875rem] leading-[140%] md:leading-[120%] xl:leading-[110%] font-semibold |  | `}
                >
                    {translateNotFound("title").split("").map(char => (
                        <MotionSpan
                            key={char}
                            transition={{ duration: 1.75 }}
                            variants={charVariants}
                        >
                            {char}
                        </MotionSpan>
                    ))}
                </MotionH1>

                <MotionP 
                    initial="hidden"
                    whileInView="reveal"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ staggerChildren: 0.02, delay: 1.5 }}
                    className={` | text-nftCustom-text text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal |  | `}
                >
                    {translateNotFound("description").split("").map(char => (
                        <MotionSpan
                            key={char}
                            transition={{ duration: 1 }}
                            variants={charVariants}
                        >
                            {char}
                        </MotionSpan>
                    ))}
                </MotionP>
            </SectionToScroll>
        </GlobalMotionMain>
    )

}

export default NotFoundPage

// "use client";

// // [local]/app/not-found.js
// import { useEffect } from 'react';
// import { useRouter } from "next/navigation";
// import { useTranslations } from 'next-intl';


// const NotFoundPage = () => {

//     const language = useTranslations("language");

//     const router = useRouter();

//     // ${language("isEnglish") === "true" ? "" : ""}

//   useEffect(() => {
//     // Redirect to the homepage after a short delay
//     const timer = setTimeout(() => {
//         if (language("isEnglish") === "true") {
//             router.push('/en/'); // Redirect to home page
//         }
//         else {
//             router.push('/fa/'); // Redirect to home page
//         }
//     }, 0); // You can change the delay (in milliseconds) if you want

//     return () => clearTimeout(timer); // Clean up the timer on unmount
//   }, [router, language]);

//   return null; // Optionally return null or a loading indicator
// };

// export default NotFoundPage;