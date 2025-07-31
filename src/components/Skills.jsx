import { skillsData } from "../utils/user-data.js";
import { motion } from "motion/react";
// import BgStar from "/3stars.svg";

const Skills = () => {
  return (
    <section className="skills flex w-full max-w-5xl lg:max-w-7xl h-full sm:min-h-full my-2 sm:my-4 py-2 sm:place-content-center bg-opacity-25">
      <motion.article
        className="flex flex-col flex-nowrap pb-2 sm:pb-6 rounded-xl mx-auto"
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <div className="skills-grid grid gap-3 sm:gap-4 md:gap-6 mx-auto">
          <h2 className="relative p-2 text-3xl sm:text-4xl font-rye text-shadow-xs text-shadow-black font-medium sm:tracking-wide uppercase place-content-center cursor-pointer">
            <span className="inline-block px-2">Technical Skills</span>
            <div className="absolute left-[30%] top-[25%] dark-green-circle-gradient rounded-full h-28 w-28 blur-2xl"></div>
            <div className="absolute hidden lg:block lg:top-10 lg:left-[75%] lg:h-10 opacity-75">
              <img src={"/3stars.svg"} alt="stars" />
            </div>
          </h2>
          {skillsData.map((data) => (
            <article
              key={`s${data.id}`}
              className="skills-grid-element p-4 lg:px-6"
            >
              <h3 className="uppercase font-medium font-sans text-base lg:text-lg tracking-wide">
                <span>{data.title}</span>
              </h3>
              <p className="flex flex-row flex-wrap gap-2 w-full max-w-full">
                {data.skills.map((skill, id) => (
                  <span
                    key={id}
                    className="px-2 rounded-sm font-mono text-xs sm:text-sm bg-emerald-700/50 border border-emerald-700 cursor-pointer select-all text-[#fff]"
                  >
                    {skill}
                  </span>
                ))}
              </p>
              <p className="font-light font-sans text-white/75 text-sm tracking-wide min-w-fit">
                {data.description}
              </p>
            </article>
          ))}
        </div>
      </motion.article>
    </section>
  );
};

export default Skills;
