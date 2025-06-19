import { useEffect } from "react";
import AboutMe from "../components/ui/AboutMe";
import Hero from "../components/ui/Hero";
import PricePlan from "../components/ui/PricePlan";
import Project from "../components/ui/Project";
import ProjectStats from "../components/ui/ProjectStats";
import Service from "../components/ui/Service";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Sadaf Shahab Portfolio";
  }, []);
  return (
    <div>
      <Hero />
      <AboutMe />
      <Service />
      <ProjectStats />
      <Project />
      <PricePlan />
    </div>
  );
};

export default Home;
