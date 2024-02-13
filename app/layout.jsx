import "./_styles/app.scss";

import Header from "./_components/Header";
import FondoEsfera from "./_components/FondoEsfera";

import Script from "next/script";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from "./_components/Footer";
config.autoAddCss = false;

export const metadata = {
    title: "RubDev",
    description: "Mi portafolio personal, laboral, con multiples proyectos y todo sobre mi",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <FondoEsfera />

                <Header />

                {children}

                <Footer />

                <Script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js" />
            </body>
        </html>
    );
}
