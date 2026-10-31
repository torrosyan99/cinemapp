import type { Metadata } from "next";

import { PATHS } from "@/shared/config/paths";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";

export const metadata: Metadata = {
    title: "Page not found | CinemApp",
};

export default function NotFound() {
    return (
        <Container className="py-16 max-md:py-8">
            <section className="relative isolate mx-auto flex min-h-[540px] max-w-5xl flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-surface/50 px-10 py-16 text-center max-md:min-h-[460px] max-md:px-5 max-md:py-12">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[480px] -translate-x-1/2 rounded-full bg-brand/[0.07] blur-3xl"
                />
                <p className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">
                    Lost in the credits
                </p>

                <div
                    aria-hidden="true"
                    className="mt-6 flex items-center gap-4 text-[144px] leading-none font-extrabold tracking-tighter text-text max-md:gap-3 max-md:text-[104px]"
                >
                    <span>4</span>
                    <span className="text-brand">0</span>
                    <span>4</span>
                </div>

                <h1 className="mt-8 text-3xl font-bold tracking-tight max-md:text-2xl">
                    This scene is missing
                    <span className="sr-only"> — 404: Page not found</span>
                </h1>
                <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
                    The page you&apos;re looking for has moved or doesn&apos;t exist.
                    Let&apos;s get you back to the movies.
                </p>
                <Button href={PATHS.MAIN} size="lg" className="mt-8 max-sm:w-full max-sm:max-w-xs">
                    Back to home
                </Button>
                <p className="mt-6 text-xs text-muted">
                    There&apos;s always another great story to discover.
                </p>
            </section>
        </Container>
    );
}
