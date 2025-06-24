import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaRocket, FaPalette, FaSearch } from "react-icons/fa";

const ProjectStats = () => {
  const projectstats = useMemo(
    () => [
      { 
        value: "25+", 
        label: "Websites Developed",
        icon: <FaCode className="w-8 h-8 mb-2" />,
        description: "Modern, responsive websites built with React & Next.js"
      },
      { 
        value: "100%", 
        label: "Responsive Designs",
        icon: <FaMobileAlt className="w-8 h-8 mb-2" />,
        description: "Mobile-first approach for all devices"
      },
      { 
        value: "1.5s", 
        label: "Load Time",
        icon: <FaRocket className="w-8 h-8 mb-2" />,
        description: "Optimized for lightning-fast performance"
      },
      { 
        value: "5+", 
        label: "Figma Designs",
        icon: <FaPalette className="w-8 h-8 mb-2" />,
        description: "Beautiful UI/UX designs converted to code"
      },
      { 
        value: "95+", 
        label: "SEO Score",
        icon: <FaSearch className="w-8 h-8 mb-2" />,
        description: "Search engine optimized websites"
      },
    ],
    []
  );

  const [displayValues, setDisplayValues] = useState(projectstats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeouts = projectstats.map((project, index) => {
      const targetValue = project.value.includes("+")
        ? parseInt(project.value) || 0
        : project.value.includes("%")
        ? parseInt(project.value) || 0
        : project.value.includes("s")
        ? parseFloat(project.value) || 0
        : project.value;

      const incrementValue = () => {
        let currentValue = 0;
        const interval = setInterval(() => {
          if (currentValue < targetValue) {
            currentValue += targetValue > 10 ? Math.ceil(targetValue / 20) : 1;
            setDisplayValues((prevValues) => {
              const updatedValues = [...prevValues];
              updatedValues[index] = Math.min(currentValue, targetValue);
              return updatedValues;
            });
          } else {
            clearInterval(interval);
          }
        }, 50);
      };
      incrementValue();
    });

    return () => timeouts.forEach(clearInterval);
  }, [projectstats, isVisible]);

  return (
    <section 
      className="stats-section bg-gradient-to-r from-primary to-secondary min-h-70 py-16"
      aria-label="Project Statistics"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Project Statistics</h2>
          <p className="text-slate-800 max-w-2xl mx-auto">
            Delivering high-quality web solutions with a focus on performance, 
            responsiveness, and user experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {projectstats.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-slate-800 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-slate-800">
                  {project.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2">
                  {displayValues[index] === 0
                    ? "0"
                    : displayValues[index] +
                      (project.value.includes("+")
                        ? "+"
                        : project.value.includes("%")
                        ? "%"
                        : project.value.includes("s")
                        ? "s"
                        : "")}
                </h3>
                <p className="text-lg font-semibold mb-2">{project.label}</p>
                <p className="text-sm text-slate-800/80">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectStats;
