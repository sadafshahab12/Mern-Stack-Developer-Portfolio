import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      className="bg-[#f9f9ff] pt-25 sm:pt-30 lg:pt-20"
      aria-label="Hero Section"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 xxs:px-8 min-h-[80vh] sm:min-h-[90vh] flex flex-col justify-center items-center"
      >
        <div className="space-y-6 text-center">
          <p className="uppercase text-lg tracking-widest text-primary">
            This is ME
          </p>
          <h1 className="uppercase font-bold text-5xl xxxs:text-6xl xxs:text-7xl sm:text-9xl">
            Sadaf Shahab
          </h1>
          <h2 className="text-lg xxs:text-xl xs:text-2xl font-semibold text-gray-700">
            MERN Stack Developer & UI/UX Designer
          </h2>
          <p className="text-gray-500 text-12 xxxs:text-sm font-light leading-5 xxxs:leading-7 ">
            A dedicated{" "}
            <strong className="font-bold text-primary">
              MERN Stack Developer
            </strong>
            with expertise in{" "}
            <strong className="font-bold text-primary">
              React.js, Node.js, Express.js, Mongodb, Next.js (TypeScript), and
              Tailwind CSS
            </strong>
            , passionate about building responsive, high-performance web
            applications.
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-sm xs:text-[16px] font-medium">
              {`Let's`} create something amazing together!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/mern stack developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
                className="button flex-center text-black gap-2 sm:text-sm text-12 hover:bg-gradient-to-b hover:from-textlightBlack hover:to-textlightBlack hover:text-white"
              >
                Download CV <MdOutlineFileDownload className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                aria-label="Contact Me"
                className="button sm:text-sm text-12 text-black hover:bg-gradient-to-b hover:from-textlightBlack hover:to-textlightBlack hover:text-white xs:block hidden"
              >
                Available for Hire
              </a>
            </div>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="https://github.com/sadafshahab12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-2xl hover:text-primary transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="http://www.linkedin.com/in/sadaf-shahab-ss01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-2xl hover:text-primary transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/sadafshahab12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="text-2xl hover:text-primary transition-colors"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
