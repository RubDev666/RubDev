'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AboutMe() {
    const imgTecs = [
        'html.png',
        'css.png',
        'javascript.png',
        'nodejs.png',
        'reactjs.png',
        'sass.webp',
        'typescript.png',
        'github.png',
        'tailwind.png',
        'mongodb.png'
    ]

    const [aboutSelect, setAboutSelect] = useState('who');

    const aboutChange = (e) =>  setAboutSelect(e.target.dataset.id);

    useEffect(() => {
        const meContent = document.querySelector('.me-content');
        const educationContent = document.querySelector('.education-content');

        if(aboutSelect === 'who') {
            setTimeout(() => {
                meContent.style.opacity = '1';
            }, 100)
        } else meContent.style.opacity = '0';


        if(aboutSelect === 'education') {
            setTimeout(() => {
                educationContent.style.opacity = '1';
            }, 100)
        } else educationContent.style.opacity = '0';
    }, [aboutSelect])

    return (
        <section id="about">
            <div className="about-container margin-container">
                <h2>About Me</h2>

                <div className="btns-container flex align-center justify-center">
                    <div className="btns-about">
                        <button className={`btn-about pointer ${aboutSelect === 'who' && 'seleccionado'}`} data-id="who" onClick={aboutChange}>Who I Am</button>
                        <button className={`btn-about pointer ${aboutSelect === 'education' && 'seleccionado'}`} data-id="education" onClick={aboutChange}>Education</button>
                    </div>
                </div>

                <div className="info-about-container">
                    <div className={`about-element who ${aboutSelect === 'who' && 'mostrar-about'}`} id='who'>
                        <div className="me-content">
                            <div className="comienzos">
                                <h3>¿Como empeze en este mundo?</h3>
                                <p className='text-color-2'>En 2021 ya con un mundo totalmente distinto a causa de la pandemia, mi situacion laboral y algunas otras me llevaron a descubrir este fascinante mundo de la <span>programacion</span>.  Pero accidentalmente y sin saber nada de <span>programacion</span>, tome el primer consejo y estudie <span>HTML</span> y <span>CSS</span> de forma autodidacta, pero poco o nada importo eso ya que quede maravillado con lo que hacia y aprendia. A mediados del 2022 comence a estudiar en <span>UDEMY</span> y desde entonces me he enfocado solo en el <span>desarrollo web frontend</span>, aunque igual cuento con conocimientos y conceptos superficiales del backend, me divierte mas el <span>frontend</span>, ya que deja mas espacio para la creatividad e ideas propias.</p>
                            </div>

                            <div className='resumen'>
                                <h3>Resumen de mi experiencia y conocimientos</h3>
                                <p className='text-color-2'>Las tecnologias con las que mas suelo trabajar es React con Next JS, ya que este framework me parece mas completo y facil de trabajar. Tambien cuento con proyectos sin frameworks, conocimientos de sass, y un ligero conocimiento de tailwind y mongodb. En resumen, toda mi experiencia es a base de multiples proyectos propios y sus repositorios en github, completamente hechos por mi.</p>

                                <h3>Un poco mas sobre mi</h3>
                                <p className='text-color-2'>Actualmente solo me dedico a estudiar por completo y seguir actualizandome en mi repertorio de tecnologias. En mis ratos libres suelo crear musica experimental y compartirlo en mi Instagram, y aveces toco metal y rock con mi guitarra. Tengo 28 años y soy de Mexico</p>
                            </div>
                        </div>
                    </div>

                    <div className={`about-element education justify-center direction-column align-center ${aboutSelect === 'education' && 'mostrar-about'}`} id="education">
                        <div className="education-content">
                            <h3>Formacion academica</h3>
                            <ul>
                                <li>HTML5, CSS - <span className="academia-span">autodidacta</span><br /><span>* 2022</span></li>
                                <li>JAVASCRIPT - <span className="academia-span">udemy</span><br /><span>*Certificado - 2022 - 2023</span></li>
                                <li>REACT: Hooks, State, MERN, Next.js, Remix, Vite, Tailwind CSS - <span className="academia-span">udemy</span><br /><span>*Certificado 2023</span></li>
                                <li>CSS & SASS: CSS La guia completa - <span className="academia-span">udemy</span><br /><span>*Certificado 2023</span></li>
                                <li>TYPESCRIPT: Understanding Typescript - <span className="academia-span">udemy</span><br /><span>*Certificado 2024</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="tecnologias-container flex align-center justify-center">
                            {imgTecs.map(imgTec => (
                                <div className="img-sphere flex align-center justify-center" key={imgTec}>
                                    <Image
                                        src={`/images/${imgTec}`}
                                        width={100}
                                        height={100}
                                        priority
                                        alt='img-tecnology'
                                        className={imgTec.includes('type') ? 'type' : ''}
                                    />
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </section>
    )
}
