"use client";

import { ErrorFallback } from "@/shared/ui/ErrorFallback";

interface ErrorPageProps {
    reset: () => void;
}

export default function ErrorPage({ reset }: ErrorPageProps) {
    return <ErrorFallback onRetry={reset} />;
}
