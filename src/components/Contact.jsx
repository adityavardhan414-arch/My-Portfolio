import { useState } from "react";
import portfolioData from "../data/portfolioData";
import Reveal from "./Reveal";

const Contact = () => {
  const { personal, socials } = portfolioData;

  // Controlled form state
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: This is a frontend-only placeholder.
    // Connect this to an email service (e.g. EmailJS, Formspree)
    // or your own backend API to make it functional.
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Hide the success message after a few seconds
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactItems = [
    { icon: "bi-envelope", label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: "bi-telephone", label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
    { icon: "bi-linkedin", label: "LinkedIn", value: "Connect with me", href: socials.linkedin },
    { icon: "bi-github", label: "GitHub", value: "View my repositories", href: socials.github },
  ];

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">Get In Touch</span>
            <h2>Contact Me</h2>
            <p>Have an opportunity or just want to say hi? My inbox is always open.</p>
          </div>
        </Reveal>

        <div className="row g-4">
          {/* Contact info list */}
          <div className="col-lg-5">
            <Reveal>
              {contactItems.map((item) => (
                <a
                  href={item.href}
                  target={item.icon === "bi-envelope" || item.icon === "bi-telephone" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="contact-info-card text-decoration-none"
                  key={item.label}
                >
                  <div className="cert-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div>
                    <p className="meta mb-0">{item.label}</p>
                    <p className="mb-0 fw-medium" style={{ color: "var(--color-text)" }}>
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </Reveal>
          </div>

          {/* Contact form */}
          <div className="col-lg-7">
            <Reveal delay={100}>
              <div className="contact-form-wrapper">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-custom"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-custom"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label fw-medium">
                      Message
                    </label>
                    <textarea
                      className="form-control form-control-custom"
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary-custom w-100">
                    <i className="bi bi-send me-2"></i>
                    Send Message
                  </button>

                  {submitted && (
                    <p className="text-center mt-3 mb-0" style={{ color: "#16a34a" }}>
                      <i className="bi bi-check-circle-fill me-1"></i>
                      Thanks for reaching out! I'll get back to you soon.
                    </p>
                  )}
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
