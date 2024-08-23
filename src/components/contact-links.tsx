import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactLinks = () => (
  <div className="icon__links">
    <a
      id="icon__link_github"
      className="icon__link"
      href="https://github.com/waltersgwoodward"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Click here to visit Walter's Github profile"
    >
      <FontAwesomeIcon
        icon={faGithub}
        aria-hidden="false"
        id="fa_github_icon"
        title="Link to Walter's Github Profile"
        role="img"
        aria-label="my-github-profile"
      />
    </a>
  </div>
);

export default ContactLinks;
