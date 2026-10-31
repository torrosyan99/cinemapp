"use client";

import clsx from "clsx";
import  ChevronDownIcon  from "@/shared/assets/icons/chevron-down.svg";
import {ReactNode, useEffect, useId, useRef, useState} from "react";

interface ExpandableMenuProps {
  children: ReactNode;
  label: string;
  className?: string;
  contentClassName?: string;
  align?: "right" | "left" | "center";
}

const alignmentClasses = {
  left: "md:left-0",
  right: "md:right-0",
  center: "md:left-1/2 md:-translate-x-1/2",
};

export const ExpandableMenu = ({
                                 children,
                                 label,
                                 className,
                                 contentClassName,
                                 align = "center",
                               }: ExpandableMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (
        target instanceof Node &&
        !rootRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen]);

  return (
    <div
      ref={rootRef}
      className={clsx("relative", className)}
      onPointerEnter={(event) => {
        if (
          event.pointerType === "mouse" &&
          window.matchMedia("(min-width: 768px)")
            .matches
        ) {
          setIsOpen(true);
        }
      }}
      onPointerLeave={(event) => {
        if (
          event.pointerType === "mouse" &&
          window.matchMedia("(min-width: 768px)").matches
        ) {
          setIsOpen(false);
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((o) => !o)}
        className={clsx(
          "flex min-h-10 w-full items-center justify-between gap-2 rounded-xl px-2 text-left font-medium transition-colors",
          "hover:bg-brand/10 hover:text-brand",
          isOpen ? "bg-brand/10 text-brand" : "text-text",
        )}
      >
        {label}
        <ChevronDownIcon
          className={clsx(
            "size-4 shrink-0 transition-transform",
            isOpen && "rotate-180",
          )}
        />
      </button>


      <div
        id={contentId}
        inert={!isOpen}
        className={clsx(
          "absolute top-full  z-30 min-w-40 pt-2",
          "grid transition-[grid-template-rows,opacity,visibility]",
          "max-md:static max-md:min-w-0 max-md:pt-0",
          alignmentClasses[align],
          isOpen
            ? "visible grid-rows-1 opacity-100"
            : "invisible grid-rows-[0fr] opacity-0 pointer-events-none",
        )}
        onClick={(event) => {
          if (event.target instanceof Element &&
            event.target.closest("a[href]")) {
            setIsOpen(false);
            triggerRef.current?.focus();
          }
        }}
      >
        <div className="overflow-hidden">
          <div
            className={clsx(
              "rounded-2xl border border-white/10 " +
              "menu-scrollbar bg-surface max-h-100 overflow-y-auto p-2 shadow-xl",
              "max-md:mt-2 max-md:shadow-none",
              contentClassName,
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
