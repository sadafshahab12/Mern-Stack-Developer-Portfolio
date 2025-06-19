import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-[#f9f9ff] pt-30 lg:pt-20" aria-label="Hero Section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 mdl:grid-cols-[60%_40%] items-center gap-5 lg:gap-5 px-6 xxs:px-8 mdl:px-10 h-full md:h-screen"
      >
        <div className="space-y-7 md:pb-0 pb-10">
          <p className="uppercase text-sm tracking-widest text-mypurple">
            This is ME
          </p>
          <h1 className="uppercase font-bold xxs:font-semibold text-3xl xxxs:text-4xl xxs:text-5xl xs:text-7xl">
            Sadaf Shahab
          </h1>
          <h2 className="text-xl xs:text-2xl font-semibold text-gray-700">
            MERN Stack Developer & UI/UX Designer
          </h2>
          <p className="text-gray-500 text-12 xxxs:text-sm font-light leading-5 xxxs:leading-7">
            A dedicated{" "}
            <strong className="font-bold text-mypurple">
              MERN Stack Developer
            </strong>
            r with expertise in{" "}
            <strong className="font-bold text-mypurple">
              React.js, Next.js (TypeScript), and Tailwind CSS
            </strong>
            , passionate about building responsive, high-performance web
            applications. 
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-sm xs:text-[16px] font-medium">
              {`Let's`} create something amazing together!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/mern stack developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
                className="button flex-center gap-2 sm:text-sm text-12 hover:bg-gradient-to-b hover:from-textlightBlack hover:to-textlightBlack"
              >
                Download CV <MdOutlineFileDownload className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                aria-label="Contact Me"
                className="button sm:text-sm text-12 hover:bg-gradient-to-b hover:from-textlightBlack hover:to-textlightBlack"
              >
                Hire me
              </a>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-2xl hover:text-mypurple transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-2xl hover:text-mypurple transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="text-2xl hover:text-mypurple transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <motion.div
          className="relative hidden sm:flex justify-center items-center group"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="/frame5.png"
            alt="Decorative frame for profile picture"
            className="h-auto w-full max-w-[200px] xxxs:max-w-[250px] xxs:max-w-sm transition-transform duration-300 group-hover:scale-105"
          />
          <img
            src="/heroframeimg.png"
            alt="Sadaf Shahab - MERN Stack Developer"
            className="absolute w-3/4 md:w-5/5 max-w-[300px] xs:max-w-[350px] object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
