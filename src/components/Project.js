import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const repo = <FontAwesomeIcon icon={faCodeBranch} />;
const linkR = <FontAwesomeIcon icon={faLink} />;

export default function Project({ projects }) {
  return (
    <div className="projectsContainer row m-auto p-3">
      {projects.map((project) => (
        <div class="col-sm-4">
          <div
            className="card mb-3"
            style={{
              backgroundColor: "rgba(198, 194, 250, 0.70)",
              borderRadius: "20px",
            }}
          >
            <img
              src={project.preview}
              className="card-img-top p-2"
              style={{ borderRadius: "20px" }}
              alt={project.description}
            />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <p className="card-text">
                {project.tech[0]} {project.tech[1]} {project.tech[2]}{" "}
                {project.tech[3]} {project.tech[4]} {project.tech[5]}{" "}
                {project.tech[6]} {project.tech[7]}
              </p>
            </div>
            <div className="container text-center">
            <a href={project.repo} className="card-link" style={{color: "#89388C", fontSize: "20px"}}>
            <icon>{repo}</icon>
            </a>
            <a href={project.link} className="card-link" style={{color: "#89388C", fontSize: "20px"}}>
            <icon>{linkR}</icon>
            </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
