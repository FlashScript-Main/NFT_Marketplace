"use client";

import { CreateAccountInputEn, CreateAccountInputFa, createAccountSchemaEn, createAccountSchemaFa } from "@/lib/schema";
import useUserStore from "@/stores/useUserStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input as NextUIInput, useDisclosure } from "@nextui-org/react";
import { Modal as NextUIModal, Button as NextUIButton } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useForm } from 'react-hook-form';
import CreateAccountInputText from "./CreateAccountInputText";
import { useEffect, useState } from "react";
import useMotionAnimations from "@/stores/useMotionAnimations";
import { Eye, EyeOff } from "lucide-react";

const NewAccountForm = ({ locale }: { locale: string }) => {

    const translateCreateAccount = useTranslations('Create-Account');
    const language = useTranslations("language");

    const zodResolverLangauge = language("isEnglish") === "true" ? createAccountSchemaEn : createAccountSchemaFa;

    const setUser = useUserStore((state) => state.setUser);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
    
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const toggleConfirmPasswordVisibility = () => setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

    const {isOpen, onOpen, onClose} = useDisclosure();

    // const userName = useUserStore((state) => state.username);
    // {userName === "" ? "No UserName" : userName}

    useEffect(() => {
        useMotionAnimations.persist.rehydrate();
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
        reset();
        console.log("User created:", data);
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
                    clearButton: ["md:mr-[8.7rem]"],
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
                    clearButton: ["md:mr-[8.7rem]"],
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
                    clearButton: ["md:mr-[8.7rem]"],
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
                    clearButton: ["md:mr-[8.7rem]"],
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
                className={`py-4 mt-[0.9375rem] | bg-nftCustom-cta hover:bg-nftCustom-text text-nftCustom-text hover:text-nftCustom-cta text-[1rem] leading-[140%] font-semibold disabled:bg-gray-500 |  | rounded-[20px] main-transition-color`}
            >
                {translateCreateAccount("Input-button")}
            </button>
            
            


            <div className="flex flex-wrap gap-3">
        {backdrops.map((b) => (
          <Button  
            key={b}
            variant="flat" 
            color="warning" 
            onPress={() => handleOpen(b)}
            className="capitalize"
          >
           {b}
          </Button>
        ))}  
      </div>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
        </form>
    );
}

export default NewAccountForm



/*
<input
                {...register("username")}
                type="text"
                placeholder="UserName"
                className={`px-4 py-2 |  |  | rounded`}
            />
            

            <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className={`px-4 py-2 |  |  | rounded`}
            />
            

            <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className={`px-4 py-2 |  |  | rounded`}
            />
            

            <input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm password"
                className={`px-4 py-2 |  |  | rounded`}
            />
            
*/










/*
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAccountSchema, CreateAccountInput } from "./validationSchema";
import { useUserStore } from "./userStore";

const CreateAccountForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateAccountInput>({
    resolver: zodResolver(createAccountSchema),
  });

  const setUser = useUserStore((state) => state.setUser);

  const onSubmit = (data: CreateAccountInput) => {
    // Save data to Zustand store
    setUser({ username: data.username, email: data.email, password: data.password });
    console.log("User created:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input {...register("username")} />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Password</label>
        <input type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label>Confirm Password</label>
        <input type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit">Create Account</button>
    </form>
  );
};

export default CreateAccountForm;

*/



/*
"use client";

import { SignUpSchemaType, signUpSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

export default function FormWithReactHookFormAndZod() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<SignUpSchemaType>({
        resolver: zodResolver(signUpSchema),
    });

    const onSubmit = async (data: SignUpSchemaType) => {
        // TODO: submit to server
        // ...
        await new Promise((resolve) => setTimeout(resolve, 1000));

        reset();

        console.log(data);
    };

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)} 
            className={` |  | flex flex-col gap-y-2 | `}
        >
            <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className={`px-4 py-2 |  |  | rounded`}
            />
            {errors.email && (
                <p className="text-red-500">
                    {`${errors.email.message}`}
                </p>
            )}

            <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className={`px-4 py-2 |  |  | rounded`}
            />
            {errors.password && (
                <p className="text-red-500">
                    {`${errors.password.message}`}
                </p>
            )}

            <input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm password"
                className={`px-4 py-2 |  |  | rounded`}
            />
            {errors.confirmPassword && (
                <p className="text-red-500">
                    {`${errors.confirmPassword.message}`}
                </p>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className={`py-2 | bg-blue-500 disabled:bg-gray-500 |  | rounded`}
            >
                Submit
            </button>
        </form>
    );

}
*/