import { useEffect } from "react";

import Project from "../components/ui/Project";
import PageHeader from "../components/ui/PageHeader";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio | Sadaf Shahab Portfolio";
  }, []);
  return (
    <div>
      <PageHeader home={"Home"} page={"Portfolio"} link={"/portfolio"} />
      <Project />
    </div>
  );
};

export default Portfolio;
