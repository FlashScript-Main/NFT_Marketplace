import { DiscordLogoSVG, InstagramLogoSVG, TwitterLogoSVG, YoutubeLogoSVG } from "@/interface"
import ArtistCollectionTab from "@/template/artist-page/ArtistCollectionTab";
import ArtistCreatedTab from "@/template/artist-page/ArtistCreatedTab";
import ArtistOwnedTab from "@/template/artist-page/ArtistOwnedTab";
import MarketplaceCollectionsTab from "@/template/marketplace-page/MarketplaceCollectionsTab";
import MarketplaceNFTsTab from "@/template/marketplace-page/MarketplaceNFTsTab";
import MarketplaceSearchTab from "@/template/marketplace-page/MarketplaceSearchTab";
import RankingsAllTimeTab from "@/template/rankings-page/RankingsAllTimeTab";
import RankingsThisMonthTab from "@/template/rankings-page/RankingsThisMonthTab";
import RankingsThisWeekTab from "@/template/rankings-page/RankingsThisWeekTab";
import RankingsTodayTab from "@/template/rankings-page/RankingsTodayTab";

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
        titleEn: "DSGN Animals",
        titleFa: "حیوانات",
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
        titleEn: "Magic Mushrooms",
        titleFa: "قارچ‌های جادویی",
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
        titleEn: "Disco Machines",
        titleFa: "ربات های دیسکو",
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

export const categories = [
    {
        id: 1,
        href: "art",
        blurImage: "art-category.jpg",
        iconImage: "paint-brush.png",
        titleEn: "Art",
        titleFa: "هنر",
    },
    {
        id: 2,
        href: "collectibles",
        blurImage: "icecream-ape.jpg",
        iconImage: "swatches.png",
        titleEn: "Collectibles",
        titleFa: "کلکسیون ها",
    },
    {
        id: 3,
        href: "music",
        blurImage: "music-category.jpg",
        iconImage: "music-notes.png",
        titleEn: "Music",
        titleFa: "موسیقی",
    },
    {
        id: 4,
        href: "photography",
        blurImage: "photography-category.jpg",
        iconImage: "camera.png",
        titleEn: "Photography",
        titleFa: "عکاسی",
    },
    {
        id: 5,
        href: "video",
        blurImage: "video-category.jpg",
        iconImage: "video-camera.png",
        titleEn: "Video",
        titleFa: "ویدیو",
    },
    {
        id: 6,
        href: "utility",
        blurImage: "utility-category.jpg",
        iconImage: "magicwand.png",
        titleEn: "Utility",
        titleFa: "ابزارها",
    },
    {
        id: 7,
        href: "sport",
        blurImage: "sport-category.jpg",
        iconImage: "basketball.png",
        titleEn: "Sport",
        titleFa: "ورزش",
    },
    {
        id: 8,
        href: "virtual-worlds",
        blurImage: "virtualworlds-category.jpg",
        iconImage: "planet.png",
        titleEn: "Virtual Worlds",
        titleFa: "دنیاهای مجازی",
    },
]

export const discoverMoreInfo = [
    {
        id: 1,
        href: "/",
        image: "distant-galaxy.jpg",
        titleEn: "Distant Galaxy",
        titleFa: "کهکشان دوردست",
        avatarImage: "moondancer-avatar.jpg",
        avatarName: "MoonDancer",
        price: "1.63",
        highestBid: "0.33",
        className: "",
    },
    {
        id: 2,
        href: "/",
        image: "life-on-edena.jpg",
        titleEn: "Life on Edena",
        titleFa: "زندگی در ادنا",
        avatarImage: "nebulakid-avatar.jpg",
        avatarName: "NebulaKid",
        price: "0.89",
        highestBid: "0.27",
        className: "",
    },
    {
        id: 3,
        href: "/",
        image: "astro-fiction.jpg",
        titleEn: "AstroFiction",
        titleFa: "داستان فضایی",
        avatarImage: "dotgu-avatar.jpg",
        avatarName: "Spaceone",
        price: "1.45",
        highestBid: "0.31",
        className: "md:max-xl:hidden",
    },
];

export const howItWorksInfo = [
    {
        id: 1,
        image: "setup-your-wallet.png",
        imageAlt: "Wallet",
        titleEn: "Setup your wallet",
        titleFa: "راه‌اندازی کیف پول",
        textEn: "Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.",
        textFa: "کیف پول مورد نظر خود را راه‌اندازی کنید و آن را با کلیک روی نماد کیف پول در گوشه بالا سمت راست به ما متصل کنید",
    },
    {
        id: 2,
        image: "create-collection.png",
        imageAlt: "Collection",
        titleEn: "Create Collection",
        titleFa: "ایجاد مجموعه",
        textEn: "Upload your work and setup your collection. Add a description, social links and floor price.",
        textFa: "اثر خود را آپلود کرده و مجموعه خود را راه‌اندازی کنید، توضیحات، لینک‌های اجتماعی و قیمت پایه را اضافه کنید",
    },
    {
        id: 3,
        image: "start-earning.png",
        imageAlt: "Earning",
        titleEn: "Start Earning",
        titleFa: "شروع به کسب درآمد",
        textEn: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
        textFa: "بین حراج‌ها و لیست‌های با قیمت ثابت انتخاب کنید و با فروش توکن‌های دیجیتال خود یا معامله آنها شروع به کسب درآمد کنید",
    },
];

export const connectWalletProviders = [
    {
        id: 1,
        image: "metamask.png",
        imageAlt: "Metamask",
        title: "Metamask",
    },
    {
        id: 2,
        image: "wallet-connect.png",
        imageAlt: "Wallet Connect",
        title: "Wallet Connect",
    },
    {
        id: 3,
        image: "coinbase.png",
        imageAlt: "Coinbase",
        title: "Coinbase",
    },
];

export const ArtistInfoLinks = [
    {
        id: 1,
        svgIcon: "GlobeSVG",
        imageAlt: "Website",
    },
    {
        id: 2,
        svgIcon: "DiscordLogoSVG",
        imageAlt: "Twitter",
    },
    {
        id: 3,
        svgIcon: "YoutubeLogoSVG",
        imageAlt: "YouTube",
    },
    {
        id: 4,
        svgIcon: "TwitterLogoSVG",
        imageAlt: "Twitter",
    },
    {
        id: 5,
        svgIcon: "InstagramLogoSVG",
        imageAlt: "Instagram",
    },
];

export const artistTabsDetails = [
    {
        id: 1,
        titleEn: "Created",
        titleFa: "ایجاد شده",
        content: ArtistCreatedTab
    },
    {
        id: 2,
        titleEn: "Owned",
        titleFa: "مالک",
        content: ArtistOwnedTab
    },
    {
        id: 3,
        titleEn: "Collection",
        titleFa: "مجموعه",
        content: ArtistCollectionTab
    },
];

export const nftInfoTags = [
    {
        id: 1,
        textEn: "animation",
        textFa: "انیمیشن",
    },
    {
        id: 2,
        textEn: "illustration",
        textFa: "تصویرسازی",
    },
    {
        id: 3,
        textEn: "moon",
        textFa: "ماه",
    },
    {
        id: 4,
        textEn: "spaceship",
        textFa: "سفینه فضایی",
    },
];

export const marketplaceTabsDetails = [
    {
        id: 1,
        titleEn: "NFTs",
        titleFa: "توکن ها",
        content: MarketplaceNFTsTab
    },
    {
        id: 2,
        titleEn: "Collections",
        titleFa: "مجموعه ها",
        content: MarketplaceCollectionsTab
    },
    {
        id: 3,
        titleEn: "Search",
        titleFa: "جستجو",
        content: MarketplaceSearchTab
    },
];

export const topCollectionUsers = [
    {
        id: 1,
        value: "boredapeyachtclub",
        name: "Bored Ape Yacht Club",
        avatar: "boredapeyachtclub.png",
        volume: "2M",
    },
    {
        id: 2,
        value: "cryptopunks",
        name: "CryptoPunks",
        avatar: "cryptopunks.png",
        volume: "1M",
    },
    {
        id: 3,
        value: "mutant-ape-yacht-club",
        name: "Mutant Ape Yacht Club",
        avatar: "mutant-ape-yacht-club.png",
        volume: "1M",
    },
    {
        id: 4,
        value: "azuki",
        name: "Azuki",
        avatar: "azuki.png",
        volume: "768K",
    },
    {
        id: 5,
        value: "otherdeed",
        name: "Otherdeed for Otherside",
        avatar: "otherdeed.png",
        volume: "619K",
    },
    {
        id: 6,
        value: "clonex",
        name: "CLONE X - X TAKASHI MURAKAMI",
        avatar: "clonex.png",
        volume: "426K",
    },
    {
        id: 7,
        value: "pudgypenguins",
        name: "Pudgy Penguins",
        avatar: "pudgypenguins.png",
        volume: "378K",
    },
    {
        id: 8,
        value: "veefriends",
        name: "VeeFriends",
        avatar: "veefriends.png",
        volume: "361K",
    },
    {
        id: 9,
        value: "wrapped-cryptopunks",
        name: "Wrapped Cryptopunks",
        avatar: "wrapped-cryptopunks.png",
        volume: "355K",
    },
    {
        id: 10,
        value: "doodles-official",
        name: "Doodles",
        avatar: "doodles-official.png",
        volume: "315K",
    },
    {
        id: 11,
        value: "topia-worlds",
        name: "HYTOPIA Worlds",
        avatar: "topia-worlds.png",
        volume: "288K",
    },
    {
        id: 12,
        value: "degods-eth",
        name: "DeGods",
        avatar: "degods-eth.png",
        volume: "193K",
    },
    {
        id: 13,
        value: "meebits",
        name: "Meebits",
        avatar: "meebits.png",
        volume: "183K",
    },
    {
        id: 14,
        value: "beanzofficial",
        name: "BEANZ Official",
        avatar: "beanzofficial.png",
        volume: "181K",
    },
    {
        id: 15,
        value: "cool-cats-nft",
        name: "Cool Cats",
        avatar: "cool-cats-nft.png",
        volume: "151K",
    },
    {
        id: 16,
        value: "milady",
        name: "Milady Maker",
        avatar: "milady.png",
        volume: "145K",
    },
    {
        id: 17,
        value: "sandbox",
        name: "The Sandbox LANDs",
        avatar: "sandbox.png",
        volume: "138K",
    },
    {
        id: 18,
        value: "memelandcaptainz",
        name: "Memeland Captainz",
        avatar: "memelandcaptainz.png",
        volume: "102K",
    },
    {
        id: 19,
        value: "ens",
        name: "ENS: Ethereum Name Service",
        avatar: "ens.png",
        volume: "98K",
    },
    {
        id: 20,
        value: "0n1-force",
        name: "0N1 Force",
        avatar: "0n1-force.png",
        volume: "87K",
    },
];

export const rankingsTabsDetails = [
    {
        id: 1,
        titleEn_sm: "1d",
        titleEn_big: "Today",
        titleFa_sm: "روز",
        titleFa_big: "امروز",
        content: RankingsTodayTab
    },
    {
        id: 2,
        titleEn_sm: "7d",
        titleEn_big: "This Week",
        titleFa_sm: "هفته",
        titleFa_big: "این هفته",
        content: RankingsThisWeekTab
    },
    {
        id: 3,
        titleEn_sm: "30d",
        titleEn_big: "This Month",
        titleFa_sm: "ماه",
        titleFa_big: "این ماه",
        content: RankingsThisMonthTab
    },
    {
        id: 4,
        titleEn_sm: "All Time",
        titleEn_big: "All Time",
        titleFa_sm: "همه زمان ها",
        titleFa_big: "همه زمان ها",
        content: RankingsAllTimeTab
    }
];