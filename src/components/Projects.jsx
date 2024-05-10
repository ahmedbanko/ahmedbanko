import { PROJECTS } from "../data.js";
import ProjectItem from "./ProjectItem.jsx";
export default function Projects() {
  return (
    <ul className="space-y-4">
      {PROJECTS.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </ul>
  );
}
