import portfolioData from "../data/portfolioData";
import Reveal from "./Reveal";
import SkillBadge from "./SkillBadge";

// Category metadata: label + icon + data key, drives the layout below
const CATEGORIES = [
  { key: "frontend", label: "Frontend Development", icon: "bi-window" },
  { key: "languages", label: "Programming Languages", icon: "bi-code-square" },
  { key: "tools", label: "Tools & Platforms", icon: "bi-tools" },
  { key: "backend", label: "Basics of Backend", icon: "bi-server" },
];

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">My Skills</span>
            <h2>What I Work With</h2>
            <p>A quick snapshot of the technologies and tools I use to build web applications.</p>
          </div>
        </Reveal>

        <div className="row g-4">
          {CATEGORIES.map((category, index) => {
            const items = skills[category.key];
            if (!items || items.length === 0) return null;

            return (
              <div className="col-md-6" key={category.key}>
                <Reveal delay={index * 80}>
                  <h3 className="skill-category-title">
                    <i className={`bi ${category.icon}`}></i>
                    {category.label}
                  </h3>
                  <div className="d-flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
                    ))}
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
