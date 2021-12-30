export function ProjectTags(props) {
  const project = props.project;
  return (
    <div className="px-6 pt-2 pb-2">
      {project.tags.map((tag) => {
        return (
          <span
            key={tag}
            className="inline-block bg-zinc200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
}
