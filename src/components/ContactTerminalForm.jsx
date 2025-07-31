import { useEffect, useState } from "react";
import { SiTicktick } from "react-icons/si";
import { VscError } from "react-icons/vsc";
import { motion } from "motion/react";

const InputPrefixText = ({ input, inputId }) => {
  return (
    <>
      <label
        htmlFor={inputId}
        className="flex flex-row flex-nowrap items-center min-w-fit text-white/50 text-xs md:text-sm mr-1"
      >
        <span className="inline-block text-emerald-500 mr-1">~ </span>
        Enter {input} :
      </label>
    </>
  );
};

const ContactTerminalForm = () => {
  const [info, setInfo] = useState({
    emailId: "",
    name: "",
    description: "",
  });
  const [submission, setSubmission] = useState({
    emailSubmitted: false,
    nameSubmitted: false,
    descriptionSubmitted: false,
    final: false,
  });
  const [error, setError] = useState({ isError: false, errorText: "" });

  const validateEmail = (email) => {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let result = emailRegex.test(email);
    if (result) return setError({ isError: false, errorText: "" });
    else
      return setError({
        isError: true,
        errorText: "Error: Invalid Email Address.",
      });
  };

  useEffect(() => {
    setSubmission({
      emailSubmitted: false,
      nameSubmitted: false,
      descriptionSubmitted: false,
      final: false,
    });
  }, []);

  const HandleInputChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const ResetFn = () => {
    setInfo({
      emailId: "",
      name: "",
      description: "",
    });
    setSubmission({
      emailSubmitted: false,
      nameSubmitted: false,
      descriptionSubmitted: false,
      final: false,
    });
    setError({ isError: false, errorText: "" });
  };

  return (
    <>
      <section className="relative block h-full min-h-60 w-full max-w-5xl lg:max-w-7xl p-2 my-2 sm:my-4 md:mb-6 mx-auto">
        <motion.article
          className="block w-full h-full max-w-[90%] mx-auto"
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            duration: "0.3",
          }}
        >
          {/* Terminal header */}
          <div className="h-8 md:h-10 max-h-10 max-w-full flex flex-row flex-nowrap items-center bg-zinc-950/90 px-2 rounded-t-md">
            <div className="flex flex-nowrap items-start w-full max-w-14 max-h-full mt-2">
              <svg height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                <circle r="5" cx="10" cy="10" fill="red" />
              </svg>
              <svg height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                <circle r="5" cx="10" cy="10" fill="yellow" />
              </svg>
              <svg height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                <circle r="5" cx="10" cy="10" fill="green" />
              </svg>
            </div>
            <span className="block w-full text-center font-mono text-xs md:text-sm">
              contact@rahul-murali
            </span>
          </div>
          {/* Terminal body */}
          <div className="flex flex-col flex-nowrap gap-1 sm:gap-2 w-full max-w-full bg-white/5 backdrop-blur-md p-2 md:px-4 pb-4 rounded-b-md text-left font-mono text-xs md:text-sm">
            <span>Hey there! link me up 🔗</span>
            <hr />{" "}
            <div
              className="flex flex-col flex-nowrap gap-1 w-full max-w-full"
              id="terminal-container"
            >
              {/* FIRST BLOCK : ASKS FOR USERS EMAIL */}
              <div id="first-terminal-block">
                <p className="font-mono">
                  Let's start with your email. Could you give me{" "}
                  <span className="text-emerald-500">your email?</span>
                </p>

                {!submission.emailSubmitted && (
                  <form
                    autoComplete="email"
                    className="flex flex-row"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validateEmail(info.emailId);
                      setSubmission({ ...submission, emailSubmitted: true });
                    }}
                  >
                    <InputPrefixText input={"Email"} inputId={"emailId"} />
                    <input
                      type="email"
                      id="emailId"
                      name="emailId"
                      className="focus:outline-0 border-0 w-full max-w-full caret-emerald-500"
                      onChange={HandleInputChange}
                      maxLength={"30ch"}
                    />
                  </form>
                )}

                {submission.emailSubmitted && !error.isError && (
                  <p
                    className={`flex flex-row flex-nowrap items-center font-mono text-emerald-500 gap-2 ${
                      !info.emailId && "hidden"
                    }`}
                  >
                    <SiTicktick className="h-4 w-4" />
                    <span>{info.emailId}</span>
                  </p>
                )}

                {submission.emailSubmitted && error.isError && (
                  <p
                    className={`flex flex-row flex-nowrap items-center font-mono text-red-500 gap-2 ${
                      !info.emailId && "hidden"
                    }`}
                  >
                    <VscError className="h-4 w-4" />
                    <span>{info.emailId}</span>
                  </p>
                )}
              </div>

              {/* SECOND BLOCK : ASKS FOR USERS NAME */}
              {submission.emailSubmitted && !error.isError && (
                <div id="second-terminal-block">
                  <p className="font-mono">
                    Fair enough. What's{" "}
                    <span className="text-emerald-500">your name?</span>
                  </p>
                  {!submission.nameSubmitted && (
                    <form
                      autoComplete="name"
                      className="flex flex-row"
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmission({ ...submission, nameSubmitted: true });
                      }}
                    >
                      <InputPrefixText input={"Name"} inputId={"name"} />
                      <input
                        id="name"
                        name="name"
                        className="focus:outline-0 border-0 w-full max-w-full caret-emerald-500"
                        onChange={HandleInputChange}
                        maxLength={"30ch"}
                      />
                    </form>
                  )}
                  {submission.nameSubmitted && (
                    <p
                      className={`flex flex-row flex-nowrap items-center font-mono text-emerald-500 gap-2 ${
                        !info.name && "hidden"
                      }`}
                    >
                      <SiTicktick className="h-4 w-4" />
                      <span>{info.name}</span>
                    </p>
                  )}
                </div>
              )}

              {/* THIRD BLOCK : ASKS FOR DESCRIPTION OF SUBJECT WITH WHICH THE USER NEEDS HELP */}
              {submission.nameSubmitted && (
                <div id="third-terminal-block">
                  <p className="font-mono">
                    Great. So, what can I{" "}
                    <span className="text-emerald-500">help you</span> with?
                  </p>
                  {!submission.descriptionSubmitted && (
                    <form
                      className="flex flex-row"
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmission({
                          ...submission,
                          descriptionSubmitted: true,
                        });
                      }}
                    >
                      <InputPrefixText
                        input={"Description"}
                        inputId={"description"}
                      />
                      <input
                        id="description"
                        name="description"
                        className="focus:outline-0 border-0 w-full max-w-full caret-emerald-500"
                        onChange={HandleInputChange}
                        maxLength={"250ch"}
                      />
                    </form>
                  )}
                  {submission.descriptionSubmitted && (
                    <p
                      className={`flex flex-row flex-nowrap items-center font-mono text-emerald-500 gap-2 ${
                        !info.description && "hidden"
                      }`}
                    >
                      <SiTicktick className="h-4 w-4" />
                      <span>{info.description}</span>
                    </p>
                  )}
                </div>
              )}

              {/* FOURTH BLOCK : ASKS FOR USERS CONFIRMATION OF PROVIDED DETAIL, BEFORE FINAL SUBMIT */}
              {submission.descriptionSubmitted && (
                <div
                  id="fourth-terminal-block"
                  className="flex flex-col flex-nowrap gap-1"
                >
                  <p className="flex flex-row font-mono">
                    I see. Here's what{" "}
                    <span className="text-emerald-500 ml-1"> I got:</span>
                  </p>

                  <ul className="list list-disc">
                    <li className="list-item list-inside">
                      <span className="text-emerald-500 mr-1">Email:</span>
                      {info.emailId}
                    </li>
                    <li className="list-item list-inside">
                      <span className="text-emerald-500 mr-1">Name:</span>
                      {info.name}
                    </li>
                    <li className="list-item list-inside">
                      <span className="text-emerald-500 mr-1">
                        Description:
                      </span>
                      {info.description}
                    </li>
                  </ul>

                  <form>
                    Is this Correct (Y/N)?
                    <div className="flex gap-2 mt-2">
                      <button
                        className="btn-xs border px-1"
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        Yes! Submit
                      </button>
                      <button
                        className="btn-xs border px-1"
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          ResetFn();
                        }}
                      >
                        No! Restart
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </motion.article>
      </section>
    </>
  );
};

export default ContactTerminalForm;
