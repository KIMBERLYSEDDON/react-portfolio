import React from "react";

export default function Project({ projects }) {
  return (
    <div className="projectsContainer row m-auto">
      {projects.map((project) => (
          <div class="col-sm-4">
        <div className="card mb-3" style={{backgroundColor: "rgba(198, 194, 250, 0.70)", borderRadius: "20px"}}>
          <img src={project.preview} className="card-img-top p-2" style={{borderRadius: "20px"}} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">
                {project.description}
            </p>
            <p className="card-text">
              
                { project.tech[0] } { project.tech[1] } { project.tech[2] } { project.tech[3] } { project.tech[4] } { project.tech[5] }
            </p>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}
