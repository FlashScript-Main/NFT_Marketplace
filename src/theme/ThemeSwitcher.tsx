"use client"

import * as React from "react"
import { Settings } from "lucide-react"
import { useTheme } from "next-themes"
import { Button as NextUIButton } from "@nextui-org/react";
import {
    Dropdown as NextUIDropdown,
    DropdownTrigger as NextUIDropdownTrigger,
    DropdownMenu as NextUIDropdownMenu,
    DropdownItem as NextUIDropdownItem,
} from "@nextui-org/dropdown";

// You can add more properties to it 👇🏻
const customThemes = [
    { name: "nftDefault", color: "bg-purple-500" },
    { name: "red", color: "bg-red-500" },
    { name: "blue", color: "bg-blue-500" },
    { name: "green", color: "bg-green-500" },
]

const ThemeSwitcher = () => {

    const { setTheme } = useTheme();

    return (
        <NextUIDropdown backdrop="blur">
            <NextUIDropdownTrigger>
                <NextUIButton isIconOnly color="danger" aria-label="More Options">
                    <Settings />
                </NextUIButton>  
            </NextUIDropdownTrigger>

            <NextUIDropdownMenu variant="faded" aria-label="Static Actions">
                {customThemes.map((themeOption) => (
                    <NextUIDropdownItem 
                        key={themeOption.name} 
                        className={`${themeOption.color}`} 
                        onClick={() => setTheme(themeOption.name)}
                    >
                        {themeOption.name}
                    </NextUIDropdownItem>
                ))}
            </NextUIDropdownMenu>
        </NextUIDropdown>
    )

}

export default ThemeSwitcher


/*
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Open Menu
        </Button>
      </DropdownTrigger>

      <DropdownMenu variant="faded" aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
*/


/*
    ShadCN Button
    
    <Button variant="outline" size="icon">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
    </Button>
*/