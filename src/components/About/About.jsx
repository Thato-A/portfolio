import "./About.css";
import ProfilePic from "../../assets/LTA image.jpeg";
import useScrollReveal from "../../hooks/useScrollReveal";

function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      ref={ref}
      id="about"
      className={`about reveal-section ${isVisible ? "visible" : ""}`}
    >
      <div className="about__container">
        <div className="about__image">
          <img src={ProfilePic} alt="Thato portrait" />
        </div>

        <div className="about__content">
          <h2>About Me</h2>
          <p>
            My journey into software engineering began in an unexpected place —
            the beauty industry. I spent several years working aboard luxury
            cruise ships, where I grew from a passionate beauty professional to
            an Assistant Manager, learning the value of creativity, precision,
            and teamwork in fast-paced environments.
          </p>
          <p>
            Over time, I discovered that the same attention to detail and desire
            to create beautiful experiences translated perfectly into the world
            of technology. That’s when I decided to pivot into software
            engineering — combining creativity with logic to build digital
            experiences that feel just as polished and personal as the ones I
            once delivered in the beauty world.
          </p>
          <p>
            Today, I channel that same passion into designing and developing
            intuitive, elegant web applications — crafting code with the same
            care and creativity that once went into every client experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
