import "./Skills.css";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiKeystone,
} from "react-icons/si";
import useScrollReveal from "../../hooks/useScrollReveal";
import SkillStats from "../SkillStat/SkillStats";

function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      ref={ref}
      id="skills"
      className={`skills reveal-section ${isVisible ? "visible" : ""}`}
    >
      <h2 className="skills__title">
        <span className="highlight">MY EXPERTISE</span>
      </h2>
      <h3 className="skills__subtitle">Skills & Technologies</h3>
      <p className="skills__description">
        Here are the technologies and skills I use to bring ideas to life.
      </p>

      <div className="skills__grid">
        <div className="skills__category">
          <h3>Technical Skills</h3>
          <div className="skills__cards">
            {[
              { icon: <FaReact />, name: "React.js" },
              { icon: <SiNextdotjs />, name: "Next.js" },
              { icon: <FaNodeJs />, name: "Node.js" },
              { icon: <SiExpress />, name: "Express.js" },
              { icon: <SiMongodb />, name: "MongoDB" },
              { icon: <SiJavascript />, name: "JavaScript" },
              { icon: <SiTypescript />, name: "TypeScript" },
              { icon: <SiTailwindcss />, name: "Tailwind CSS" },
              { icon: <FaGitAlt />, name: "Git" },
              { icon: <FaGithub />, name: "GitHub" },
              { icon: <SiKeystone />, name: "Keystone" },
              { icon: <FaDocker />, name: "Docker" },
            ].map((skill, i) => (
              <div key={i} className="skill__card">
                <div className="skill-icon">{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills__category">
          <h3>Areas of Expertise</h3>
          <div className="expertise">
            <div className="expertise__item">
              <h4>Frontend Development</h4>
              <p className="expertise__description">
                Creating responsive, accessible, and interactive user interfaces
                with clean, maintainable code.
              </p>
              <div className="tags">
                <span>React.js</span>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
                <span>HTML5</span>
                <span>CSS3</span>
              </div>
            </div>

            <div className="expertise__item">
              <h4>Backend Development</h4>
              <p className="expertise__description">
                Building robust and scalable APIs and server-side applications.
              </p>
              <div className="tags">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>RESTful APIs</span>
                <span>GraphQL</span>
                <span>Keystone</span>
                <span>Docker</span>
                <span>JWT</span>
                <span>Middleware</span>
              </div>
            </div>

            <div className="expertise__item">
              <h4>Database Mangement</h4>
              <p className="expertise__description">
                Designing and managing efficient database systems
              </p>
              <div className="tags">
                <span>MongoDB</span>
                <span>PostgreSQL</span>
              </div>
            </div>

            <div className="expertise__item">
              <h4>Testing & Quality Assurance</h4>
              <p className="expertise__description">
                Unit and integration testing, API testing and validation.
              </p>
              <div className="tags">
                <span>Jest</span>
                <span>Postman</span>
              </div>
            </div>

            <div className="expertise__item">
              <h4>Version Control & Deployment</h4>
              <p className="expertise__description">
                Managing source control and deploying applications efficiently.
              </p>
              <div className="tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>Cloud Deployment</span>
                <span>Render</span>
                <span>Netlify</span>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__category">
          <h3>Soft Skills</h3>
          <div className="skills__cards-soft">
            {[
              { icon: "💬", name: "Communication" },
              { icon: "🎯", name: "Attention to detail" },
              { icon: "🤝", name: "Collaboration" },
              { icon: "🧩", name: "Problem-solving" },
              { icon: "⚙️", name: "Adaptability" },
              { icon: "💪", name: "Accountability" },
              { icon: "⏰", name: "Time Management" },
              { icon: "💡", name: "Empathy" },
              { icon: "🔍", name: "Curiosity" },
              { icon: "🔥", name: "Resilience" },
            ].map((skill, i) => (
              <div key={i} className="skill__card">
                <div className="skill-icon">{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SkillStats />
    </section>
  );
}

export default Skills;
