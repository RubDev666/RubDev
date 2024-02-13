'use client'

import { useEffect } from "react";

export default function FondoEsfera() {
    //esperar un breve tiempo para mostrar la esfera cayendo
    /*useEffect(() => {
        const esfera = document.querySelector('.esfera');

        setTimeout(() => {
            esfera.style.opacity = '1';
        }, 3000)
    })*/

    return (
        <div className="fondo">
            <div className="rampa">
                <div className="esfera"></div>
            </div>
            <div className="circle-blur"></div>
        </div>
    )
}