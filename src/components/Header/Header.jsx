import { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import "./Header.css";
import ContactModal from "../ContactModal/ContactModal";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typedName, setTypedName] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fullName = "Thato Anderson";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypedName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(timer);
    }, 120);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="header__container">
      <Navigation />

      <div className="availability-badge pulse">
        Available for new opportunities
      </div>

      <p className="intro-static">Hi, I’m</p>
      <h1 className="header__title">
        {typedName}
        <span className="cursor">|</span>
      </h1>

      <p className="header__subtitle">Software Engineer</p>
      <p className="header__description">
        I craft beautiful, functional, and scalable web applications. Passionate
        about clean code, innovative design, and creating exceptional user
        experiences.
      </p>

      <div className="button-group">
        <a href="/ThatoAResume.pdf" className="btn download">
          <HiOutlineDownload />
          <span>Download Resume</span>
        </a>
        <button className="btn contact" onClick={openModal}>
          Get In Touch
        </button>
        <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      </div>

      <div className="social-icons">
        <a
          href="https://github.com/Thato-A"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/thato-anderson"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </header>
  );
}
