import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

export type TextSize = 24 | 18 | 16;

export interface TextProps extends ComponentPropsWithoutRef<"p"> {
    size?: TextSize;
}

const styles: Record<TextSize, string> = {
    24: "text-2xl max-md:text-xl",
    18: "text-lg max-md:text-base",
    16: "text-base max-md:text-sm",
};

export const Text = ({
    size = 16,
    className,
    children,
    ...props
}: TextProps) => {
    return (
        <p
            className={clsx(
                "font-body leading-relaxed",
                styles[size],
                className,
            )}
            {...props}
        >
            {children}
        </p>
    );
};
