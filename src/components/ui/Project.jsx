import { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { GoChevronDown } from "react-icons/go";
import { projectData } from "./Data";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Project = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectPerPage = 6;

  const filteredProjects = projectData.filter((project) => {
    if (selectedFilter === "All") {
      return true;
    }
    return project.technologies_used?.some((tech) =>
      tech
        .split(",")
        .map((t) => t.trim().toLowerCase())
        .includes(selectedFilter.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredProjects.length / projectPerPage);
  const indexOfLastProject = currentPage * projectPerPage;
  const indexOfFirstProject = indexOfLastProject - projectPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const [isOpen, setIsOpen] = useState(false);
  const filterArray = [
    "All",
    "React JS",
    "Next JS",
    "Figma Design",
    "Ecommerce",
    "Blog",
    "API",
    "Auth",
    "Sanity",
    "Full Stack",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <section className="bg-[#f9f9ff] py-15 md:py-20 lg:pt-30 lg:pb-20 px-5 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h1 className="font-bold xxs:font-semibold text-2xl xxxs:text-3xl xxs:text-4xl xs:text-5xl text-center">
            My Latest Featured Projects
          </h1>
          <p className="text-gray-500 text-12 xxxs:text-sm font-light leading-5 xxxs:leading-7 text-center">
            From Concept to Creation, We Build High-Performance Websites that
            Deliver Stunning Visuals, Blazing-Fast Load Times, and Superior
            Mobile Responsiveness.
          </p>
        </motion.div>

        <div className="filter py-10 sm:block hidden">
          <ul className="text-12 uppercase flex justify-center gap-6 md:gap-4 flex-wrap">
            {filterArray.map((filter, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`cursor-pointer px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedFilter === filter
                    ? "bg-gradient-to-r from-primary to-secondary  shadow-lg"
                    : "text-black hover:bg-gray-100"
                }`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="sm:hidden block my-10 relative">
          <p className="text-12 pb-3">Filter Projects</p>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full border py-2 px-4 bg-white text-textlightblack text-center font-light flex justify-between items-center text-14 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            {selectedFilter}{" "}
            <GoChevronDown
              className={`transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              } cursor-pointer`}
            />
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-20 w-full shadow-lg text-12 font-light text-center z-30 bg-white rounded-lg overflow-hidden"
              >
                {filterArray.map((filter, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ backgroundColor: "#f3f4f6" }}
                    onClick={() => {
                      setSelectedFilter(filter);
                      setIsOpen(false);
                    }}
                    className={`${
                      selectedFilter === filter
                        ? "bg-gradient-to-r from-primary to-secondary text-white"
                        : "text-textlightblack"
                    } w-full text-12 font-light py-3 text-center block cursor-pointer transition-colors duration-300`}
                  >
                    {filter}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter + currentPage}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {currentProjects.map((project, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110 shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300  h-63 flex items-end p-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white flex items-center gap-2 hover:text-primary transition-colors duration-300"
                      >
                        <span>View Project</span>
                        <BsBoxArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <div className="p-5 space-y-3">
                    <h2 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(project.icon) &&
                        project.icon.map((icon, idx) => (
                          <span
                            key={idx}
                            className="bg-gradient-to-r from-primary to-secondary p-1.5 rounded-md text-white transform hover:scale-110 transition-transform duration-300"
                          >
                            {icon}
                          </span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(project.technologies_used) &&
                        project.technologies_used.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center items-center gap-4 xxs:gap-8 px-2 xs:px-8 py-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`h-10 w-10 flex justify-center items-center cursor-pointer rounded-full transition-all duration-300 ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg"
            }`}
          >
            <IoChevronBack />
          </motion.button>

          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-8 h-8 cursor-pointer rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  currentPage === index + 1
                    ? "bg-gradient-to-r from-primary to-secondary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className={`h-10 w-10 flex justify-center items-center cursor-pointer py-2 rounded-full  transition-all duration-300 ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg"
            }`}
          >
            <IoChevronForward />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Project;
