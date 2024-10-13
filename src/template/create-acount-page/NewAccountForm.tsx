"use client";

import { CreateAccountInputEn, CreateAccountInputFa, createAccountSchemaEn, createAccountSchemaFa } from "@/lib/schema";
import useUserStore from "@/stores/useUserStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from 'react-hook-form';
import CreateAccountInputText from "./CreateAccountInputText";
import { useEffect, useState } from "react";
import useMotionAnimations from "@/stores/useMotionAnimations";
import { Eye, EyeOff } from "lucide-react";
import ResultModal from "./ResultModal";

import { Input as NextUIInput, Spinner } from "@nextui-org/react";
import useCreateAccountModal from "@/stores/useCreateAccountModal";
import { useRouter } from "next/navigation";

const NewAccountForm = ({ locale }: { locale: string }) => {
    const router = useRouter();
    // console.log(locale)
    const translateCreateAccount = useTranslations('Create-Account');
    const language = useTranslations("language");

    const zodResolverLangauge = language("isEnglish") === "true" ? createAccountSchemaEn : createAccountSchemaFa;

    const setUser = useUserStore((state) => state.setUser);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
    
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const toggleConfirmPasswordVisibility = () => setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

    const { setIsModalActive } = useCreateAccountModal();

    const [isLoaderActive, setisLoaderActive] = useState(false);
    const [isClient, setIsClient] = useState(false);
    
    // const {isOpen, onOpen, onClose} = useDisclosure();
    // const handleOpen = () => {
    //     onOpen();
    // }

    // const userName = useUserStore((state) => state.username);
    // {userName === "" ? "No UserName" : userName}

    useEffect(() => {
        useMotionAnimations.persist.rehydrate();
        setIsClient(true);
    }, []);

    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting },
        reset,
    } = useForm<CreateAccountInputEn | CreateAccountInputFa>({
        resolver: zodResolver(zodResolverLangauge),
    });

    const onSubmit = (data: CreateAccountInputEn | CreateAccountInputFa) => {
        // Save data to Zustand store
        setUser({ username: data.username, email: data.email, password: data.password });
        setisLoaderActive(true);

        setIsModalActive(true);

        setTimeout(() => {
            setIsModalActive(false);
            setisLoaderActive(false);
            // if (isClient) {
            router.push(`/${locale}/`);
            // }
            // redirect(`/${locale}/`);
        }, 7000);
        
        // setTimeout(() => {
        //     setIsModalActive(false);
        // }, 5000);

        // setTimeout(() => {
        //     setIsModalActive(false);
        // }, 4000);
        reset();
    };

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)} 
            className={`xl:max-w-[20.625rem] |  | flex flex-col gap-y-[0.9375rem] | ${language("isEnglish") === "false" && "xl:ml-auto"}`}
        >
            <NextUIInput 
                {...register("username")}
                type="text"
                label={<CreateAccountInputText svg="username" text="Input-username" />}
                isClearable
                isInvalid={errors.username ? true : false}
                classNames={{
                    label: `pl-2 group-data-[focus=true]:mt-1 ${language("isEnglish") === "false" && "group-data-[focus=true]:absolute group-data-[focus=true]:-right-[2.5rem] group-data-[focus=true]:top-[0.8rem]"}`,
                    input: [
                        "text-nftCustom-cta text-base font-normal mt-1",
                        "group-data-[focus=true]:text-nftCustom-cta",
                    ],
                    inputWrapper: [
                        "rounded-[1.2rem]",
                        "group-data-[focus=true]:text-nftCustom-cta",
                    ],
                    clearButton: [`mr-[0.1rem]`],
                }}
                className="max-h-[3.7rem]"
            />
            {errors.username && (
                <p className={`-mt-[0.6rem] | text-rose-600 text-sm xl:text-base font-semibold |  | ${language("isEnglish") === "true" ? "ml-2" : "ml-auto mr-2"}`}>
                    {`${errors.username.message}`}
                </p>
            )}

            <NextUIInput 
                {...register("email")}
                type="email"
                label={<CreateAccountInputText svg="email" text="Input-email" />}
                isClearable
                isInvalid={errors.email ? true : false}
                classNames={{
                    label: `pl-2 group-data-[focus=true]:mt-1 ${language("isEnglish") === "false" && "group-data-[focus=true]:absolute group-data-[focus=true]:-right-[2.5rem] group-data-[focus=true]:top-[0.8rem]"}`,
                    input: [
                        "text-nftCustom-cta text-base font-normal mt-1",
                        "group-data-[focus=true]:text-nftCustom-cta",
                    ],
                    inputWrapper: [
                        "rounded-[1.2rem]",
                        "group-data-[focus=true]:text-nftCustom-cta",
                    ],
                    clearButton: ["mr-[0.1rem]"],
                }}
                className="max-h-[3.7rem]"
            />
            {errors.email && (
                <p className={`-mt-[0.6rem] | text-rose-600 text-sm xl:text-base font-semibold |  | ${language("isEnglish") === "true" ? "ml-2" : "ml-auto mr-2"}`}>
                    {`${errors.email.message}`}
                </p>
            )}

            <NextUIInput 
                {...register("password")}
                type={isPasswordVisible ? "text" : "password"}
                label={<CreateAccountInputText svg="password" text="Input-password" />}
                endContent={
                    <button 
                        className="invisible group-focus-within:visible group-data-[focus=true]:visible text-nftCustom-cta" 
                        type="button" 
                        onClick={togglePasswordVisibility} 
                        aria-label="toggle password visibility"
                    >
                      {isPasswordVisible ? ( <EyeOff /> ) : ( <Eye /> )}
                    </button>
                }
                isInvalid={errors.password ? true : false}
                classNames={{
                    label: `pl-2 group-data-[focus=true]:mt-1 ${language("isEnglish") === "false" && "group-data-[focus=true]:absolute group-data-[focus=true]:-right-[2.5rem] group-data-[focus=true]:top-[0.8rem]"}`,
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
            {errors.password && (
                <p className={`-mt-[0.6rem] | text-rose-600 text-sm xl:text-base font-semibold |  | ${language("isEnglish") === "true" ? "ml-2" : "ml-auto mr-2"}`}>
                    {`${errors.password.message}`}
                </p>
            )}

            <NextUIInput 
                {...register("confirmPassword")}
                type={isConfirmPasswordVisible ? "text" : "password"}
                label={<CreateAccountInputText svg="password" text="Input-password-confirm" />}
                endContent={
                    <button 
                        className="invisible group-focus-within:visible group-data-[focus=true]:visible text-nftCustom-cta" 
                        type="button" 
                        onClick={toggleConfirmPasswordVisibility} 
                        aria-label="toggle password visibility"
                    >
                      {isConfirmPasswordVisible ? ( <EyeOff /> ) : ( <Eye /> )}
                    </button>
                }
                isInvalid={errors.confirmPassword ? true : false}
                classNames={{
                    label: `pl-2 group-data-[focus=true]:mt-1 ${language("isEnglish") === "false" && "group-data-[focus=true]:absolute group-data-[focus=true]:-right-[2.5rem] group-data-[focus=true]:top-[0.8rem]"}`,
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
            {errors.confirmPassword && (
                <p className={`-mt-[0.6rem] | text-rose-600 text-sm xl:text-base font-semibold |  | ${language("isEnglish") === "true" ? "ml-2" : "ml-auto mr-2"}`}>
                    {`${errors.confirmPassword.message}`}
                </p>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className={`${isLoaderActive ? "py-2" : "py-4"} mt-[0.9375rem] | bg-nftCustom-cta hover:bg-nftCustom-text text-nftCustom-text hover:text-nftCustom-cta text-[1rem] leading-[140%] font-semibold disabled:bg-gray-500 |  | rounded-[20px] main-transition-color`}
            >
                {isLoaderActive ? <Spinner size="md" color="current" /> : translateCreateAccount("Input-button")}
            </button>

            <ResultModal isLoaderActive={isLoaderActive} />
        </form>
    );
}

export default NewAccountForm