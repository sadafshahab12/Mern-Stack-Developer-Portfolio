import { FaYahoo } from "react-icons/fa";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoMailOutline,
  IoLocationOutline,
  IoCallOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      icon: <IoLogoLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/sadaf-shahab-ss01",
      label: "LinkedIn",
    },
    {
      icon: <IoLogoGithub className="w-5 h-5" />,
      href: "https://www.github.com/sadafshahab12",
      label: "GitHub",
    },
    {
      icon: <IoLogoFacebook className="w-5 h-5" />,
      href: "https://www.facebook.com/profile.php?id=61556555833599",
      label: "Facebook",
    },
    {
      icon: <IoLogoTwitter className="w-5 h-5" />,
      href: "https://www.x.com/sadafshahab12",
      label: "Twitter",
    },
    {
      icon: <IoLogoInstagram className="w-5 h-5" />,
      href: "https://www.instagram.com/sadafshahab12",
      label: "Instagram",
    },
    {
      icon: <IoLogoWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/+923402195735",
      label: "WhatsApp",
    },
  ];

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/pricing", label: "Pricing" },
    { to: "/contact", label: "Contact" },
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
      },
    },
  };

  return (
    <footer className="bg-gradient-to-r from-textlightBlack to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* About Section */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="logo"
                className="w-12 h-12 object-contain"
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-mypurple to-mysky bg-clip-text text-transparent">
                Sadaf Shahab
              </h1>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A passionate{" "}
              <span className="text-mypurple font-semibold">
                Front-End Developer
              </span>{" "}
              specializing in{" "}
              <span className="text-mypurple font-semibold">
                React.js, Next.js
              </span>
              , and{" "}
              <span className="text-mypurple font-semibold">Tailwind CSS</span>.
              Crafting sleek, high-performance web applications with clean,
              scalable code.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-mypurple transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h2 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-mypurple transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-mypurple rounded-full"></span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h2 className="text-xl font-semibold text-white mb-4">
              Contact Info
            </h2>
            <div className="space-y-3">
              <a
                href="mailto:sadafshahabsr12@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-mypurple transition-colors duration-300"
              >
                <IoMailOutline className="w-5 h-5 text-mypurple" />
                <span className="text-sm">sadafshahabsr12@gmail.com</span>
              </a>
              <a
                href="mailto:sadafshahab123@yahoo.com"
                className="flex items-center gap-3 text-gray-300 hover:text-mypurple transition-colors duration-300"
              >
                <FaYahoo className="w-5 h-5 text-mypurple" />
                <span className="text-sm">sadafshahab123@yahoo.com</span>
              </a>
              <a
                href="tel:+923402195735"
                className="flex items-center gap-3 text-gray-300 hover:text-mypurple transition-colors duration-300"
              >
                <IoCallOutline className="w-5 h-5 text-mypurple" />
                <span className="text-sm">+92 340 2195735</span>
              </a>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h2 className="text-xl font-semibold text-white mb-4">
              Newsletter
            </h2>
            <p className="text-gray-300 text-sm">
              Subscribe to my newsletter for the latest updates and insights.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-mypurple text-sm"
                />
                <motion.button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-mypurple to-mysky px-4 py-1 rounded-md text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm"
          variants={itemVariants}
        >
          <p>© {new Date().getFullYear()} Sadaf Shahab. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
