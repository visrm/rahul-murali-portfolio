import { motion } from "motion/react";

const BlurText = ({ text, className }) => {
  const content = text?.trim().toString();
  let words = content?.split(" ");
  let classes = className?.trim().toString();

  return (
    <>
      <div>
        {words && words.map((word, index) => (
          <motion.p
            key={index}
            initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
            animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 * index, ease: "easeInOut" }}
            className={`${classes} inline-block mr-1.5`}
          >
            {word}
          </motion.p>
        ))}
      </div>
    </>
  );
};

export default BlurText;
