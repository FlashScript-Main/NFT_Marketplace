"use client";

import useCreateAccountModal from "@/stores/useCreateAccountModal";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Spinner} from "@nextui-org/react";
import { Modal as NextUIModal, Button as NextUIButton } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const ResultModal = ({ isLoaderActive }: { isLoaderActive: boolean }) => {

    const translateCreateAccount = useTranslations('Create-Account');
    const language = useTranslations("language");

    const { isModalActive } = useCreateAccountModal();

    // const [showText, setShowText] = useState({
    //     isModalOpen: false,
    //     isSidebarVisible: true,
    //     isFormSubmitted: false,
    //     isLoading: false,
    // });

    // const handleOpen = () => {
    //     onOpen();
    // }

    // <motion.h3
    //     initial={{ opacity: 0, y: 10, color: "#333" }}
    //     animate={{ opacity: [1, 0], y: 0, color: ["#333", "#fc0341", "#22c55e"] }}
    //     transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
    //     className="text-center text-2xl font-semibold text-green-500"
    // > 
    //     {`New User Has been Authorized and Successfully Logged In`}
    // </motion.h3>

    const [state, setState] = useState({
        isCreatedVisible: true,
        isSendingVisible: true,
        isSuccessVisible: true,
    });

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setIsVisible(false);
    // }, 2000); // Visible for 2 seconds

    // const timer2 = setTimeout(() => {
    //   setIsVisible2(false);
    // }, 4000); // Visible for 2 seconds

    // return () => {clearTimeout(timer); clearTimeout(timer2); }; // Cleanup timer

    if (isModalActive) {
        
    const CreatedTimer = setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        isCreatedVisible: false,
      }));
    }, 2000); // Visible for 2 seconds

    const SendingTimer = setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        isSendingVisible: false,
      }));
    }, 4000); // Visible for 2 seconds

    const SuccessTimer = setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        isSuccessVisible: false,
      }));
    }, 6000); // Visible for 2 seconds

    return () => { clearTimeout(CreatedTimer); clearTimeout(SendingTimer); clearTimeout(SuccessTimer); }; // Cleanup timer
    }

  }, [isModalActive]);

    const variants = {
        initial: { opacity: 0, y: 20 }, // Start with opacity 0 and below the viewport (y: 50)
        fadeInUp: { opacity: 1, y: 0 }, // Move to position (y: 0) and fully visible (opacity: 1)
        fadeOutDown: { opacity: 0, y: 20 }, // Move downwards (y: 50) and fade out
    };

    return (
        <NextUIModal 
            backdrop="blur" 
            isOpen={isModalActive} 
            // isOpen={true} 
            hideCloseButton
            isDismissable={false} 
            isKeyboardDismissDisabled={true}
            placement="center"
            classNames={{
                body: "py-6",
                backdrop: "max-md:bg-[#292f46]/50 max-md:backdrop-opacity-40",
                base: "border-2 border-nftCustom-cta bg-white/90",
            }}
        >
            <ModalContent className="border-nftCustom-cta w-[25rem] h-[15.5rem]">
                <ModalBody className="border-2 border-yellow-500">
                    <motion.div className="relative w-full h-full border-2 border-blue-700">
                        <div style={{ padding: '20px', fontSize: '20px' }} className="absolute inset-0 border-2 border-rose-800">
                            {state.isCreatedVisible && (
                                <motion.div
                                initial={"initial"}
                                animate={"fadeInUp"}
                                exit={"fadeOutDown"}
                                variants={variants}     
                                transition={{ duration: 1 }}
                                >
                                This text will fade in from bottom and disappear down
                                </motion.div>
                            )}
                        </div>

                        <div style={{ padding: '20px', fontSize: '20px' }} className="absolute inset-0 border-2 border-indigo-600">
                            {state.isSendingVisible && (
                                <motion.div
                                initial="initial"
                                animate="fadeInUp"
                                exit="fadeOutDown"
                                variants={variants}
                                transition={{ duration: 1, delay: 2 }}
                                >
                                This text will fade in from bottom and disappear down
                                </motion.div>
                            )}
                        </div>

                        <div style={{ padding: '20px', fontSize: '20px' }} className="absolute inset-0 border-2 border-indigo-600">
                            {state.isSuccessVisible && (
                                <motion.div
                                initial="initial"
                                animate="fadeInUp"
                                exit="fadeOutDown"
                                variants={variants}
                                transition={{ duration: 1, delay: 4 }}
                                >
                                This text will fade in from bottom and disappear down
                                </motion.div>
                            )}
                        </div>
                    </motion.div>

                    <button>   
                        <span>
                            {isLoaderActive && <Spinner size="md" color="current" />}
                        </span>

                        <span>
                            {translateCreateAccount("Input-button")}
                        </span>
                    </button>
                </ModalBody>
            </ModalContent>
        </NextUIModal>
    )

}

export default ResultModal


/*

*/