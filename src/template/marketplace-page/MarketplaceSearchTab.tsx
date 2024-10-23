"use client";

import { users } from "@/constant";
import useNFTCollections from "@/hooks/useNFTCollections";
import { Autocomplete, AutocompleteItem, Avatar, Button } from "@nextui-org/react";
import { SearchIcon } from "lucide-react";
import { Key, useCallback, useEffect, useState } from "react";

const MarketplaceSearchTab = ({ locale }: { locale: string }) => {

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

            <div>
                isLoading: {isLoading}
            </div>
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