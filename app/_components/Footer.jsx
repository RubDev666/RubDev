'use client';

import { usePathname } from "next/navigation";

export default function Footer() {
    const path =  usePathname();

    return (
        <footer className={path === '/' | path === '/portafolio' ? '' : 'footer-not-found'}>
            <p>Created by <span>Rub</span>Developer © {new Date().getFullYear()}</p>
        </footer>
    )
}
