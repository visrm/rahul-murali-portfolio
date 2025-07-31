import { BsGlobe2 } from "react-icons/bs";
import { MdInfoOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function ProjectCard({ projectData }) {
  return (
    <>
      <motion.div
        className="cards sm:max-w-[380px] rounded-lg"
        initial={{ x: -25, scale: 0.95, opacity: 0 }}
        whileInView={{ x: 0, scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          duration: 0.3,
        }}
      >
        <Link to={`/project/${projectData?.id}`}>
          <figure className="cards-fig">
            <img
              alt="Project thumbnail"
              loading="lazy"
              src={projectData.img_url}
              style={{
                aspectRatio: "16/9",
              }}
            />
          </figure>
        </Link>
        <div className="flex flex-col flex-nowrap justify-center py-2 gap-0.5 sm:gap-1 mb-2 sm:mb-4">
          <p className="cards-desc pt-1 text-lg sm:text-base text-center max-h-[80%] w-full max-w-[90%] sm:max-w-[95%] truncate">
            <Link to={`/project/${projectData?.id}`}>{projectData.title}</Link>
          </p>
          <div className="flex flex-row flex-wrap gap-2">
            <button className="cards-button text-sm sm:text-xs font-medium">
              <Link
                to={projectData.web_url}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row justify-center items-center gap-1"
              >
                <BsGlobe2 className="h-4 w-4 my-auto" /> <span>demo</span>
              </Link>
            </button>
            <button className="cards-button text-sm sm:text-xs font-medium">
              <Link
                to={`/project/${projectData?.id}`}
                className="flex flex-row justify-center items-center gap-1"
              >
                <MdInfoOutline className="h-5 w-5 my-auto" /> <span>info</span>
              </Link>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
