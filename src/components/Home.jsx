import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import BgArrow from "/arrow-hero-to-about.svg";
import ContactTerminalForm from "./ContactTerminalForm";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <main className="block mx-auto h-full min-h-[90svh] md:min-h-[90vh] w-full max-w-full text-center">
        <section className="relative flex flex-col flex-nowrap justify-center items-center gap-2 sm:gap-3 lg:gap-4 overflow-hidden">
          <Hero />
          <div className="absolute hidden lg:block lg:top-[16%] left-[35%] lg:h-56">
            <img src={BgArrow} alt="arrow-down" className="block text-white/83 opacity-75"/>
          </div>
          <AboutMe />
          <div className="block my-2 sm:my-4 md:my-6">
            <Projects count={6} />
            <div className="block h-full w-full max-w-full rounded-full">
              <Link to={"/projects"}>
                <button
                  className="btn btn-sm border border-white hover:border-emerald-500 shadow-2xs shadow-black/0 text-white/83 text-sm sm:text-base font-normal font-mono bg-transparent hover:bg-emerald-700/50 px-4 mx-auto mb-2 sm:mb-4 tracking-wide uppercase rounded-full transition-all duration-300"
                  onMouseEnter={() => {
                    document
                      .getElementById("see-more-arrow")
                      .classList.remove("hidden");
                  }}
                  onMouseLeave={() => {
                    document
                      .getElementById("see-more-arrow")
                      .classList.add("hidden");
                  }}
                >
                  <span>see more </span>
                  <FaArrowRightLong
                    id="see-more-arrow"
                    className="h-4 w-4 hidden"
                  />
                </button>
              </Link>
            </div>
          </div>
          <Skills />
          <ContactTerminalForm />
        </section>
      </main>
    </>
  );
};

export default Home;
