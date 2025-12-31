import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";
import useScrollReveal from "../../hooks/useScrollReveal";
import Coffee from "../../assets/coffee-shop.png";
import Spots from "../../assets/spots.png";
import Glow from "../../assets/glow-genic.png";
import Todo from "../../assets/todo-app.png";
import Turbo from "../../assets/turbo-guacomole.png";
import News from "../../assets/news-explorer.png";
import OC from "../../assets/wildlife-oc.png";
import Netflix from "../../assets/netflix1.png";
import SM from "../../assets/speak-mzansi.png";
import "swiper/css";
import "swiper/css/navigation";
import "./Projects.css";

const projectsData = [
  {
    title: "News Explorer",
    description:
      "A news discovery website where users can search for articles using a live News API. Logged-in users can save their favorite articles for later reading, creating a personalized news experience. Built with a focus on clean UI, smooth search functionality, and user-friendly features",
    tech: ["React", "Express.js", "MongoDB", "Node.js"],
    type: "Full Stack",
    image: News,
    code: "https://github.com/Thato-A/se_project_news-explorer",
  },
  {
    title: "Netflix Clone",
    description:
      "A responsive web application that replicates the core user experience of Netflix, allowing users to browse movies and TV shows, view detailed content information, and enjoy a smooth, modern UI.",
    tech: ["React", "Tailwind", "MongoDB", "Node.js", "TMDB API"],
    type: "Full Stack",
    image: Netflix,
    live: "https://not-netfliix.netlify.app/",
    code: "https://github.com/Thato-A/netflix-clone",
  },
  {
    title: "Turbo Guacamole",
    description:
      "A restaurant finder app where users choose a cuisine like Italian or Mexican and the platform locates matching restaurants nearby while providing directions to each location.",
    tech: ["React", "MongoDB", "Express.js", "Tailwind", "Yelp API"],
    type: "Full Stack",
    image: Turbo,
    live: "https://turboguacamole.netlify.app/",
    code: "https://github.com/Thato-A/turbo-guacamole",
  },
  {
    title: "Spots",
    description:
      "A social photo-sharing app where users can upload, delete, and like pictures on their profile. Each profile displays the user’s images along with their name and job title.",
    tech: ["Javascript", "HTML", "CSS"],
    type: "Frontend",
    image: Spots,
    code: "https://github.com/Thato-A/se_project_spots",
  },
  {
    title: "Todo App",
    description:
      "A Todo App where the user can add things to complete and be able to check them off once completed. ",
    tech: ["Javascript", "HTML", "CSS"],
    type: "Frontend",
    image: Todo,
    code: "https://github.com/Thato-A/se_project_todo-app",
  },
  {
    title: "Triple Espresso",
    description:
      "A student coffee shop app where reservations and online orders can be made.",
    tech: ["HTML", "CSS"],
    type: "Frontend",
    image: Coffee,
    code: "https://github.com/Thato-A/se_project_coffeeshop",
  },
  {
    title: "OC Wildland",
    description:
      "a full-featured web platform designed to support wildfire education and preparedness. The site allows users to browse and purchase fire rescue and wildland safety classes, while also offering branded merchandise to support the organization’s mission.",
    tech: ["Node.js", "Keystone", "Tailwind", "Typescript", "Docker"],
    type: "In Development",
    image: OC,
  },
  {
    title: "Glow Genic",
    description:
      "A personalized skincare platform that creates custom routines and product recommendations based on user concerns. Users can track their progress through a skincare diary (when logged in), purchase recommended products, and schedule consultations with a skincare professional.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB", "Express.js"],
    type: "Full Stack",
    image: Glow,
    live: "https://glowgenic.netlify.app/",
    code: "https://github.com/Thato-A/glow-genic",
  },
  {
    title: "Speak Mzansi",
    description:
      "a full-stack language learning web application designed to help users learn South Africa’s 11 official languages by connecting them with native-speaking tutors while also exploring cultural insights and local destinations.",
    tech: ["Node.js", "React", "Tailwind", "MongoDB"],
    type: "In Development",
    image: SM,
  },
];

function Projects() {
  const [ref, isVisible] = useScrollReveal();
  const [filter, setFilter] = useState("All");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 601);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 601);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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
      <h2 className="project__title">My Work</h2>
      <p className="project__subtext">
        Here are some of the projects I’ve completed, along with a few that I’m
        currently bringing to life.
      </p>

      <div className="filter-buttons">
        {["All", "Frontend", "Full Stack", "In Development"].map((cat) => (
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
        modules={[Pagination, Autoplay, Navigation]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        grabCursor
        watchSlidesProgress
        className="project__swiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 18,
            centeredSlides: false,
          },
          601: {
            slidesPerView: 1,
            spaceBetween: 24,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            centeredSlides: true, // center active on desktop
          },
        }}
      >
        {filteredProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project__card">
              <img src={project.image} alt={project.title} />
              <div className="project__info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
                <div className="project__links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  )}
                  {project.code && (
                    <a href={project.code} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  )}
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
