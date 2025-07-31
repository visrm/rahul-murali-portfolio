import ProjectCard from "./ProjectCard";
import { projectsData } from "../utils/user-data.js";
import { useEffect, useState } from "react";

const Projects = ({ count }) => {
  const [projectItems, setProjectItems] = useState(projectsData);

  useEffect(() => {
    setProjectItems(projectsData);
    if (count && count > projectsData.length) {
      console.log(
        `Error: Count (${count}) Exceeds the Projects count of ${projectsData.length}.`
      );
    }

    if (count && !isNaN(count)) {
      const filteredProjects = projectItems.slice(0, count);
      count === filteredProjects.length && setProjectItems(filteredProjects);
    }
  }, [count]);

  return (
    <>
      <section className="relative h-full min-h-fit w-full max-w-5xl lg:max-w-7xl mx-auto">
        <h2 className="px-2 text-3xl sm:text-4xl font-rye text-shadow-xs text-shadow-black font-medium sm:tracking-wide uppercase">
          Projects
        </h2>
        <article className="px-4 py-4 w-full max-full" id="projects">
          {projectItems &&
            projectItems.map((prj) => (
              <ProjectCard key={`p${prj.id}`} projectData={prj} />
            ))}
        </article>
      </section>
    </>
  );
};

export default Projects;
