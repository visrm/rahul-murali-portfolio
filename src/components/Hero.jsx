import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import pfp_bg from "../assets/user_profile-bg.png";
import pfp from "../assets/user_profile-fg.png";
import BlurText from "./BlurText";

export default function Hero() {
  return (
    <>
      <section className="hero relative p-0 min-h-[90svh] md:min-h-[100vh] h-full w-full text-base-200 flex flex-col sm:flex-row flex-nowrap justify-start overflow-hidden">
        <article className="max-w-full md:w-10/12 select-none">
          <div className="hero-overlay bg-blend-overlay" />
          <div className="relative hero-content flex-col h-full lg:flex-row flex-nowrap justify-start mx-auto md:m-5">
            <div className="absolute block left-[10%] top-[0%] dark-green-circle-gradient rounded-full h-72 w-72 blur-[72px] -z-20"></div>
            <figure className="user-profile-card block relative w-2/4 sm:w-1/3 md:2/3 lg:w-3/12 mt-14 sm:mt-0 rounded-full overflow-hidden bg-contain [perspective:500px] hover:shadow-emerald-700 shadow-lg">
              <img alt="PROFILE PIC BG" id="user-profile-bg-img" src={pfp_bg} />
              <img
                alt="PROFILE PIC"
                id="user-profile-img"
                className="absolute top-0 left-0 z-10 hover:scale-110 transition-all duration-300"
                src={pfp}
              />
            </figure>

            <div className="p-1 sm:p-2 relative text-left cursor-pointer">
              <p className="flex max-w-[32rem] py-2 text-xs sm:text-sm text-emerald-500 font-mono font-bold tracking-wide">
                Hello! I am..
              </p>
              <hgroup className="font-rye">
                <h1 className="sm:text-6xl text-5xl text-white/75 text-shadow-xs text-shadow-black">
                  Rahul Murali
                </h1>
                <h4 className="sm:text-5xl text-4xl mb-4 text-white/50 text-shadow-xs text-shadow-black">
                  I develop websites and web applications.
                </h4>
              </hgroup>
              <div className="flex py-4 sm:py-2 max-w-[32rem] text-sm text-white/50 text-shadow-xs text-shadow-black font-light tracking-wide">
                <BlurText
                  text={
                    "This portfolio showcases Rahul's projects, where you'll see his problem-solving approach and ability to translate concepts into functional applications."
                  }
                />
              </div>
            </div>
          </div>
        </article>
        <article
          id="shuffleGrid"
          className="w-full min-h-full hidden md:block md:w-4/12 md:absolute md:right-[-10rem] md:top-20"
        >
          <ShuffleGrid />
        </article>
      </section>
    </>
  );
}

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    src: "",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
  },
  {
    id: 6,
    src: "",
  },
  {
    id: 7,
    src: "",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,
    src: "",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
  },
  {
    id: 12,
    src: "",
  },
  {
    id: 13,
    src: "",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    const shuffleSquares = () => {
      setSquares(generateSquares());

      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="grid md:grid-flow-col grid-cols-6 md:grid-cols-4 md:grid-rows-4 grid-rows-3 min-h-[100px] md:min-h-[490px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};
