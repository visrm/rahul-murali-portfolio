import { aboutMe } from "../utils/user-data.js";

const AboutMe = () => {
  return (
    <>
      <section
        className="relative h-full min-h-fit w-full max-w-4xl lg:max-w-5xl mb-10"
        id="about-me"
      >
        <div className="p-4">
          <h2 className="absolute mr-auto ml-auto px-2 text-3xl sm:text-4xl font-rye text-left text-emerald-500 text-shadow-xs text-shadow-black font-medium sm:tracking-wide uppercase">
            About me
          </h2>
          <article className="block px-2 mt-10 sm:mt-12 md:mt-14 text-sm md:text-base text-white/75 leading-relaxed text-left font-light">
            {aboutMe &&
              aboutMe.map((elem, id) => (
                <p key={`a${id}`} className="mt-4">
                  {elem?.para}
                </p>
              ))}
          </article>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
