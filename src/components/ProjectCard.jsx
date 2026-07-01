/**
 * ProjectCard
 * ----------------------------------------------------------
 * Reusable card used to display a single project. Receives
 * a `project` object shaped exactly like the entries inside
 * portfolioData.js -> projects[].
 * ----------------------------------------------------------
 */
const ProjectCard = ({ project }) => {
  const { name, image, description, technologies, githubLink, liveLink } = project;

  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-card-img" />
      <div className="project-card-body">
        <h5>{name}</h5>
        <p>{description}</p>

        <div className="mb-3">
          {technologies.map((tech) => (
            <span className="tech-badge" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
            Code
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-box-arrow-up-right"></i>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
