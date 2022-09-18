import React from "react";
import "./ProjectList.css";

function ProjectList({ projects }) {
  return (
    <div>
      {projects.length === 0 && <p>No Projects yet!</p>}
      {projects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
}

export default ProjectList;
