import { Work_Sans } from 'next/font/google'

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

export const workSans = workSans_font.className;