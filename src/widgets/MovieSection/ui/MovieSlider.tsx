"use client";

import { Children, type ReactNode } from "react";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/scrollbar";
import { A11y, Keyboard, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface MovieSliderProps {
    children: ReactNode;
    label: string;
}

export const MovieSlider = ({ children, label }: MovieSliderProps) => (
    <div className="hidden max-lg:block">
        <Swiper
            modules={[ Keyboard, Scrollbar]}
            slidesPerView="auto"
            spaceBetween={12}
            keyboard={{ enabled: true, onlyInViewport: true }}
            scrollbar={{ draggable: true }}
            a11y={{ containerMessage: label }}
            className="pb-6! [--swiper-scrollbar-bg-color:var(--color-card)] [--swiper-scrollbar-drag-bg-color:var(--color-brand)] [--swiper-scrollbar-size:3px]"
        >
            {Children.map(children, (child) => (
                <SwiperSlide className="h-auto! max-w-55">
                    {child}
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);
