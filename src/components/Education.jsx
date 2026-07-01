import portfolioData from "../data/portfolioData";
import Reveal from "./Reveal";

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">Academics</span>
            <h2>Education</h2>
          </div>
        </Reveal>

        <div className="row g-4 justify-content-center">
          {education.map((edu, index) => (
            <div className="col-md-8" key={edu.id}>
              <Reveal delay={index * 100}>
                <div className="timeline-card d-flex gap-3">
                  <div className="timeline-icon">
                    <i className="bi bi-mortarboard"></i>
                  </div>
                  <div>
                    <h5>{edu.college}</h5>
                    <p className="degree mb-1">{edu.degree}</p>
                    <p className="meta mb-0">
                      <i className="bi bi-calendar3 me-1"></i>
                      {edu.duration}
                      <span className="mx-2">•</span>
                      <i className="bi bi-award me-1"></i>
                      CGPA: {edu.cgpa}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
