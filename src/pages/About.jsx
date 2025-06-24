import { useEffect } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/ui/PageHeader";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  useEffect(() => {
    document.title = "About | Sadaf Shahab Portfolio";
  }, []);

  const skills = [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
  ];

  const experience = [
    {
      year: "2024",
      title: "Frontend Developer",
      company: "Freelance",
      description: "Building modern web applications using React.js and Next.js",
    },
    {
      year: "2023",
      title: "UI/UX Designer",
      company: "Freelance",
      description: "Creating beautiful and responsive designs using Figma",
    },
  ];

  return (
    <div className="pt-4 pb-20 bg-[#f9f9ff]">
      <PageHeader home={"Home"} page={"About Me"} link={"/about"} />
      <section className="bg-[#f9f9ff] py-10 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto  px-6 xxs:px-8 mdl:px-10 "
        >
          <div className="space-y-7 md:pb-0 pb-10 order-1 mdl:order-2">
            <p className="uppercase text-sm tracking-widest">About Me</p>
            <h1 className="uppercase font-bold xxs:font-semibold text-2xl xxxs:text-3xl xxs:text-4xl xs:text-5xl">
              Personal Details
            </h1>
            <p className="text-gray-500 text-[13px] xxxs:text-sm font-light leading-6 xxxs:leading-7 text-justify">
              Hi, {`I'm`} Sadaf Shahab, a{" "}
              <strong className="font-bold text-primary">
                MERN Stack Developer
              </strong>{" "}
              specializing in{" "}
              <strong className="font-bold text-primary">
                {" "}
                React.js, Next.js, and Tailwind CSS{" "}
              </strong>
              . I craft high-performance,
              <strong className="font-bold text-primary uppercase">
                {" "}
                responsive
              </strong>{" "}
              web applications with seamless UI/UX. Passionate about clean code
              and modern web technologies, {`I'm`} constantly innovating to
              build scalable, user-friendly digital experiences. Currently
              exploring AI-driven web development, I aim to integrate artificial
              intelligence into interactive applications. With a keen eye for
              detail and a growth mindset, I thrive on solving complex
              challenges and pushing the boundaries of front-end development.
            </p>
            <div className="flex gap-4 items-center">
              <a
                href="/mern stack developer.pdf"
                download
                className="button flex items-center gap-2 hover:bg-gradient-to-b hover:from-textlightBlack hover:to-textlightBlack"
              >
                <MdOutlineFileDownload className="w-5 h-5" />
                <p >Download CV</p>
              </a>
              <div className="flex gap-4">
                <a
                  href="https://github.com/sadafshahab12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-primary transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/sadaf-shahab-ss01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-primary transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/sadafshahab12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-primary transition-colors"
                >
               <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
   
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-20 px-6 xxs:px-8 mdl:px-10"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-20 px-6 xxs:px-8 mdl:px-10"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-primary"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary" />
                <div className="space-y-2">
                  <span className="text-primary font-medium">{exp.year}</span>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-gray-500">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
