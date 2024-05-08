export default function Project({ project }) {
  return (

    <li class="pb-2 sm:pb-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
         <div class="flex-1 min-w-0">
            <a class="text-sm font-medium text-gray-900 truncate dark:text-white" href={project.url}
            target="_blank">
               {project.title}
            </a>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400" dangerouslySetInnerHTML={{ __html: project.description }}>
            </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
           <a href={project.sourceCode} target="_blank">Source Code</a>
         </div>
      </div>
   </li>
    
  );
}
