import { BsGlobe2 } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { motion } from "motion/react";
import { projectsData } from "../utils/user-data.js";

// Project Details:
// Project Title: Clearly state the name of the project.
// Client/Context: Briefly describe the client or the purpose of the project (e.g., "a website for a local bakery," "a personal project to learn React").
// Problem/Solution: Explain the problem the project aimed to solve and how your work contributed to the solution.
// Your Role: Clearly outline your responsibilities and impacts to the project (e.g., "Developed the front-end with React," "Designed the database schema," "Managed the deployment pipeline").
// Technology Stack: List the programming languages, frameworks, libraries, and tools used in the project.
// Challenges & Solutions: Highlight any technical hurdles you faced and how you overcame them.
// Results/Impact: Quantify the project's success with metrics or outcomes, if possible.
// Live Demo/Source Code: Include links to live versions of the project (if applicable) and to the source code repository (e.g., GitHub).

const ProjectPage = () => {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    var projectId = params.id;

    if (projectId) {
      let detail = projectsData.filter(
        (elem) => elem.id.toString() === projectId.toString()
      );
      if (detail) {
        setData(JSON.parse(JSON.stringify(detail)));
        // console.log(data);
      }
    }
  }, [params.id]);

  return (
    <>
      <main className="relative block mx-auto h-full min-h-[90svh] sm:min-h-[100vh] w-full max-w-full text-center overflow-hidden">
        <br />
        <section className="relative p-0 mt-8 sm:mt-10 mx-auto min-h-[80vh] md:min-h-[100vh] max-w-4xl md:max-w-5xl text-white flex flex-col sm:flex-row flex-nowrap  overflow-hidden">
          {data && data.length > 0 && (
            <div className="flex flex-col flex-nowrap w-full max-w-full mx-auto justify-center items-center py-2 px-4 gap-1 md:gap-2">
              <figure className="block h-56 sm:h-72 md:h-96 w-auto sm:mb-4 rounded-md overflow-hidden transition-all duration-200">
                <img
                  alt="Project thumbnail"
                  loading="lazy"
                  src={data[0].img_url}
                  style={{
                    aspectRatio: "16/9",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </figure>
              <div className="flex flex-col flex-nowrap gap-1 p-2 w-full max-w-full font-light">
                <div className="block text-2xl sm:text-4xl font-rye text-shadow-xs text-shadow-black font-medium sm:tracking-wide uppercase w-full max-w-full">
                  {data[0].title}
                </div>

                {data[0].description.length > 0 && (
                  <div className="block text-sm sm:text-base text-left w-full max-w-full my-2">
                    {data[0].description.map((para, id) => (
                      <p
                        key={`pr${id}`}
                        className="block mt-2 first-letter:uppercase text-pretty tracking-wide"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                {data[0].tech_stack.length > 0 && (
                  <div className="flex flex-row flex-wrap w-full gap-2 max-w-full my-2 justify-start items-center">
                    <p className="text-base sm:text-lg font-normal mr-1 uppercase tracking-wide">
                      Technology Stack :
                    </p>
                    {data[0].tech_stack.map((tech, id) => (
                      <span
                        key={`tech${id}`}
                        className="p-1 px-2 text-xs sm:text-sm rounded-sm font-mono font-normal bg-emerald-700/50 border border-emerald-700 cursor-pointer select-all text-[#fff]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {data[0].problem_soln.length > 0 && (
                  <div className="my-2">
                    <p className="block text-left text-base sm:text-lg font-normal mb-1 uppercase tracking-wide">
                      Problem-solution
                    </p>
                    <div className="block text-sm sm:text-base text-left w-full max-w-full">
                      {data[0].problem_soln.map((para, id) => (
                        <p
                          key={`pbsol-pr${id}`}
                          className="block mb-2 sm:mb-4 first-letter:uppercase text-pretty tracking-wide"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {data[0].contribution.length > 0 && (
                  <div className="my-2">
                    <p className="block text-left text-base sm:text-lg font-normal mb-1 uppercase tracking-wide">
                      Contribution
                    </p>
                    <div className="block text-sm sm:text-base text-left w-full max-w-full ml-4 list-disc">
                      {data[0].contribution.map((list, id) => (
                        <p
                          key={`ctb-${id}`}
                          className="list-item mb-2 sm:mb-4 first-letter:uppercase text-pretty tracking-wide"
                        >
                          {list}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {data[0].hurdles.length > 0 && (
                  <div>
                    <p className="block text-left text-base sm:text-lg font-normal mb-1 uppercase tracking-wide">
                      Technical Hurdle
                    </p>
                    <div className="flex flex-col flex-nowrap text-sm sm:text-base text-left w-full max-w-full">
                      {data[0].hurdles.map((hurdle, id) => (
                        <div
                          key={`hdl${id}`}
                          id={`hurdle-${id}`}
                          className="block mb-2 sm:mb-4 text-pretty tracking-wide"
                        >
                          <p className="flex flex-row flex-wrap w-full h-full my-0.5">
                            <span className="font-normal">
                              <span className="inline-block w-24">
                                Challenge {id + 1}
                              </span>
                              :
                            </span>
                            <span className="ml-1.5 sm:ml-2">
                              {hurdle.challenge}
                            </span>
                          </p>
                          <p className="flex flex-row flex-wrap w-full h-full my-0.5">
                            <span className="font-normal">
                              <span className="inline-block w-24">
                                Solution
                              </span>
                              :
                            </span>
                            <span className="ml-1.5 sm:ml-2">
                              {hurdle.solution}
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {data[0].impact.length > 0 && (
                  <div className="my-2">
                    <p className="block text-left text-base sm:text-lg font-normal mb-1 uppercase tracking-wide">
                      Result/Impact
                    </p>
                    <div className="block text-sm sm:text-base text-left w-full max-w-full ml-4 list-disc">
                      {data[0].impact.map((list, id) => (
                        <p
                          key={`ctb-${id}`}
                          className="list-item mb-2 sm:mb-4 first-letter:uppercase text-pretty tracking-wide"
                        >
                          {list}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                <span
                  id="project-page-buttons"
                  className="flex flex-row flex-wrap w-full max-w-full h-full mt-4 gap-2 md:gap-3"
                >
                  <button className="cards-button text-xs sm:text-sm">
                    <a
                      href={data[0].web_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-row justify-center items-center gap-2 p-0.5 md:p-1"
                    >
                      <BsGlobe2 className="h-5 w-5 my-auto" />
                      <span>Visit Website</span>
                    </a>
                  </button>
                  {data[0].source_code.length > 0 && (
                    <button className="cards-button text-xs sm:text-sm">
                      <a
                        href={data[0].source_code}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-row justify-center items-center gap-2 p-0.5 md:p-1"
                      >
                        <FaGithub className="h-5 w-5 my-auto" />
                        <span>Source Code</span>
                      </a>
                    </button>
                  )}
                </span>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default ProjectPage;
