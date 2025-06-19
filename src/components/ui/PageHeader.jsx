import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const PageHeader = ({ home, page, link }) => {
  return (
    <div className="h-60 sm:h-80 bg-gradient-to-tl from-mypurple to-mysky flex-center flex-col gap-4 pt-15 sm:pt-20 text-white">
      <h1 className="font-bold xxs:font-semibold text-2xl xxxs:text-3xl xxs:text-4xl xs:text-5xl">
        {page}
      </h1>
      <div className="flex-left gap-4">
        <Link to={"/"} className="text-14">
          {home}
        </Link>
        <HiOutlineArrowNarrowRight />
        <Link to={link} className="text-14">
          {page}
        </Link>
      </div>
    </div>
  );
};

export default PageHeader;
