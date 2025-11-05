import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav__logo">&lt;/&gt;Thato.dev</div>
      <ul className="nav__links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
