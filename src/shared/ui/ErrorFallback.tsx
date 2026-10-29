"use client";

import { PATHS } from "@/shared/config/paths";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";

interface ErrorFallbackProps {
    onRetry: () => void;
}

export const ErrorFallback = ({ onRetry }: ErrorFallbackProps) => (
    <Container className="flex min-h-[55vh] items-center justify-center py-16 max-md:py-10">
        <section
            role="alert"
            aria-labelledby="error-heading"
            className="w-full max-w-xl rounded-3xl border border-white/10 bg-surface/60 px-10 py-12 text-center max-sm:px-5 max-sm:py-8"
        >
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="size-8"
                >
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <path d="M12 9v4m0 3h.01M7 5v14m10-14v14" />
                </svg>
            </div>
            <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-brand uppercase">
                A brief intermission
            </p>
            <h1 id="error-heading" className="mt-3 text-3xl font-bold tracking-tight max-sm:text-2xl">
                Something went wrong
            </h1>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-muted">
                We couldn&apos;t load this part of CinemApp.
                Please try again in a moment.
            </p>
            <div className="mt-8 flex justify-center gap-3 max-sm:flex-col">
                <Button type="button" onClick={onRetry}>
                    Try again
                </Button>
                <a
                    href={PATHS.MAIN}
                    className="inline-flex h-11 items-center justify-center
                    rounded-xl border border-white/10 px-4 font-semibold
                    text-muted transition-colors hover:bg-brand/10 hover:text-brand"
                >
                    Back to home
                </a>
            </div>
        </section>
    </Container>
);
