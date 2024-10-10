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