import PageHeader from "./PageHeader";
import { motion } from "framer-motion";
import { FaAward, FaCertificate } from "react-icons/fa";

const Certificate = () => {
  const certificates = [
    {
      image: "/internship certificate.jpg",
      title: "Internship Certificate",
      description: "Completed internship at Pakistan Software Export Board",
      date: "2025",
      type: "Internship",
    },
    {
      image: "/certificate procom25_page-0001.jpg",
      title: "Procom Participation",
      description: "Participated in Procom 25 Programming Competition",
      date: "2025",
      type: "Competition",
    },
    {
      image: "/femhack certificate_page-0001.jpg",
      title: "FemHack Hackathon Certificate",
      description:
        "Participated in 6 hours of Hackathon at Saylani Mass IT Training Program. ",
      date: "2025",
      type: "Competition",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  };

  return (
    <section className="min-h-screen bg-gray-50">
      <PageHeader home={"Home"} page={"Certificates"} link={"/certificate"} />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Certifications
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of my professional certifications and achievements that
            showcase my expertise and dedication to continuous learning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-sm text-gray-200">{cert.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FaCertificate className="text-primary w-5 h-5" />
                    <span className="text-sm font-medium text-gray-600">
                      {cert.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaAward className="text-secondary w-5 h-5" />
                    <span className="text-sm font-medium text-gray-600">
                      {cert.date}
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 px-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg transition-shadow duration-300"
                  onClick={() => window.open(cert.image, "_blank")}
                >
                  View Certificate
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            These certificates represent my commitment to professional
            development and continuous learning in the field of software
            development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificate;
