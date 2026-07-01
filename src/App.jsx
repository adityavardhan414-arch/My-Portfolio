import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

/**
 * App
 * ----------------------------------------------------------
 * Root component. Simply composes all the portfolio sections
 * in order. All content is driven by src/data/portfolioData.js
 * ----------------------------------------------------------
 */
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
