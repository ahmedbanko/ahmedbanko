import { PROJECTS } from "../data.js";
import Project from "./Project";
export default function Projects() {
  return (
    <ol>
    {PROJECTS.map((project, index) => (
      <Project key={index} project={project} />
    ))}
  </ol>
  );
}
