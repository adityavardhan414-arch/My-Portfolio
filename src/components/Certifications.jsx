import portfolioData from "../data/portfolioData";
import Reveal from "./Reveal";

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="section">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">Achievements</span>
            <h2>Certifications</h2>
          </div>
        </Reveal>

        <div className="row g-4">
          {certifications.map((cert, index) => (
            <div className="col-md-6 col-lg-4" key={cert.id}>
              <Reveal delay={index * 100}>
                <div className="cert-card d-flex gap-3">
                  <div className="cert-icon">
                    <i className="bi bi-patch-check"></i>
                  </div>
                  <div>
                    <h5>{cert.name}</h5>
                    <p className="platform mb-1">{cert.platform}</p>
                    <p className="meta mb-0">
                      <i className="bi bi-calendar3 me-1"></i>
                      {cert.date}
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

export default Certifications;
