const EducationTimeline = () => {
  return (
    <>
      <section className="h-full min-h-fit w-full max-w-5xl lg:max-w-7xl">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 mr-2 md:text-end">
              <time className="font-mono">2025</time>
              <div className="font-black">
                <p className="px-2 text-lg font-normal">
                  University of Calicut
                </p>
                <p className="px-2 text-sm font-sans">
                  Master of Computer Applications
                </p>
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10 ml-2 text-left">
              <time className="font-mono">2023</time>
              <div className="font-black">
                <p className="px-2 text-lg font-normal">
                  University of Calicut
                </p>
                <p className="px-2 text-sm font-sans">
                  Bachelor of Science, Mathematics
                </p>
              </div>
            </div>
            <hr />
          </li>
        </ul>
      </section>
    </>
  );
};

export default EducationTimeline;
