import { Github } from "react-bootstrap-icons";

export default function Footer() {

  const gitHubUrl = 'https://github.com/ilanvaks/ilan-portfolio';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-5">
      <p className="footer-text text-center">
        <a href= {gitHubUrl}
          target="_blank"
          rel="noreferrer"
          className="button-effect">
          <Github size='60' className="github-icon"/>
        </a>
        <div>
          <small>&copy; {currentYear} Ilan Vaks </small>
        </div>
      </p>
    </footer>
  )
}
