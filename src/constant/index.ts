import { DiscordLogoSVG, InstagramLogoSVG, TwitterLogoSVG, YoutubeLogoSVG } from "@/interface"

export const homeInfo = [
    { key: "title", value: "Landing page", className: "text-nftCustom-text" },
    { key: "isEnglish", value: "true", className: "text-nftCustom-text" }
]

export const navbarLinks = [
    { 
        key: 1, 
        value: "Marketplace", 
        href: "marketplace", 
        language: "marketplace" 
    },
    { 
        key: 2, 
        value: "Rankings", 
        href: "rankings", 
        language: "rankings" 
    },
    { 
        key: 3, 
        value: "Connect a wallet", 
        href: "connect-wallet", 
        language: "connect-wallet" 
    },
]

export const footerLinks = [
    { 
        id: 1,
        value: "Marketplace",
        href: "marketplace",
        language: "marketplace",
    },
    { 
        id: 2,
        value: "Rankings",
        href: "rankings",
        language: "rankings",
    },
    {
        id: 3,
        value: "Connect a wallet",
        href: "connect-wallet", 
        language: "connect-wallet",
    }
]

export const footerIcons = [
    {
        id: 1,
        value: DiscordLogoSVG,
    },
    {
        id: 2,
        value: YoutubeLogoSVG,
    },
    {
        id: 3,
        value: TwitterLogoSVG,
    },
    {
        id: 4,
        value: InstagramLogoSVG,
    },
]

export const discoverNumbers = [
    { id: 1, value: 240, text: "Total Sale" },
    { id: 2, value: 100, text: "Auctions" },
    { id: 3, value: 500, text: "Artists" },
]