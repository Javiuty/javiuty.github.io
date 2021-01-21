import React, { useEffect, useState } from "react";
import { ReactComponent as IconBriefcase } from "../images/SVG/briefcase.svg";
import { ReactComponent as IconGithub } from "../images/SVG/github.svg";
import { ReactComponent as IconArchive } from "../images/SVG/archive.svg";
import { ReactComponent as IconTrophy } from "../images/SVG/trophy.svg";
import background from "../images/bg-info.jpg";
import Data from "../data/projects.json";
import axios from "axios";

const Info = () => {
  const [githublength, setGithubLength] = useState(50);

  // Get length of all my projects
  const finishedProjects = Data.length;

  // Get list of all repositorios from github api
  useEffect(() => {
    const callingGithubApi = async () => {
      const url = "https://api.github.com/users/javiuty/repos?per_page=100";

      const result = await axios.get(url);

      setGithubLength(result.data.length);
    };
    callingGithubApi();
  }, []);

  return (
    <section
      className="info"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="info__main-container">
        <div className="info__element">
          <IconBriefcase />
          <p>6</p>
          <h4>Companies I worked with</h4>
        </div>
        <div className="info__element">
          <IconGithub />
          <p id="repos">{githublength}</p>
          <h4>Repositories</h4>
        </div>
        <div className="info__element">
          <IconArchive />
          <p id="project">{finishedProjects}</p>
          <h4>Finished projects</h4>
        </div>
        <div className="info__element">
          <IconTrophy />
          <p>2</p>
          <h4>Hackatons I participated</h4>
        </div>
      </div>
    </section>
  );
};

export default Info;
