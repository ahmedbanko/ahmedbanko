import { FaGithub } from "react-icons/fa";

export default function Project({ project }) {
  return (
    <li className="container mx-auto">
      <div className="flex flex-wrap justify-between md:space-x-10">
        <div className="flex">
         <div className="container mx-auto">
         <a
            className="text-m font-medium text-bodyText-primaryLight truncate dark:text-bodyText-primaryDark"
            href={project.url}
            target="_blank"
          >
            {project.title}
          </a>
          <p
            className="text-sm text-bodyText-secondaryLight dark:text-bodyText-secondaryDark"
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></p>
         </div>
        </div>
        <button className="flex min-w-8 max-w-30 max-h-8 min-h-6 text-xs items-center bg-stone-300 text-gray-950 rounded-full px-4 py-2 hover:bg-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600">
          <FaGithub className="mr-2 size-4" />
          View Source
        </button>
      </div>
    </li>
  );
}
