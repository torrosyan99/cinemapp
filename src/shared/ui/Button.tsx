import clsx from "clsx";
import Link from "next/link";
import type { ComponentProps } from "react";

const buttonModes = {
    primary:
        "border-transparent bg-brand text-white text-background hover:bg-brand/90 active:bg-brand/80",
    secondary:
        "border-white/10 bg-card text-text hover:bg-card/80 active:bg-card/60",
    outline:
        "border-border bg-transparent text-text hover:bg-card active:bg-card/80",
    ghost: "border-transparent bg-transparent text-muted hover:bg-card hover:text-text active:bg-card/80",
};

const buttonSizes = {
    none:"",
    sm: "h-9 gap-2 rounded-lg px-2 text-sm",
    md: "h-11 gap-2 rounded-xl px-4 text-base",
    lg: "h-13 gap-3 rounded-xl px-6 text-base",
    icon: "size-11 rounded-xl p-0",
};

export type ButtonMode = keyof typeof buttonModes;
export type ButtonSize = keyof typeof buttonSizes;

type ButtonVariantProps = {
    mode?: ButtonMode;
    size?: ButtonSize;
};

type ButtonElementProps = ComponentProps<"button"> & {
    href?: never;
};

type ButtonLinkProps = ComponentProps<typeof Link>;

export type ButtonProps = (ButtonElementProps | ButtonLinkProps) &
    ButtonVariantProps;

export const Button = ({
    mode = "primary",
    size = "md",
    className,
    ...props
}: ButtonProps) => {
    const classes = clsx(
        "inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 font-semibold cursor-pointer transition-colors duration-150",
        "disabled:pointer-events-none disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0",
        buttonModes[mode],
        buttonSizes[size],
        className,
    );

    if (props.href !== undefined) {
        return <Link className={classes} {...props} />;
    }

    return <button className={classes} {...props} />;
};

