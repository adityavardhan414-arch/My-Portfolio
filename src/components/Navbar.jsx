import { useEffect, useState } from "react";
import portfolioData from "../data/portfolioData";

// Nav items map section ids to visible labels
const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add a slight shadow/blur once the user scrolls past the hero
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setIsCollapsed(true);

  const firstName = portfolioData.personal.name.split(" ")[0] || "{{NAME}}";

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-custom fixed-top ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container">
        <a className="navbar-brand navbar-brand-custom" href="#home">
          {firstName}<span>.</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-2" style={{ color: "var(--color-primary)" }}></i>
        </button>

        <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            {NAV_ITEMS.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className="nav-link nav-link-custom"
                  href={`#${item.id}`}
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
