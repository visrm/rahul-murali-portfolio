import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProjectPage from "./components/ProjectPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <div className="relative block h-full w-full max-w-full min-h-full scroll-smooth">
        <Header />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </div>
      <Analytics />
    </>
  );
};

export default App;
