import Project from "./Project";
import projects from "/data/projects.json";

const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <Project
          img={project.img}
          key={project.title}
          title={project.title}
          description={project.description}
          href={project.url}
          details={project.details}
          skills={project.skills}
        />
      ))}
    </div>
  );
};

export default ProjectList;
