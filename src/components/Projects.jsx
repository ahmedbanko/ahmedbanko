import { PROJECTS } from "../data.js";
import Project from "./Project";
export default function Projects() {
  return (
      <ul className="space-y-4">
        {PROJECTS.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </ul>

  );
}
