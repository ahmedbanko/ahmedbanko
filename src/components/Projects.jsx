import { PROJECTS } from "../data.js";
import Project from "./Project";
export default function Projects() {
  return (
    <div>
      <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 mb-6">
        Projects
      </h1>
      <ul className="max-w-l divide-gray-200 dark:divide-gray-700">
        {PROJECTS.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </ul>
    </div>
  );
}
