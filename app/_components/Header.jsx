'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';

//logica para el evento scroll en el header, consiste en un border-drag que se arrastra segun la seccion en la que estemos
import {getQuerySelectors, scrollNavMobile, scrollNavPc, widthLinks, classRemove} from '../_utilities/scrollNav.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation.js';
 
export default function Header() {
    const [showNav, setShowNav] = useState(false);
    //const [count, setCount] = useState(true);

    const path = usePathname();

    useEffect(() => {
        let count = true;
        //obtener los elementos para el evento scroll solo una vez al cargar el sitio
        if (count) {
            getQuerySelectors();

            count = false;
        }
 
        //cuando se recarga el sitio web, detectar en que seccion estamos para el evento scroll
        if (window.innerWidth < 1024) {
            classRemove();
            scrollNavMobile();
        } else {
            classRemove();
            scrollNavPc();
            widthLinks();
        }

        //al cambiar de tamaño se tiene que volver a ejecutar la logica del scroll, debido a que la version de pc requiere otra logica
        addEventListener('resize', () => {
            //quitar la transicion para una mejor experiencia solo durante el evento 'resize'
            const marcado = document.querySelector('.border-drag');
            marcado.style.transition = 'none';

            const navLinksContainer = document.querySelector('.navLinks-container');
            navLinksContainer.style.transition = 'none';

            //volver a ejecutar la logica para detectar la seccion en la que estemos
            if (window.innerWidth < 1024) {
                scrollNavMobile();
            } else {
                scrollNavPc();
                widthLinks();

                //si el nav esta activado, se desactiva siempre al hacer 'resize'
                setShowNav(false);
                document.querySelector('.navLinks-container').classList.remove('show-navbar');
                document.querySelector('.fondo-opacity').classList.remove('active');
            }
        })

        //el evento scroll esperando y listo para ejecutarse en cualquier momento
        //todo el codigo anterior deja listo para poder usarse este evento mientras navegamos por el sitio
        window.addEventListener('scroll', () => {
            if (window.innerWidth < 1024) {
                scrollNavMobile();
            } else {
                scrollNavPc();
            }
        });

    })

    useEffect(() => {
        let count = true;

        //obtener los elementos para el evento scroll solo una vez al cargar el sitio
        if (count) {
            getQuerySelectors();

            count = false;
        }

        if (window.innerWidth < 1024) {
            classRemove();
            scrollNavMobile();
        } else {
            classRemove();
            widthLinks();
            scrollNavPc();
        }
    }, [path])

    const toggleNav = () => {
        setShowNav(!showNav);

        document.querySelector('.navLinks-container').classList.toggle('show-navbar');
        document.querySelector('.fondo-opacity').classList.toggle('active');
    }

    //en dado caso de que haya un error con el useEffect
    /*if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            if(window.innerWidth < 700) {
                scrollNav();
            } else {
                console.log('tablet')
            }
        });
    };*/

    return (
        <header>
            <div className="fondo-opacity" onClick={toggleNav}></div>

            <nav className="margin-container flex-center-between">
                <Link href='/' className='logo-header'><span>Rub</span>Developer</Link>

                <div className='navLinks-container'>
                    <span className="border-drag"></span>
                    
                    <ul id="sidemenu">
                        <li><Link href="/" className='main-link'>Home</Link></li>
                        <li><Link href="/#about">About</Link></li>
                        <li><Link href="/portafolio">Portafolio</Link></li>
                        <li><Link href="/#contact">Contact</Link></li>
                    </ul>

                    <p>Created by <span className='color-primary'>Rub</span>Developer © <span>{new Date().getFullYear()}</span></p>
                </div>

                <FontAwesomeIcon 
                    icon={showNav ? faTimes : faBars} 
                    className='icon pointer' 
                    onClick={toggleNav}
                />
            </nav>
        </header>
    )
}
