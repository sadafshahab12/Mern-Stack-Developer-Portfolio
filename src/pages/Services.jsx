import { useEffect } from "react";
import PageHeader from "../components/ui/PageHeader";
import Service from "../components/ui/Service";

const Services = () => {
  useEffect(() => {
    document.title = "Services | Sadaf Shahab Portfolio";
  }, []);
  return (
    <div>
      <PageHeader home={"Home"} page={"Services"} link={"/services"} />
      <Service />
    </div>
  );
};

export default Services;
