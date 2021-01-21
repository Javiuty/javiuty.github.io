import React from "react";

const Project = ({ project }) => (
  <figure className="projects__project">
    <img
      src={`${process.env.PUBLIC_URL}${project.imagen}`}
      alt={project.title}
    />
    <figcaption>
      <h4 className="projects__project-title">{project.title}</h4>
      <p className="projects__project-subtitle">{project.subtitle}</p>
      <div className="projects__project__wrapper">
        <button className="btn btn-project">
          <a href={project.source} target="_blank" rel="noreferrer noopener">
            Code
          </a>
        </button>
        <button className="btn btn-demo">
          <a href={project.demo} target="_blank" rel="noreferrer noopener">
            Demo
          </a>
        </button>
      </div>
    </figcaption>
  </figure>
);

export default Project;
