import { FaReact, FaGitAlt, FaDocker, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiPostman, SiVite } from "react-icons/si";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import useScrollReveal from "../../hooks/useScrollReveal";
import Avocado from "../../assets/avocado.jpg";
import Bike from "../../assets/Bike.jpg";
import Flowers from "../../assets/flowers.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "./Projects.css";

const projectsData = [
  {
    title: "Bites Hub",
    description:
      "A student-friendly food ordering app with real-time tracking, payments, and animated UI built with Next.js and Stripe.",
    tech: ["Next.js", "Express.js", "Tailwind CSS"],
    type: "Frontend",
    image: Avocado,
    live: "#",
    code: "#",
  },
  {
    title: "Bike Shop App",
    description:
      "An e-commerce app for bikes with category filtering, cart functionality, and animations using React and SASS.",
    tech: ["React", "MongoDB", "Express.js"],
    type: "Full Stack",
    image: Bike,
    live: "#",
    code: "#",
  },
  {
    title: "Generosity Hub",
    description:
      "A donation platform supporting safe environments and education using Node.js, MongoDB, and JWT.",
    tech: ["Node.js", "MongoDB", "Express.js"],
    type: "Backend",
    image: Flowers,
    live: "#",
    code: "#",
  },
];

function Projects() {
  const [ref, isVisible] = useScrollReveal();
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.type === filter);

  return (
    <section
      ref={ref}
      id="projects"
      className={`projects reveal-section ${isVisible ? "visible" : ""}`}
    >
      <h2 className="project-title">My Work</h2>

      <div className="filter-buttons">
        {["All", "Frontend", "Full Stack", "Backend"].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={60}
        loop={true}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        navigation
        className="project-swiper"
      >
        {filteredProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={project.code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Projects;
