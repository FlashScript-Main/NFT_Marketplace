import { Work_Sans } from 'next/font/google'
import { Space_Mono } from 'next/font/google'

const workSans_font = Work_Sans({
    subsets: ['latin'],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800", 
        "900",
    ],
})

const spaceMono_font = Space_Mono({
    subsets: ['latin'],
    weight: [
        "400",
        "700"
    ],
})

export const workSans = workSans_font.className;
export const spaceMono = spaceMono_font.className;