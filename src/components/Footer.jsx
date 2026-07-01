import portfolioData from "../data/portfolioData";

const Footer = () => {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="footer-custom">
      <div className="container">
        <p className="mb-0">
          © {year} {personal.name}. Built with <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a> & <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">Bootstrap</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
