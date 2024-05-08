import { PROJECTS } from "../data.js";
import Project from "./Project";
export default function Projects() {
  return (
    <div>
      <h1 className="inline-block text-3xl font-extrabold text-bodyText-primaryLight tracking-tight dark:text-bodyText-primaryDark mb-6">
        Projects
      </h1>
      <ul className="space-y-4">
        {PROJECTS.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </ul>
    </div>
  );
}
