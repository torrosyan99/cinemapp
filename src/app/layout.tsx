import clsx from "clsx";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Header } from "@/widgets/Header/ui/Header";
import "./styles/globals.css";
import {Footer} from "@/widgets/Footer";

const cormorantGaramond = Cormorant_Garamond({
    subsets: ["latin", "cyrillic"],
    variable: "--font-google-heading",
    display: "swap",
});

const manrope = Manrope({
    subsets: ["latin", "cyrillic"],
    variable: "--font-google-body",
    display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={clsx(manrope.variable, cormorantGaramond.variable)}
        >
            <body>
                <Header />

                <main className={"grow"}>{children}</main>
            <Footer />
            </body>
        </html>
    );
}
