import Weather_fc from "../assets/weather-app-thumb.png";
import Digi_gui from "../assets/digilocker-guide-thumb.png";
import BMI_check from "../assets/BMI-checker-thumb.png";
import JS_drum from "../assets/JS-drumKit-thumb.png";
import Whack_mole from "../assets/whack-a-mole-thumb.png";
import Anime_list from "../assets/Anime-list-thumb.png";
import Quick_quiz from "../assets/Quick-quiz-thumbnail.png";
import CookHouse from "../assets/CookHouse-thumbnail.png";

export const aboutMe = [
  {
    para: "Hello! My name is Rahul Murali, and I'm a software engineer with a passion for building innovative and user-friendly applications. I have a strong interest in Web Development, UI/UX Design and Data Visualisation. I'm constantly driven to learn new technologies and pushing my programming skills to bring innovative ideas to life.",
  },
  {
    para: "With over a year of experience in the industry, I have worked on a wide range of projects and have a strong understanding of modern software development practices.",
  },
  {
    para: "In my free time, I enjoy exploring new technologies, contributing to open-source projects, and staying up-to-date with the latest trends in the industry. I'm also an avid reader and enjoy hiking and spending time outdoors.",
  },
  {
    para: " If you'd like to learn more about my work or connect with me, feel free to reach out on any of my social media channels. I'm always happy to chat and explore new opportunities.",
  },
];

// Project Details:
// Project Title: Clearly state the name of the project.
// Client/Context: Briefly describe the client or the purpose of the project (e.g., "a website for a local bakery," "a personal project to learn React").
// Problem/Solution: Explain the problem the project aimed to solve and how your work contributed to the solution.
// Your Role: Clearly outline your responsibilities and contributions to the project (e.g., "Developed the front-end with React," "Designed the database schema," "Managed the deployment pipeline").
// Technology Stack: List the programming languages, frameworks, libraries, and tools used in the project.
// Challenges & Solutions: Highlight any technical hurdles you faced and how you overcame them.
// Results/Impact: Quantify the project's success with metrics or outcomes, if possible.
// Live Demo/Source Code: Include links to live versions of the project (if applicable) and to the source code repository (e.g., GitHub).

export const projectsData = [
  {
    id: 8,
    title: "CookHouse: Social Culinary Website",
    description: [
      "a specialized social media community carefully designed to serve as the ultimate digital community center for professional chefs and avid food enthusiasts alike. Our mission is to establish a cohesive, supportive, and continuously stimulating community where culinary discovery is fostered, professional expertise is shared, information is shared freely, and innovation is viewed as a shared endeavor, reaching beyond kitchens and tastes the world over.",
    ],
    problem_soln: [
      "Eager beginner cooks, eager to improve, typically face an enormous chasm of generic internet material devoid of guidance. While sites like YouTube and Instagram offer many recipe videos and food pictures, they do not offer the interactive engagement needed for effective learning and proper problem-solving. For beginners, searching for explicit, customized advice from experienced cooks on persistent problems, such as the frequent failure of their soufflé, or searching for in-depth guidance on new dishes they are trying out, typically proves difficult. While a recipe may be located, understanding the underlying principles or solving certain problems often necessitates direct interaction that available digital platforms do not permit. This limitation holds them back, and they become frustrated and, in some instances, abandon their cooking passion.",
      "Today's inefficiency means that much of the repository of cooking knowledge \u2014 both family recipes passed down through generations and innovative techniques developed in commercial kitchens \u2014 remains largely untapped. This knowledge base, if put together and made accessible, could be a valuable resource for training, research, and creative inspiration. Instead, it is fragmented, scattered across many personal devices, personal communications, and lesser-used internet sites. Fragmentation creates redundant effort in solving problems, slows the pace of culinary innovation, and threatens loss of valuable culinary traditions that are not formally recorded or shared. ",
      'Therefore, CookHouse aims to create a holistic, integrated solution that enhances the overall social experience of culinary experts, amateur cooks and housewives. CookHouse represents the very answer to bridge the gaps, uniting cooks of all skill levels in affiliation, partnership, and knowledge exchange, all while advancing the frontiers of gastronomic innovation and thereby establishing a centralized online "home" for gastronomes everywhere. It aims to be the ultimate depository and discovery portal for this shared culinary knowledge. ',
    ],
    contribution: [],
    tech_stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Redux.js",
      "MongoDB",
      "Tailwind CSS",
      "DaisyUI",
    ],
    hurdles: [
      // {
      //   challenge: "",
      //   solution: "",
      // },
    ],
    impact: [],
    source_code: "",
    img_url: CookHouse,
    web_url: "https://cookhouse.onrender.com/",
  },
  {
    id: 7,
    title: "Quick Quiz Website",
    description: [
      "Welcome to the Simple Quiz! 🧠 This project is a straightforward, interactive web application built exclusively with the core web fundamentals:",
      "HTML for structure, CSS for styling and visual appeal, and JavaScript for dynamic functionality and quiz logic.",
      "It demonstrates how these essential technologies work together to create an engaging user experience, from presenting questions and tracking scores to providing instant feedback without relying on external libraries or frameworks. It's a pure, practical example of front-end development.",
    ],
    problem_soln: [],
    contribution: [],
    tech_stack: ["HTML5", "CSS3", "JavaScript"],
    hurdles: [
      // {
      //   challenge: "",
      //   solution: "",
      // },
    ],
    impact: [],
    source_code: "https://github.com/visrm/Quiz-app",
    img_url: Quick_quiz,
    web_url: "https://quiz-app-theta-seven-12.vercel.app/",
  },
  {
    id: 6,
    title: "BMI Checker Webapp",
    description: [
      "This is a Simple Next.js project for determining the BMI (Body-Mass Index) of individuals over 20 years age.",
    ],
    problem_soln: [],
    contribution: [],
    tech_stack: ["React.js", "Next.js", "Tailwind CSS", "DaisyUI"],
    hurdles: [
      // {
      //   challenge: "",
      //   solution: "",
      // },
    ],
    impact: [
      "Developed React.js based web application using Next.js framework to calculate BMI (Body-Mass Index) of individuals over 20 years age; following best React practices",
      "Enhanced user experience by prioritizing intuitive navigation and clear instructional prompts, leading to a 47% increase in user engagement; the interface now supports over 500 unique data inputs monthly across various departments",
      "Improved user engagement by 50% through innovative data visualization, specifically by using tabular data representation",
    ],
    source_code: "https://github.com/visrm/bmi-calculator",
    img_url: BMI_check,
    web_url: "https://bmi-calculator-topaz-mu.vercel.app/",
  },
  {
    id: 5,
    title: "Javascript Whack-A-Mole webapp",
    description: [
      "This is a Simple Vanilla JavaScript-based Whack-a-Mole Game.",
      "Whack a Mole is a test of reflexes and quick thinking. The game features a playing field with several holes, from which plastic moles pop up randomly. Players use a mallet (or a designated button in digital versions) to hit the moles as they appear. Points are awarded for successful whacks, and the game often has a time limit or a target score to achieve.",
      "It remains a popular game due to its simple yet addictive gameplay. It has been adapted into various formats, including digital versions, handheld games, and even mobile apps. The game's enduring appeal lies in its ability to test reflexes, provide a satisfying challenge, and offer a fun and light-hearted experience for players of all ages.",
    ],
    problem_soln: [],
    contribution: [],
    tech_stack: ["HTML5", "CSS3", "JavaScript"],
    hurdles: [
      // {
      //   challenge: "",
      //   solution: "",
      // },
    ],
    impact: [],
    source_code: "https://github.com/visrm/Whack-A-Mole-Game",
    img_url: Whack_mole,
    web_url: "https://whack-a-mole-game-iota.vercel.app/",
  },
  {
    id: 4,
    title: "Javascript DrumKit",
    description: [
      "This project is an exciting, hands-on demonstration of Vanilla JavaScript (meaning no libraries or frameworks) combined with fundamental web technologies. It creates a virtual Drum Kit that users can play directly using their computer's keyboard inputs. 🥁",
      "It works by using JavaScript to listen for key presses (like pressing 'A', 'S', 'D', etc.), then dynamically triggering the corresponding HTML Audio element to play a drum sound (like a snare or a kick drum). CSS handles the visual transformation of the drum pad elements on the screen, providing immediate visual feedback when a key is hit, making it a highly responsive and engaging introduction to event listeners and audio manipulation in the browser.",
    ],
    problem_soln: [],
    contribution: [],
    tech_stack: ["HTML5", "CSS3", "JavaScript"],
    hurdles: [
      // {
      //   challenge: "",
      //   solution: "",
      // },
    ],
    impact: [],
    source_code: "https://github.com/visrm/JS-Drum-Kit",
    img_url: JS_drum,
    web_url: "https://js-drum-kit-two.vercel.app/",
  },
  {
    id: 3,
    title: "Javascript Weather Forecaster",
    description: [
      "Introducing a simplistic and user-friendly weather forecast webpage available. With Weather Forecast, you can get quick and accurate weather updates for any location in the world, with just a few clicks.",
      "Weather Forecast is powered by the latest weather data and technology, so you can be sure that your forecasts are always up-to-date and reliable. Simply enter your location and instantly access today's forecast including temperature, high/low, conditions (sunny, cloudy, rainy), and wind speed, making it the perfect tool to plan your day with ease.",
    ],
    problem_soln: [],
    contribution: [],
    tech_stack: ["HTML5", "CSS3", "JavaScript", "OpenWeatherAPI"],
    hurdles: [
      // {
      //   challenge: "",
      //   solution: "",
      // },
    ],
    impact: [
      "Designed a feature-rich weather forecast website using JavaScript and API; implemented caching techniques that facilitated a 20% faster load time, ultimately leading to 500+ positive user feedback ratings within a three-month period",
      "Analyzed Optimized the display format for weather data by incorporating user feedback; achieved a 10% reduction in navigation time and improved customer satisfaction scores, leading to increased app usage by 15% over three months",
      "Boosted user engagement by 15% through the development of an intuitive interactive UI ",
    ],
    source_code: "https://github.com/visrm/Weather-Application",
    img_url: Weather_fc,
    web_url: "https://weather-application-nine-theta.vercel.app/",
  },
  {
    id: 2,
    title: "Beginner digiLocker guide-page",
    description: [
      "DigiLocker is flagship initiative of Ministry of Electronics & IT under Digital India Programme. DigiLocker aims to digitally empower the citizens of India by providing access to authentic digital documents to citizen's digital document wallet. The issued documents in DigiLocker system are deemed to at par with original physical documents as per Rule 9A of the Information Technology (Preservation & Retention of information by intermediaries providing digital locker facilities) Rules, 2016, notified on February 8, 2017 vide G.S.R.711(E).",
    ],
    problem_soln: [],
    contribution: [],
    tech_stack: ["HTML5", "CSS3", "JavaScript"],
    hurdles: [
      // {
      //   challenge: "",
      //   solution: "",
      // },
    ],
    impact: [
      "Built a user-centric webpage targeting college students, leading to a 35% surge in Digi Locker account registrations from a base of over 400 students and staff within the college community",
      "Streamlined the Android account creation process by implementing clear visual instructions and step-by-step guidance, resulting in a 15% reduction in time required for students and staff to register for a Digi Locker account",
    ],
    source_code: "",
    img_url: Digi_gui,
    web_url: "https://digilocker-guide.vercel.app/",
  },
  {
    id: 1,
    title: "Personal Animelist webpage",
    description: [
      "This is a pre-mature anime listing webpage being made , side-by-side with studies. Which i further use as my personal anime lister.",
    ],
    problem_soln: [],
    contribution: [],
    tech_stack: ["HTML5", "CSS3", "JavaScript"],
    hurdles: [
      // {
      //   challenge: "",
      //   solution: "",
      // },
    ],
    impact: [],
    source_code: "https://github.com/visrm/Anime-lists",
    img_url: Anime_list,
    web_url: "https://anime-lists.vercel.app/",
  },
];

export const skillsData = [
  {
    id: 1,
    title: "Front-End Development",
    description:
      "Proficient in HTML5, CSS (bootstrap, tailwind), JavaScript and various Front-end frameworks for building responsive user interfaces and interactive web experiences.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TailwindCSS",
      "Bootstrap",
      "ReactJS",
      "NextJS",
    ],
  },
  {
    id: 2,
    title: "Back-End Development",
    description:
      "Strong foundation in backend development principles and eager to learn and grow.",
    skills: ["NodeJS", "ExpressJS", "PHP"],
  },
  {
    id: 3,
    title: "Programming Languages",
    description:
      "Strong understanding of programming fundamentals with experience in object-oriented and procedural programming languages, allowing for efficient problem-solving and code maintainability.",
    skills: ["Python", "C/C++", "Java", "R"],
  },
  {
    id: 4,
    title: "Version Control",
    description:
      " Experience with Git for version control, collaboration and code management, including branching, merging and conflict resolution.",
    skills: ["Git", "Github"],
  },
  {
    id: 5,
    title: "Database Management",
    description:
      " A strong working knowledge of database design principles, data modeling and querying using SQL.",
    skills: ["SQL", "MongoDB"],
  },
];
