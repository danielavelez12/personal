import { Card } from "../components/Card";
import { NavBar } from "../components/Navbar";
import { ProjectLinks } from "../components/ProjectLinks";
import { ProjectTags } from "../components/ProjectTags";
import { projects } from "../repo/projectSrc";

function Projects() {
  console.log(projects);
  return (
    <>
      <NavBar></NavBar>
      <div className="container mx-auto px-12 py-5 h-screen bg-white">
        <h1>projects</h1>
        <div className="flex flex-wrap">
          {projects.map((project) => {
            return (
              <div className="w-[34rem] mx-2 py-3" key={project.title}>
                <Card className="max-w-lg">
                  <div className="px-6 py-4">
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
    </>
  );
}

export default Projects;
