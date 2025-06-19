import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section className=" text-center relative  flex-center flex-col ">
        <div className="w-full h-fit opacity-50">
          <img
            src="/notfoundbg.jpg"
            alt="404-not-found"
            className="w-full h-120 sm:h-170 object-cover"
          />
        </div>
        <div className="z-10 absolute space-y-4 ">
          <h1 className="text-7xl font-bold text-textlightBlack"> 404 </h1>
          <p className="text-2xl font-bold text-textlightBlack">
            Page Not Found
          </p>

          <p className="text-sm text-whte ">
            <strong>Oops!</strong> The page you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="button hover:bg-gradient-to-b hover:from-textlightBlack hover:to-textlightBlack "
          >
            Go Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
