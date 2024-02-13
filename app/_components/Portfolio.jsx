'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

import projects from "../_utilities/projects";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
    const [imgGrid, setImgGrid] = useState(undefined);

    let latestProjects = [
        projects[projects.length - 1],
        projects[projects.length - 2],
        projects[projects.length - 3]
    ];

    useEffect(() => {
        window.addEventListener('resize', () => {
            if(innerWidth >= 1024) {
                setImgGrid(true);
            } else {
                setImgGrid(false);
            }
        })
 
        if(innerWidth >= 1024) {
            setImgGrid(true);
        } else {
            setImgGrid(false);
        }
    }, [])

    return (
        <section id="portafolio" className="margin-container">
            <div className="portafolio-content flex align-center justify-between direction-column">
                <h2>Latest Projects</h2>

                {imgGrid !== undefined ? (
                    <div className="portfolio-subcontainer flex align-center justify-between">
                        <div className="latest-projects-grid">
                            <div className="project-item area-a flex align-center justify-center direction-column">
                                <img
                                    src={`/images/projects/${latestProjects[0].imgMobile}`}
                                    alt="img-project"
                                />

                                <div className="fondo-gradient flex justify-center">
                                    <div className="links">
                                        <p className="titulo">{latestProjects[0].tittle}</p>

                                        <Link href={latestProjects[0].url} target="_blank"><FontAwesomeIcon icon={faLink} className="icon" /> View Project</Link>
                                        <Link href={latestProjects[0].urlRepo} target="_blank"><FontAwesomeIcon icon={faLink} className="icon" /> Source Code</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="project-item area-b flex align-center justify-center direction-column">
                                <img
                                    src={`/images/projects/${imgGrid ? latestProjects[1].imgDesktop : latestProjects[1].imgMobile}`}
                                    alt="img-project"
                                />

                                <div className="fondo-gradient flex justify-center">
                                    <div className="links">
                                        <p className="titulo">{latestProjects[1].tittle}</p>

                                        <Link href={latestProjects[1].url} target="_blank"><FontAwesomeIcon icon={faLink} className="icon" /> View Project</Link>
                                        <Link href={latestProjects[1].urlRepo} target="_blank"><FontAwesomeIcon icon={faLink} className="icon" /> Source Code</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="project-item area-c flex align-center justify-center direction-column">
                                <img
                                    src={`/images/projects/${imgGrid ? latestProjects[2].imgDesktop : latestProjects[2].imgMobile}`}
                                    alt="img-project"
                                />

                                <div className="fondo-gradient flex justify-center">
                                    <div className="links">
                                        <p className="titulo">{latestProjects[2].tittle} </p>

                                        <Link href={latestProjects[2].url} target="_blank"><FontAwesomeIcon icon={faLink} className="icon" /> View Project</Link>
                                        <Link href={latestProjects[2].urlRepo} target="_blank"><FontAwesomeIcon icon={faLink} className="icon" /> Source Code</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
 
                        <div className="btn-container">
                            <p>Sitios y aplicaciones web reales totalmente creados y diseñados por mi.</p>
                            <Link href={'/portafolio'}>View All Projects</Link>
                        </div>
                    </div>
                ) : (
                    <div className="animation-loading"><div></div><div></div></div>
                )}
            </div>
        </section>
    )
}
