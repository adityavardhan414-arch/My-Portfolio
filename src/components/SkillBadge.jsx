/**
 * SkillBadge
 * ----------------------------------------------------------
 * Small reusable pill/card used to display a single skill
 * with its icon. Kept intentionally simple.
 * ----------------------------------------------------------
 */
const SkillBadge = ({ name, icon }) => {
  return (
    <div className="skill-badge">
      <i className={`bi ${icon}`}></i>
      <span>{name}</span>
    </div>
  );
};

export default SkillBadge;
