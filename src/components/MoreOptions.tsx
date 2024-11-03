"use client";

import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@nextui-org/dropdown"
import { Settings } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import InstallPWA from "./include/InstallPWA";
import { customThemes } from "@/constant";

const MoreOptions = () => {

  const language = useTranslations("language");

  const pathName = usePathname();
    const router = useRouter();
  
    const path = pathName.split("/").slice(2).join("/");

  const { setTheme } = useTheme();

    const items = [
        {
          key: "new",
          label: "New file",
        },
        {
          key: "copy",
          label: "Copy link",
        },
        {
          key: "edit",
          label: "Edit file",
        },
        {
          key: "delete",
          label: "Delete file",
        }
      ];

    return (
        <Dropdown 
            backdrop="blur" 
            classNames={{
                trigger: "outline-none",
                base: "border-2 border-rose-500 w-[50rem]"
            }}
        >
            <DropdownTrigger>
                <button className={`px-1 py-1 xl:py-2 xl:px-2 my-auto | text-nftCustom-text hover:text-nftCustom-cta bg-nftCustom-cta hover:bg-nftCustom-text | grid | rounded-full main-transition-color`}>
                    <Settings />
                </button>
            </DropdownTrigger>

            <DropdownMenu items={items} className={`relative  |  |  | border-2 border-blue-500`}>
              <DropdownSection title="Language" classNames={{heading: "text-4xl"}} className={`absolute inset-0 ml-[40rem] h-fit w-fit |  |  | border-2 border-orange-500`}>  
                <DropdownItem
                    key="new"
                    className={`absolute inset-0 ml-40 h-fit w-fit |  |  | `}
                    onClick={() => router.push(`/en/${path}`)}
                >
                    English
                </DropdownItem>

                <DropdownItem
                    key="new"
                    className={`absolute inset-0 ml-28 h-fit w-fit |  |  | `}
                    onClick={() => router.push(`/fa/${path}`)}
                >
                    فارسی 
                </DropdownItem>
              </DropdownSection>

              <DropdownSection title="Theme">
              {customThemes.map((themeOption) => (
                    <DropdownItem 
                        key={themeOption.value} 
                        className={`${themeOption.textColor} ${themeOption.bgColor} !font-semibold z-[100] absolute inset-0 ml-28 h-fit w-fit mt-10`} 
                        onClick={() => setTheme(themeOption.value)}
                    >
                        {language("isEnglish") === "true" ? themeOption.nameEn : themeOption.nameFa}
                    </DropdownItem>
                ))}
              </DropdownSection>

              <DropdownSection title="PWA">
                <DropdownItem>
                  {/* <InstallPWA /> */}
                </DropdownItem>
              </DropdownSection>




                {/* {(item) => (
                <DropdownItem
                    key={item.key}
                    className={` |  |  | border-2 border-orange-500`}
                    classNames={{
                      base: "col-span-1"
                    }}
                > 
                    {item.label}
                </DropdownItem>
                )} */}
            </DropdownMenu>
    </Dropdown>
    )

}

export default MoreOptions