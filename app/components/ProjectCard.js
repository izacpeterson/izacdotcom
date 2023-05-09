export default function ProjectCard(project) {
  return (
    <a href={project.url} target="_blank" className="border border-gray-300 rounded-lg p-4 flex flex-col justify-between hover:shadow-md transition-shadow m-4">
      <div>
        <h1 className="text-2xl font-semibold mb-2">{project.title}</h1>
        <p className="text-gray-700">{project.description}</p>
      </div>
      <div className="mt-4 flex flex-wrap">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-primary text-black px-2 py-1 rounded-full text-sm mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
