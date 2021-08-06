import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import "../styles"

const githubIcon = <FontAwesomeIcon icon={faGithub} />;
const linkedInIcon = <FontAwesomeIcon icon={faLinkedinIn} />;
const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;

export default function Footer() {
  return (
    <footer
      className="footer mt-auto w-100 p-5"
      style={{ position: "relative", bottom: "0" }}
    >
      <div className="container text-center mb-5">
        <span className="contactIcon p-3">
          <a href="https://github.com/KIMBERLYSEDDON">
            <icon style={{ fontSize: "40px", color: "#89388C" }}>
              {githubIcon}
            </icon>
          </a>
        </span>
        <span className="contactIcon p-3">
          <a href="https://www.linkedin.com/in/kimberlyseddon/">
            <icon style={{ fontSize: "40px", color: "#89388C" }}>
              {linkedInIcon}
            </icon>
          </a>
        </span>
        <span className="contactIcon p-3">
          <a href="https://github.com/KIMBERLYSEDDON">
            <icon style={{ fontSize: "40px", color: "#89388C" }}>
              {emailIcon}
            </icon>
          </a>
        </span>
        <p className="mx-auto">Thanks for viewing!</p>
      </div>
    </footer>
  );
}
