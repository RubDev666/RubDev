import Link from "next/link"

export default function Main() {
    return (
        <section id="main">
            <main className="margin-container">
                <h1>Hola, Soy <span className="color-primary">RUBEN</span></h1>
                <h2>programador | desarrollador web frontend</h2>
                <p>{'"Soy un apasionado por el mundo del desarrollo web, disfruto mucho de escribir codigo y practicar, pero sobre todo aprender y seguir creciendo como un profesional en este mundo"'}</p>
 
                <div>
                    <button className="pointer">Descargar CV</button>
                    <Link href={'/portafolio'} className="pointer">Ver Portafolio</Link>
                </div>
            </main>
        </section>
    )
}