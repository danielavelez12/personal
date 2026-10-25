export function ProjectTags(props) {
  const project = props.project;
  return (
    <div className="px-4 pb-3">
      {project.tags.map((tag) => {
        return (
          <span
            key={tag}
            className="inline-block border border-zinc200 px-2 py-1 font-mono text-xs text-med mr-2 mb-2"
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
}
