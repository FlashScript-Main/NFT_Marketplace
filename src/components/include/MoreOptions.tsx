"use client";

import { iranSans, spaceMono } from "@/utils/fonts";
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import { Settings } from "lucide-react";
import { useTranslations } from "next-intl";
import AnimateMotionButton from "./AnimateMotionButton";

const MoreOptions = () => {

    const language = useTranslations("language");

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <div className={` |  |  | ${language("isEnglish") === "false" && `${iranSans}`}`}>
            <button 
                onClick={onOpen}
                className={`px-1 py-1 xl:py-2 xl:px-2 my-auto | text-nftCustom-text hover:text-nftCustom-cta bg-nftCustom-cta hover:bg-nftCustom-text | grid | rounded-full main-transition-color`}
            >
                <Settings />
            </button>

            <Modal 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                size="5xl"
                placement="top"
                backdrop="blur"
                hideCloseButton
                className={` | bg-nftCustom-background |  | border-2 border-nftCustom-cta`}
            >
                <ModalContent>
                    {() => (
                        <>
                        <ModalHeader className={` | text-center text-nftCustom-text text-base xl:text-xl font-normal xl:font-semibold | flex flex-col gap-1 | border-2 border-indigo-500`}>
                            {language("isEnglish") === "true" ? "More Options" : "گزینه های بیشتر"}
                        </ModalHeader>

                        <ModalBody>
                            <div className={` |  | grid grid-cols-2 | border-2 border-rose-500`}>
                                <div>
                                    {/* <ThemeSwitcher /> */}
                                </div>

                                <div>
                                    {/* <InstallPWA /> */}
                                    {/* <ChangeLanguage /> */}
                                    <AnimateMotionButton />
                                </div>
                            </div>
                        </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )

}

export default MoreOptions