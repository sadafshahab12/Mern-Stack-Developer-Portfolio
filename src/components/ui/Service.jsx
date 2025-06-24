import { motion } from "framer-motion";
import { services } from "./Data";
import { FaBook, FaLaptopCode, FaMobileAlt, FaPalette, FaRocket, FaSearch } from "react-icons/fa";

const Service = () => {
  return (
    <section 
      className="bg-[#f9f9ff] py-10 px-5 sm:px-10"
      aria-label="Services Section"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h1 className="font-bold xxs:font-semibold text-2xl xxxs:text-3xl xxs:text-4xl xs:text-5xl text-center">
            My Offered Services
          </h1>
          <p className="text-gray-500 text-[13px] xxxs:text-sm font-light leading-6 xxxs:leading-7 text-center max-w-3xl mx-auto">
            Professional Frontend Development & UI/UX Design – Fast, Responsive,
            and Scalable Web Solutions. Specializing in creating engaging digital experiences
            that drive results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-4 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-10 sm:w-16 h-10 sm:h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h2 className="font-bold text-lg sm:text-xl text-black group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-[12px] sm:text-sm leading-5 text-justify xs:leading-6">
                  {service.description}
                </p>
                <ul className="text-left w-full space-y-2 text-[12px] sm:text-sm text-gray-500">
                  {service.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Digital Book Creation Service */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: services.length * 0.1,
            }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center gap-4 sm:gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <FaBook className="w-8 h-8" />
              </div>
              <h2 className="font-bold text-xl text-black group-hover:text-primary transition-colors duration-300">
                Digital Book Creation
              </h2>
              <p className="text-gray-600 text-sm leading-6">
                Transform your content into engaging digital books and interactive e-learning materials.
                Create immersive reading experiences with modern web technologies.
              </p>
              <ul className="text-left w-full space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Interactive e-books with multimedia content
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Responsive design for all devices
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Custom animations and transitions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  SEO-optimized digital publications
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Service;
