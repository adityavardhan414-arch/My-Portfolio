import portfolioData from "../data/portfolioData";
import Reveal from "./Reveal";

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">About Me</span>
            <h2>Get To Know Me</h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="about-text">{about.description}</p>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
