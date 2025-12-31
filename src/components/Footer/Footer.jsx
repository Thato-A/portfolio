import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <p>© {new Date().getFullYear()} Thato. Built with ❤️ and React.</p>

      <p>Lets connect</p>

      <div className="footer__links">
        <a href="mailto:thatoanderson92@gmail.com" className="footer__link">
          thatoanderson92@gmail.com
        </a>

        <a
          href="https://github.com/Thato-A"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/thato-anderson"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
