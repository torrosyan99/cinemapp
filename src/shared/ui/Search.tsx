'use client';

import clsx from "clsx";
import type { ComponentProps } from "react";
import { Button } from "@/shared/ui/Button";

export type SearchProps = Omit<ComponentProps<"input">, "type" | "onSubmit"> & {
    onSubmit: (query: string) => void;
};


export const Search = ({
    className,
    disabled,
    onSubmit,
    ...props
}: SearchProps) => {

    const handleSearch = (formData:FormData) => {
        const query =  String(formData.get("query") ?? "").trim();
        if(!query) return;
        onSubmit(query)
    }
    return (
        <form
            action={handleSearch}
            className={clsx(
                "relative w-full ",
                disabled && "opacity-50", className,
            )}
        >
            <input
                {...props}
              name="query"
                type="text"
                disabled={disabled}
                className={
                    `h-14 w-full rounded-full border border-white/20 bg-[#131e2c] pr-28 pl-5 text-base text-text outline-none
                    placeholder:text-muted transition-colors disabled:cursor-not-allowed
                    max-sm:text-sm`
                }
            />
            <Button
                type="submit"
                mode="primary"
                size="none"
                disabled={disabled}
                className="absolute top-1/2 right-1.5 w-24
                -translate-y-1/2 rounded-full
                h-12"
            >
                Search
            </Button>
        </form>
    );
};
