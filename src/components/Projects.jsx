import ProjectCard from "./ProjectCard";
import { projectsData } from "../utils/user-data.js";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

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
        <h2 className="block px-2 mb-4 text-3xl sm:text-4xl font-rye text-shadow-xs text-shadow-black font-medium sm:tracking-wide uppercase">
          Projects
        </h2>
        <motion.article
          className="px-4 py-4 w-full max-full"
          id="projects"
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "tween",
            duration: 0.5,
          }}
        >
          {projectItems &&
            projectItems.map((prj) => (
              <ProjectCard key={`p${prj.id}`} projectData={prj} />
            ))}
        </motion.article>
      </section>
    </>
  );
};

export default Projects;
