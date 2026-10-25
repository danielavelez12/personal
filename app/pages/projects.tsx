import { Card } from "../components/Card";
import { NavBar } from "../components/Navbar";
import { ProjectLinks } from "../components/ProjectLinks";
import { ProjectTags } from "../components/ProjectTags";
import { projects } from "../repo/projectSrc";

function Projects() {
  console.log(projects);
  return (
    <>
      <div className="page-shell h-screen flex flex-col">
        <NavBar></NavBar>
        <div className="container mx-auto px-12 py-5 flex flex-col flex-1 min-h-0 page-top">
          <div className="page-sheet flex flex-col flex-1 min-h-0">
            <div className="shrink-0">
            <h1>Projects</h1>
          </div>
          <div
            data-main-scroll
            className="flex flex-wrap content-start flex-1 min-h-0 overflow-y-auto border-t-2 border-t-zinc200"
          >
          {projects.map((project) => {
            return (
              <div className="project-item w-[22rem] mx-2 py-3" key={project.title}>
                <Card className="max-w-lg project-card">
                  <div className="px-4 py-3">
                    <div className="flex justify-between items-center">
                      <div className="font-bold text-med text-lg mb-2">
                        {project.title}
                      </div>
                      <div className="text-sm text-med">{project.date}</div>
                    </div>
                    <p className="text-med text-sm py-2 pb-5">{project.body}</p>
                    <div className="flex">
                      <p className="text-light text-sm">
                        <strong>Team members:</strong>
                      </p>
                      <p className="text-med text-sm  ml-2">{project.team}</p>
                    </div>
                    <div className="flex pb-2">
                      <p className="text-light text-sm">
                        <strong>As part of:</strong>
                      </p>
                      <p className="text-med text-sm ml-2">
                        {project.programs}
                      </p>
                    </div>
                    <ProjectLinks project={project}></ProjectLinks>
                  </div>
                  <ProjectTags project={project}></ProjectTags>
                </Card>
              </div>
            );
          })}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
