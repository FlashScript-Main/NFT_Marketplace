"use client";

import { MotionDiv, MotionH5, MotionP, MotionSpan } from "@/animations/motion-provider";
import { DivToScroll } from "@/animations/ScrollAnimations";
import { users } from "@/constant";
import useNFTCollections from "@/hooks/useNFTCollections";
import { spaceMono } from "@/utils/fonts";
import { Autocomplete, AutocompleteItem, Avatar, Button } from "@nextui-org/react";
import { SearchIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Key, useCallback, useState } from "react";

const MarketplaceSearchTab = ({ locale }: { locale: string }) => {

    const language = useTranslations("language");

    const [fetchedNFTs, setFetchedNFTs] = useState<FetchedNFTsDataType[] | null>(null);

    const [selectedKey, setSelectedKey] = useState<Key | null>(null);

    const onSelectionChange = useCallback((key: Key | null) => {
        if (key) {
            setSelectedKey(key)
        }
    }, []);

    const { isLoading } = useNFTCollections(selectedKey, setFetchedNFTs);

    console.log(fetchedNFTs);

    return (
        <div className={`mt-[3.5rem] |  |  | border-2 border-indigo-500`}>
            <div className={` |  |  | border-2 border-yellow-500`}>
                <Autocomplete
                    placeholder="Search Top Collections"
                    isDisabled={isLoading}
                    radius="lg"
                    variant="faded"
                    startContent={<SearchIcon className="text-rose-400" strokeWidth={2.5} size={20} />}
                    scrollShadowProps={{ isEnabled: false }}
                    onSelectionChange={onSelectionChange}
                    // listboxProps={{
                    //     emptyContent: 'Your own empty content text.'
                    // }}
                    classNames={{
                        base: "w-[20rem] mx-auto",
                        listboxWrapper: "max-h-[320px]",
                        selectorButton: "text-default-500"
                    }}
                    defaultItems={users}
                    inputProps={{
                        classNames: {
                            input: "ml-1",
                            inputWrapper: "h-[48px]",
                        },
                    }}
                    listboxProps={{
                        hideSelectedIcon: true,
                        itemClasses: {
                            base: [
                                "rounded-medium",
                                "text-default-500",
                                "transition-opacity",
                                "data-[hover=true]:text-foreground",
                                "dark:data-[hover=true]:bg-default-50",
                                "data-[pressed=true]:opacity-70",
                                "data-[hover=true]:bg-default-200",
                                "data-[selectable=true]:focus:bg-default-100",
                                "data-[focus-visible=true]:ring-default-500",
                            ],
                        },
                    }}
                    aria-label="Search Top Collections"
                    popoverProps={{
                        offset: 10,
                        classNames: {
                            base: "rounded-large",
                            content: "p-1 border-small border-default-100 bg-background border-2 border-rose-500",
                        },
                    }}
                    className="max-w-xs"
                >
                    {(item) => (
                        <AutocompleteItem 
                            key={item.value} 
                            textValue={item.name}
                        >
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <Avatar 
                                    alt={item.name} 
                                    className="flex-shrink-0" 
                                    size="sm" 
                                    src={item.avatar} 
                                />

                                <div className="flex flex-col">
                                    <span className="text-small">{item.name}</span>
                                    <span className="text-tiny text-default-400">{item.team}</span>
                                </div>
                            </div>

                            <Button
                                className="border-small mr-0.5 font-medium shadow-small"
                                radius="full"
                                size="sm"
                                variant="bordered"
                            >
                                Add
                            </Button>
                        </div>
                        </AutocompleteItem>
                    )}
                </Autocomplete>

                <p className="mt-1 text-small text-default-500">Current selected animal: {selectedKey}</p>
            </div>

            <DivToScroll className={` |  | grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1.875rem] | border-2 border-r-rose-500`}>
                {fetchedNFTs && fetchedNFTs.map((card, index) => 
                    card.image_url && (
                        <MotionDiv
                            initial={{ y: "20%", opacity: 0, }}
                            whileInView={{ y: "0%", opacity: 1, }}
                            transition={{ delay: 0.025 * (index + 0.025), duration: 0.5, ease: "easeInOut", }}
                            viewport={{ once: true, margin: "-50px" }}
                            key={card.id}
                            className={`overflow-hidden |  |  | rounded-[20px] group `}
                        >
                            <a 
                                // href={`/${locale}/${card.href}`}
                            >
                                <div className={`w-[19.6875rem] h-[14.875rem] md:w-[20.625rem] md:h-[18.4375rem] overflow-hidden |  |  | `}>
                                    <Image 
                                        src={`/${card.image}`}
                                        alt={`${card.titleEn} Image`}
                                        width={330}
                                        height={295}
                                        className={`max-md:w-[19.6875rem] max-md:h-[14.875rem] md:w-full object-cover |  |  | group-hover:scale-110 duration-500 transition-transform`}
                                    />
                                </div>

                                <div className={`px-5 pt-5 pb-6 | bg-nftCustom-background | flex flex-col gap-[1.5625rem] | `}>
                                    <div>
                                        <MotionH5 
                                            initial={{ x: "20%", opacity: 0 }}
                                            whileInView={{ x: "0%", opacity: 1 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ staggerChildren: 0.02, delay: 0.025 * (index + 0.05), duration: 0.5 }}
                                            className={`mb-[0.3125rem] | text-nftCustom-text group-hover:text-nftCustom-cta text-[1.375rem] font-semibold capitalize |  | main-transition-color ${language("isEnglish") === "false" && "text-end"}`}
                                        >
                                            {language("isEnglish") === "true" ? card.titleEn : card.titleFa}
                                        </MotionH5>

                                        <MotionDiv
                                            initial={{ x: "-20%", opacity: 0 }}
                                            whileInView={{ x: "0%", opacity: 1 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ staggerChildren: 0.02, delay: 0.025 * (index + 0.075), duration: 0.5 }} 
                                            className={` |  | flex items-center gap-3 | ${language("isEnglish") === "true" ? "justify-start" : "justify-end"}`}
                                        >
                                            <Image 
                                                src={`/${card.artistAvatar}`}
                                                alt={`${card.artistName} Avatar`}
                                                width={300}
                                                height={300}
                                                className={`w-6 h-6 object-cover rounded-full |  |  | `}
                                            />

                                            <span className={` | text-nftCustom-text text-base font-normal ${spaceMono} |  | `}>
                                                {card.artistName}
                                            </span>
                                        </MotionDiv>
                                    </div>

                                    <div className={` |  | flex flex-col gap-2 md:gap-[0.4rem] | `}>
                                        <div className={` |  | flex justify-between items-center | ${language("isEnglish") === "false" && "flex-row-reverse"}`}>
                                            <MotionP
                                                initial={{ x: "-20%", opacity: 0 }}
                                                whileInView={{ x: "0%", opacity: 1 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ staggerChildren: 0.02, delay: 0.01 * (index + 0.025), duration: 0.5, ease: "easeIn" }} 
                                                className={` | text-nftCustom-c_l_text text-xs font-normal ${spaceMono} |  | `}
                                            >
                                                {language("isEnglish") === "true" ? "Price" : "قیمت"}
                                            </MotionP>

                                            <MotionP 
                                                initial={{ x: "-20%", opacity: 0 }}
                                                whileInView={{ x: "0%", opacity: 1 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ staggerChildren: 0.02, delay: 0.01 * (index + 0.025), duration: 0.5, ease: "easeIn" }} 
                                                className={` | text-nftCustom-c_l_text text-xs font-normal ${spaceMono} |  | `}
                                            >
                                                {language("isEnglish") === "true" ? "Highest Bid" : "بالاترین پیشنهاد"}
                                            </MotionP>
                                        </div>

                                        <div className={` |  | flex justify-between items-center | ${language("isEnglish") === "false" && "flex-row-reverse"}`}>
                                            <MotionSpan 
                                                initial={{ y: "20%", opacity: 0 }}
                                                whileInView={{ y: "0%", opacity: 1 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ staggerChildren: 0.02, delay: 0.01 * (index + 0.025), duration: 0.5, ease: "easeInOut" }} 
                                                className={` | text-nftCustom-text text-xs md:text-base font-normal ${spaceMono} |  | `}
                                            >
                                                {card.price} ETH
                                            </MotionSpan>

                                            <MotionSpan 
                                                initial={{ y: "20%", opacity: 0 }}
                                                whileInView={{ y: "0%", opacity: 1 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ staggerChildren: 0.02, delay: 0.01 * (index + 0.025), duration: 0.5, ease: "easeInOut" }} 
                                                className={` | text-nftCustom-text text-xs md:text-base font-normal ${spaceMono} |  | `}
                                            >
                                                {card.highestBid} wETH
                                            </MotionSpan>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </MotionDiv>
                    )
                )}
            </DivToScroll>
        </div>
    )

}

export default MarketplaceSearchTab

/*
Slots
base: The main wrapper of the autocomplete. This wraps the input and popover components.
listboxWrapper: The wrapper of the listbox. This wraps the listbox component, this slot is used on top of the scroll shadow component.
listbox: The listbox component. This is the component that wraps the autocomplete items.
popoverContent: The popover content slot. Use this to modify the popover content styles.
endContentWrapper: The wrapper of the end content. This wraps the clear button and selector button.
clearButton: The clear button slot.
selectorButton: The selector button slot.
Data Attributes
Autocomplete has the following attributes on the base element:

data-invalid: When the autocomplete is invalid. Based on isInvalid prop.
data-open: Indicates if the autocomplete's popover is open.
Autocomplete has the following attributes on the selectorButton element:

data-open: Indicates if the autocomplete's popover is open.
Autocomplete has the following attributes on the clearButton element:

data-visible: Indicates if the autocomplete's clear button is visible. By default it is visible when hovering the autocomplete and when the autocomplete has a value (desktop), or when the autocomplete has a value (mobile).
AutocompleteItem has the following attributes on the base element:

data-disabled: When the autocomplete item is disabled. Based on autocomplete disabledKeys prop.
data-selected: When the autocomplete item is selected. Based on autocomplete selectedKey prop.
data-hover: When the autocomplete item is being hovered. Based on useHover
data-pressed: When the autocomplete item is pressed. Based on usePress
data-focus: When the autocomplete item is being focused. Based on useFocusRing.
data-focus-visible: When the autocomplete item is being focused with the keyboard. Based on useFocusRing.
*/


/*
<div className={`mt-[3.5rem] |  |  | `}>
            <DivToScroll className={` |  | grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1.875rem] | `}>
*/