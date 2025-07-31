import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header ease-out duration-300 shadow shadow-black/50">
      <p className="flex px-4 sm:px-5 mx-2 text-center text-3xl font-bold tracking-wide">
        Portfolio
      </p>
      <nav className="flex justify-center items-center p-2 h-16">
        <SlideTabs />
      </nav>
    </header>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full"
    >
      <Tab setPosition={setPosition}>
        <Link to={"/"}>Home</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link to={"/projects"}>Projects</Link>
      </Tab>
      {/* <Tab setPosition={setPosition}>Contact</Tab> */}
      {/* <Tab setPosition={setPosition}>Blog</Tab> */}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-2 py-1 text-xs font-semibold uppercase mix-blend-lighten md:px-4 md:py-1.5 md:text-sm"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-6 rounded-full bg-emerald-700/50 md:h-8"
    />
  );
};

export default Header;
