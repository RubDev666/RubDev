import ProjectCard from "../_components/ProjectCard";
import projects from "../_utilities/projects";

export default function Page() {
    return (
        <section id='portafolio' className="margin-container page">
            <div className="project-tittle">
                <h2>All Projects</h2>
                <p>*Ordenados del mas reciente al mas antiguo.</p>
            </div>

            <div className="projects-container">
                {projects.reverse().map(project => (
                    <ProjectCard
                        key={project.tittle}
                        tittle={project.tittle}
                        description={project.description}
                        urlRepo={project.urlRepo}
                        url={project.url}
                        tags={project.tags}
                        imgDesktop={project.imgDesktop}
                        date={project.date}
                    />
                ))}
            </div>
        </section>
    )
}