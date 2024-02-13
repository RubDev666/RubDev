import { faFacebook, faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="margin-container">
            <div className="contact-container">
                <h3>Contact Me</h3>

                <div className="contact flex justify-center">
                    <div className="direct-contact">
                        <h4>Contacto Directo</h4>

                        <div>
                            <FontAwesomeIcon icon={faPhone} className="icon" />

                            <p>+52 9999443424</p>
                        </div>

                        <div>
                            <FontAwesomeIcon icon={faWhatsapp} className="icon" />

                            <p>+52 9999424242</p>
                        </div>

                        <div>
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />

                            <p>rubscorreo@gmail.com</p>
                        </div>

                        <button>Descargar CV</button>
                    </div>

                    <div className="social-networks">
                        <h4>My Social Networks</h4>

                        <div>
                            <Link href={'#'}><FontAwesomeIcon icon={faGithub} className="icon" /></Link>

                            <Link href={'#'}><FontAwesomeIcon icon={faLinkedin} className="icon" /></Link>

                            <Link href={'#'}><FontAwesomeIcon icon={faInstagram} className="icon" /></Link>

                            <Link href={'#'}><FontAwesomeIcon icon={faFacebook} className="icon" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}