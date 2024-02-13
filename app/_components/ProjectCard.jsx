import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({tittle, description, urlRepo, url, imgDesktop, tags, date}) {
    return (
        <div className="project flex align-center justify-center">
            <img
                src={`/images/projects/${imgDesktop}`}
                alt="project-image"
            />

            <div className="info">
                <div className="titulo-fecha">
                    <p className="titulo">{tittle}</p>
                    <p className="fecha">{date}</p>
                </div>

                <p className="description">{description}</p>

                <div className="links">
                    <Link href={urlRepo} target="_blank"><FontAwesomeIcon icon={faLink} className="icon" />Source Code</Link>
                    <Link href={url} target="_blank"><FontAwesomeIcon icon={faLink} className="icon" />View Project</Link>
                </div>

                <div className="technologies-tag">
                    {tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
            </div>
        </div>
    )
}