"use client";

import { ErrorFallback } from "@/shared/ui/ErrorFallback";
import "./styles/globals.css";

interface GlobalErrorProps {
  reset: () => void;
}


export default function GlobalError({reset}:GlobalErrorProps) {
    return (
        <html lang="en">
            <body style={{ fontFamily: "Arial, sans-serif" }}>
                <main className="flex min-h-screen items-center justify-center">
                    <ErrorFallback onRetry={reset} />
                </main>
            </body>
        </html>
    );
}
