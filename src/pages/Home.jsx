import { useEffect } from "react";
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
      <Service />
      <ProjectStats />
      <Project />
      <PricePlan />
    </div>
  );
};

export default Home;
