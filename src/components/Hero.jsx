import portfolioData from "../data/portfolioData";
import Reveal from "./Reveal";

const Hero = () => {
  const { personal, socials } = portfolioData;

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Text content */}
          <div className="col-lg-7 order-2 order-lg-1 text-center text-lg-start">
            <Reveal>
              <p className="hero-greeting mb-2">Hello, I'm</p>
              <h1 className="hero-name">{personal.name}</h1>
              <h2 className="hero-role">{personal.role}</h2>
              <p className="hero-description mx-auto mx-lg-0">
                {personal.shortDescription}
              </p>

              {/* CTA buttons */}
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
                <a
                  href={personal.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-custom"
                >
                  <i className="bi bi-download me-2"></i>
                  Download Resume
                </a>
                <a href="#contact" className="btn-outline-custom">
                  <i className="bi bi-envelope me-2"></i>
                  Contact Me
                </a>
              </div>

              {/* Quick meta info */}
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start hero-meta mb-4">
                <span>
                  <i className="bi bi-geo-alt"></i>
                  {personal.location}
                </span>
                <span>
                  <i className="bi bi-envelope"></i>
                  {personal.email}
                </span>
                <span>
                  <i className="bi bi-telephone"></i>
                  {personal.phone}
                </span>
              </div>

              {/* Social icons */}
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="social-icon-link"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Profile image */}
          <div className="col-lg-5 order-1 order-lg-2">
            <Reveal delay={100}>
              <div className="hero-image-wrapper">
                <img src={personal.profileImage} alt={personal.name} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
