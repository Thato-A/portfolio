import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import About from "../About/About";
import "./Main.css";

function Main() {
  return (
    <main className="main-container">
      <About />
      <Skills />
      <Projects />
    </main>
  );
}

export default Main;
