import { useEffect } from "react";
import PageHeader from "../components/ui/PageHeader";
import PricePlan from "../components/ui/PricePlan";
const Pricing = () => {
  useEffect(() => {
    document.title = "Pricing | Sadaf Shahab Portfolio";
  }, []);
  return (
    <div className="pt-4 pb-20 bg-[#f9f9ff]">
      <PageHeader home={"Home"} page={"Price Plan"} link={"/pricing"} />
      <PricePlan />
    </div>
  );
};

export default Pricing;
