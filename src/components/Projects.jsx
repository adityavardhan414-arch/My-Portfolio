import portfolioData from "../data/portfolioData";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">My Work</span>
            <h2>Featured Projects</h2>
            <p>A few projects I've built while learning and practicing web development.</p>
          </div>
        </Reveal>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <Reveal delay={index * 100}>
                <ProjectCard project={project} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
