import React, { useRef, useState } from "react";
import Data from "../data/projects.json";
import Project from "../components/Project";

const Projects = () => {
  const menu = useRef();

  const [filtered, setFiltered] = useState(Data);

  // Add fn that filter results
  const filteringTechs = (e) => {
    const childLiList = menu.current.childNodes;

    // Revoming active class from all children
    childLiList.forEach((li) => {
      li.className = "projects__menu-item";
    });

    // Add active class to the li target
    e.currentTarget.className += " active-item";

    // filter by tech except when your are in "ALL"
    if (e.currentTarget.textContent !== "All") {
      const filtering = Data.filter((project) =>
        project.subtitle.includes(e.currentTarget.textContent)
      );

      setFiltered(filtering);
    } else {
      setFiltered(Data);
    }
  };

  return (
    <section className="projects" id="projects">
      <h3 className="projects__title">Projects</h3>
      <ul ref={menu} className="projects__menu">
        <li
          className="projects__menu-item active-item"
          onClick={filteringTechs}
        >
          All
        </li>
        <li className="projects__menu-item" onClick={filteringTechs}>
          React
        </li>
        <li className="projects__menu-item mquerie" onClick={filteringTechs}>
          Javascript
        </li>
        <li className="projects__menu-item" onClick={filteringTechs}>
          scss
        </li>
        <li className="projects__menu-item" onClick={filteringTechs}>
          Node
        </li>
      </ul>
      <div className="projects__container">
        {filtered.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
