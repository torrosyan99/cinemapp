import clsx from "clsx";
import { ReactNode } from "react";

interface ContainerProps {
    className?: string;
    children?: ReactNode;
}

export const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={clsx("max-w-[1520px] px-4 mx-auto", className)}>
            {children}
        </div>
    );
};
