// type TodoType = any;

type CustomButtonType = {
    locale: string;
    translateButton: string;
    type: "button" | "link";
    href?: string;
    className: string;
    textClass: string;
    icon?: string;
    // onClick: () => void;
}

interface MotionSectionProps extends ForwardRefComponent<HTMLElement, HTMLMotionProps<"section">> {
    children: React.ReactNode;
    className?: string;
}

interface MotionDivProps extends ForwardRefComponent<HTMLElement, HTMLMotionProps<"div">> {
    children: React.ReactNode;
    className?: string;
}

interface MotionFooterProps extends ForwardRefComponent<HTMLElement, HTMLMotionProps<"footer">> {
    children: React.ReactNode;
    className?: string;
}

interface MotionMainProps extends ForwardRefComponent<HTMLElement, HTMLMotionProps<"Main">> {
    children: React.ReactNode;
    className?: string;
}

type WantMotionAnimationType = {
    wantAnimations: boolean;
    setWantAnimations: (value: boolean) => void;
}

type CreateAccountModalType = {
    isModalActive: boolean;
    setIsModalActive: (value: boolean) => void;
}

type UserState = {
    username: string;
    email: string;
    password: string;
    setUser: (user: { username: string; email: string; password: string }) => void;
}

type ArtistPagePropsType = {
    params: { 
        name: string 
    };
}

type ArtistParamsType = {
    paramsName: string;
    artistNameEn: string;
    artistNameFa: string;
    bioEn: string;
    bioFa: string;
    topImage: string;
    avatar: string;
    achievements: {
        volume: number;
        soldNFTs: number;
        followers: number;
    }
    createdCount: number;
    ownedCount: number;
    collectionCount: number;
}