import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaHtml5,
  FaGitAlt,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiPython,
  SiPostman,
  SiKeystone,
  SiJest,
  SiMysql,
} from "react-icons/si";
import { useState, useEffect } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import "./Header.css";
import ContactModal from "../ContactModal/ContactModal";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  const floatingIcons = [
    { Comp: FaReact, style: { top: "10%", left: "10%" } },
    { Comp: SiJavascript, style: { top: "20%", right: "10%" } },
    { Comp: FaDocker, style: { bottom: "15%", left: "15%" } },
    { Comp: SiTailwindcss, style: { bottom: "10%", right: "10%" } },
    { Comp: SiMongodb, style: { top: "20%", right: "25%" } },
    { Comp: FaNodeJs, style: { bottom: "30%", left: "5%" } },
    { Comp: FaHtml5, style: { top: "10%", left: "50%" } },
    { Comp: SiPython, style: { bottom: "40%", left: "30%" } },
    { Comp: SiPostman, style: { top: "40%", right: "30%" } },
    { Comp: SiKeystone, style: { top: "50%", right: "10%" } },
    { Comp: FaGitAlt, style: { bottom: "60%", left: "20%" } },
    { Comp: SiJest, style: { top: "10%", left: "30%" } },
    { Comp: SiMysql, style: { bottom: "30%", right: "20%" } },
  ];

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
    <header className="header__container animated-grid-bg">
      {floatingIcons.map((item, i) => {
        const Icon = item.Comp;
        const animStyle = {
          ...item.style,
          animationDelay: `${i * 0.9}s`,
          animationDuration: `${6 + i}s`,
        };
        return (
          <div key={i} className="floating" style={animStyle}>
            <Icon />
          </div>
        );
      })}

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
