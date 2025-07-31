import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";

const BlurText = ({ text, className }) => {
  const content = text?.trim().toString();
  let words = content?.split(" ");
  let classes = className?.trim().toString();

  return (
    <>
      <div>
        {words &&
          words.map((word, index) => (
            <LazyMotion features={domAnimation}>
              <m.p
                key={index}
                initial={{ filter: "blur(8px)", opacity: 0, y: 12 }}
                animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.1 * index,
                  ease: "backIn",
                }}
                className={`${classes} inline-block mr-1.5`}
              >
                {word}
              </m.p>
            </LazyMotion>
          ))}
      </div>
    </>
  );
};

export default BlurText;
