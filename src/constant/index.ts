import { DiscordLogoSVG, InstagramLogoSVG, TwitterLogoSVG, YoutubeLogoSVG } from "@/interface"

export const homeInfo = [
    { key: "title", value: "Landing page", className: "text-nftCustom-text" },
    { key: "isEnglish", value: "true", className: "text-nftCustom-text" }
];

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
];

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
];

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
];

export const discoverNumbers = [
    { id: 1, value: 240, text: "Total Sale" },
    { id: 2, value: 100, text: "Auctions" },
    { id: 3, value: 500, text: "Artists" },
];

export const trendingInfo = [
    {
        id: 1,
        bigImage: "animals-dog.jpg",
        smallImageOne: "animals-cat.jpg",
        smallImageTwo: "animals-bear.jpg",
        imageAlt: "Colorfull Animal NFT",
        numberImage: 1025,
        title: "DSGN Animals",
        href: "/",
        avatarImage: "mr-fox-avatar.jpg",
        avatarName: "MrFox",
        className: "",
    },
    {
        id: 2,
        bigImage: "mushrooms-one.jpg",
        smallImageOne: "mushrooms-two.jpg",
        smallImageTwo: "mushrooms-three.jpg",
        imageAlt: "Colorfull Animal NFT",
        numberImage: 521,
        title: "Magic Mushrooms",
        href: "/",
        avatarImage: "shroomie-avatar.jpg",
        avatarName: "Shroomie",
        className: "md:max-xl:ml-auto xl:mx-auto",
    },
    {
        id: 3,
        bigImage: "machines-one.jpg",
        smallImageOne: "machines-two.jpg",
        smallImageTwo: "machines-three.jpg",
        imageAlt: "Colorfull Animal NFT",
        numberImage: 209,
        title: "Disco Machines",
        href: "/",
        avatarImage: "bekind-robot-avatar.jpg",  
        avatarName: "BeKind2Robots",
        className: "md:max-xl:hidden xl:ml-auto",
    },
];

export const topCreatorsInfo = [
    {
        id: 1,
        rank: 1,
        avatarImage: "keepitreal-avatar.jpg",
        avatarName: "Keepitreal",
        className: "",
        href: "/",
        numberSales: 34.53,
    },
    {
        id: 2,
        rank: 2,
        avatarImage: "digilab-avatar.jpg",
        avatarName: "DigiLab",
        className: "",
        href: "/",
        numberSales: 32.13,
    },
    {
        id: 3,
        rank: 3,
        avatarImage: "gravityone-avatar.jpg",
        avatarName: "GravityOne",
        className: "",
        href: "/",
        numberSales: 28.93,
    },
    {
        id: 4,
        rank: 4,
        avatarImage: "juanie-avatar.jpg",
        avatarName: "Juanie",
        className: "",
        href: "/",
        numberSales: 25.30,
    },
    {
        id: 5,
        rank: 5,
        avatarImage: "bluewhale-avatar.jpg",
        avatarName: "BlueWhale",
        className: "",
        href: "/",
        numberSales: 22.22,
    },
    {
        id: 6,
        rank: 6,
        avatarImage: "mr-fox-avatar.jpg",
        avatarName: "Mr Fox",
        className: "max-md:hidden",
        href: "/",
        numberSales: 19.28,
    },
    {
        id: 7,
        rank: 7,
        avatarImage: "shroomie-avatar.jpg",
        avatarName: "Shroomie",
        className: "max-xl:hidden",
        href: "/",
        numberSales: 18.75,
    },
    {
        id: 8,
        rank: 8,
        avatarImage: "robotica-avatar.jpg",
        avatarName: "Robotica",
        className: "max-xl:hidden",
        href: "/",
        numberSales: 16.21,
    },
    {
        id: 9,
        rank: 9,
        avatarImage: "rustyrobot-avatar.jpg",
        avatarName: "RustyRobot",
        className: "max-xl:hidden",
        href: "/",
        numberSales: 15.88,
    },
    {
        id: 10,
        rank: 10,
        avatarImage: "animakid-avatar.png",
        avatarName: "Animakid",
        className: "max-xl:hidden",
        href: "/",
        numberSales: 15.25,
    },
    {
        id: 11,
        rank: 11,
        avatarImage: "dotgu-avatar.jpg",
        avatarName: "Dotgu",
        className: "max-xl:hidden",
        href: "/",
        numberSales: 14.01,
    },
    {
        id: 12,
        rank: 12,
        avatarImage: "ghiblier-avatar.jpg",
        avatarName: "Ghiblier",
        className: "max-xl:hidden",
        href: "/",
        numberSales: 13.86,
    }
];