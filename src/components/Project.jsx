export default function Project({ project }) {
  return (
    <li>
        <div className="bg-gray-200 rounded-md p-4">
          <a
            href={project.url ? project.url : undefined}
            target="_blank"
            className="font-bold"
          >
            {project.title}
          </a>
          <p dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>
    </li>
  );
}
