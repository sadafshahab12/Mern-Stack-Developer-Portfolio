import { FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoShieldOutline } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiClerk,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiSanity,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaObjectGroup,
  FaPalette,
  FaTabletAlt,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
export const projectData = [
  {
    title: "Product Catalog (Full Stack)",
    technologies_used: [
      "React Js",
      "Tailwind Css",
      "Node js",
      "express js",
      "Full Stack",
    ],
    icon: [
      <FaReact key={"ReactJS"} className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
      <FaNodeJs key={"nodejs"} className="w-4 h-4" />,
      <SiExpress key={"expressjs"} className="w-4 h-4" />,
    ],
    image: "project/product catalog.png",
    link: "https://product-catalog-mern-frontend.vercel.app/",
  },
  {
    title: "Food APP (Full Stack)",
    technologies_used: [
      "React Js",
      "Tailwind Css",
      "Node js",
      "Mongodb",
      "express js",
      "Full Stack",
    ],
    icon: [
      <FaReact key={"ReactJS"} className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
      <FaNodeJs key={"nodejs"} className="w-4 h-4" />,
      <DiMongodb key={"mongodb"} className="w-4 h-4" />,
      <SiExpress key={"expressjs"} className="w-4 h-4" />,
    ],
    image: "/project/food app.png",
    link: "https://food-app-mern-stack-project-fronten.vercel.app/",
  },
  {
    title: "Furniro Ecommerce Website",
    technologies_used: [
      "Next JS",
      "Ecommerce",
      "Sanity",
      "Auth",
      "Figma Design",
    ],
    icon: [
      <TbBrandNextjs key={"NextJs"} className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
      <SiClerk key={"clerk"} className="w-4 h-4" />,
      <SiSanity key={"sanity"} className="w-4 h-4" />,
      <SiFigma key={"figma"} className="w-4 h-4" />,
    ],
    image: "/project/figma Furniro Ecommerce website.png",
    link: "https://uiux-hackathon-2-nextjs-design-jam-2024.vercel.app/",
  },
  {
    title: "Rise Up",
    icon: [
      <TbBrandNextjs key={"NextJs"} className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
      <SiFigma key={"figma"} className="w-4 h-4" />,
    ],
    image: "/project/rise up.png",
    link: "https://rise-up-website-next-js-assignment-7.vercel.app/",
    technologies_used: ["Next JS", "Figma Design"],
  },
  {
    title: "Shoe Ecommerce Store",
    technologies_used: ["Next JS", "API", "Ecommerce"],
    icon: [
      <TbBrandNextjs key={"NextJs"} className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
    ],
    image: "/project/shoes website.png",
    link: "https://miles-stone-3-simple-ecommerce-store.vercel.app",
  },
  {
    title: "Nex Gen Academy",
    icon: [
      <TbBrandNextjs key={"NextJs"} className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
      <SiFigma key={"figma"} className="w-4 h-4" />,
    ],
    image: "/project/next gen academy.png",
    link: "https://nex-gen-academy.vercel.app/",
    technologies_used: ["Next JS", "Figma Design"],
  },
  {
    title: "Curiosity Unfold",
    icon: [
      <TbBrandNextjs key={"NextJs"} className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
      <SiClerk key={"clerk"} className="w-4 h-4" />,
      <SiSanity key={"sanity"} className="w-4 h-4" />,
    ],
    image: "/project/curiosity blog.png",
    link: "https://curiosity-unfold-blog-website.vercel.app/",
    technologies_used: ["Next JS", "Sanity", "Auth", "Blog"],
  },
  {
    title: "Shoose Ecommerce Website",
    icon: [
      <FaReact key="react" className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
    ],
    image: "/project/Shoes Ecommerce Website.png",
    technologies_used: ["React JS", "Ecommerce"],
    link: "https://internship-pakistan-task-5-shoose-website.vercel.app/",
  },

  {
    title: "NewsHive Website",
    icon: [
      <FaReact key="react" className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
      <SiFirebase key="firebase" className="w-4 h-4" />,
    ],
    image: "/project/NewsHive Website.png",
    technologies_used: ["React JS", "API", "Auth"],
    link: "https://internship-pakistan-third-task-news-website-news-hive.vercel.app/",
  },

  {
    title: "Cat Fact",
    icon: [
      <FaReact key="react" className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
    ],
    image: "/project/catfact.jpeg",
    link: "https://cat-fact-api-fetch.vercel.app/",
    technologies_used: ["React JS", "API"],
  },
  {
    title: "Wanderlust Adventure",
    icon: [
      <FaReact key="react" className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
    ],
    image: "/project/Wanderlust Adventure.png",
    link: "https://internship-task2-wanderlust-adventures.vercel.app/",
    technologies_used: ["React JS"],
  },
  {
    title: "Post Hive Blog",
    icon: [
      <TbBrandNextjs key={"NextJs"} className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
      <SiClerk key={"clerk"} className="w-4 h-4" />,
    ],
    image: "/project/Blog website.png",
    link: "https://blog-platform-kappa-one.vercel.app/",
    technologies_used: ["Next JS", "Auth", "Blog"],
  },
  {
    title: "Portfolio",
    icon: [
      <TbBrandNextjs key={"NextJs"} className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
      <SiFigma key={"figma"} className="w-4 h-4" />,
    ],
    image: "/project/potfolio design in figma.png",
    link: "https://next-js-assignment-6-portfolio.vercel.app/",
    technologies_used: ["Next JS", "Figma Design"],
  },
  {
    title: "Post Sphere",
    icon: [
      <TbBrandNextjs key={"NextJs"} className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
      <IoShieldOutline key={"shield"} className="w-4 h-4" />,
    ],
    image: "/project/post sphere.png",
    link: "https://next-js-assignment-post-api-post-sphere.vercel.app/",
    technologies_used: ["Next JS", "API", "Auth"],
  },

  {
    title: "Portfolio",
    icon: [
      <TbBrandNextjs key={"NextJs"} className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
    ],
    image: "/project/portfolio1.png",
    link: "https://next-js-assignment-5-portfolio.vercel.app/",
    technologies_used: ["Next JS"],
  },

  {
    title: "Internship Pakistan",
    icon: [
      <FaReact key="react" className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
    ],
    image: "/project/internship pakistan.png",
    link: "https://internship-pakistan-task-1-front-end-website.vercel.app/",
    technologies_used: ["React JS"],
  },
  {
    title: "Code & Connect",
    icon: [
      <FaHtml5 key={"html5"} className="w-4 h-4" />,
      <IoLogoCss3 key={"css"} className="w-4 h-4" />,
      <FaJs key={"js"} lassName="w-4 h-4" />,
      <SiFirebase key="firebase" className="w-4 h-4" />,
    ],
    image: "/project/sign in signup.png",
    link: "https://fire-base-sign-up-singin.vercel.app/",
    technologies_used: ["firebase", "Auth"],
  },
  {
    title: "Creativee",
    icon: [
      <FaHtml5 key={"html5"} className="w-4 h-4" />,
      <IoLogoCss3 key={"css"} className="w-4 h-4" />,
      <FaJs key={"js"} className="w-4 h-4" />,
      <SiFigma key={"figma"} className="w-4 h-4" />,
    ],
    image: "/project/creativee.png",
    link: "https://sadafshahab12.github.io/Creativee-Freelance-hub-task-2/",
    technologies_used: ["Figma Design"],
  },
  {
    title: "Unique Bike",
    icon: [
      <FaHtml5 key={"html5"} className="w-4 h-4" />,
      <IoLogoCss3 key={"css"} className="w-4 h-4" />,
      <FaJs key={"js"} className="w-4 h-4" />,
      <SiFigma key={"figma"} className="w-4 h-4" />,
    ],
    image: "/project/unique bike.png",
    link: "https://unique-bike-czot.vercel.app/",
    technologies_used: ["Figma Design"],
  },
  {
    title: "Nike Shoe",
    icon: [
      <FaHtml5 key={"html5"} className="w-4 h-4" />,
      <IoLogoCss3 key={"css"} className="w-4 h-4" />,
      <FaJs key={"js"} className="w-4 h-4" />,
      <SiFigma key={"figma"} className="w-4 h-4" />,
    ],
    image: "/project/nike shoe.png",
    link: "https://sadafshahab12.github.io/Nike-Shoe-Responsive-Landing-Page/",
    technologies_used: ["Figma Design"],
  },
  {
    title: "Random Joke Generator",
    icon: [
      <FaHtml5 key={"html5"} className="w-4 h-4" />,
      <IoLogoCss3 key={"css"} className="w-4 h-4" />,
      <FaJs key={"js"} className="w-4 h-4" />,
    ],
    image: "/project/randomnumber.png",
    link: "https://random-joke-generator-wine.vercel.app/",
    technologies_used: ["API"],
  },
  {
    title: "Github User Finder",
    icon: [
      <FaHtml5 key={"html5"} className="w-4 h-4" />,
      <IoLogoCss3 key={"css"} className="w-4 h-4" />,
      <FaJs key={"js"} className="w-4 h-4" />,
    ],
    image: "/project/github user finder.png",
    link: "https://git-hub-user-dev-finder-8db1.vercel.app/",
    technologies_used: ["API"],
  },
  {
    title: "Student Fee Management",
    icon: [
      <FaHtml5 key={"html5"} className="w-4 h-4" />,
      <IoLogoCss3 key={"css"} className="w-4 h-4" />,
      <FaJs key={"js"} className="w-4 h-4" />,
    ],
    image: "/project/student fee management.png",
    link: "https://smit-presentation-student-fee-management.vercel.app/",
    technologies_used: ["html", "css", "javascript"],
  },
  {
    title: "Portfolio",
    icon: [
      <TbBrandNextjs key={"NextJs"} className="w-4 h-4" />,
      <IoLogoCss3 key={"css"} className="w-4 h-4" />,
    ],
    image: "/project/porfolio with next js and custom css.png",
    link: "https://portfolio-with-next-js-and-custom-css-nu.vercel.app/",
    technologies_used: ["Next JS"],
  },
  {
    title: "Code & Connect Website",
    icon: [
      <TbBrandNextjs key={"NextJs"} className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
      <SiFigma key={"figma"} className="w-4 h-4" />,
    ],
    image: "/project/Code and Connect website.png",
    link: "https://portfolio-with-next-js-and-custom-css-nu.vercel.app/",
    technologies_used: ["Next JS", "Figma Design"],
  },
  {
    title: "Code & Connect Auth",
    icon: [
      <TbBrandNextjs key={"NextJs"} className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
      <FaGithub key={"github"} className="w-4 h-4" />,
    ],
    image: "/project/code & connect.png",
    link: "https://code-connect-login-sign-out-page-with-next-js.vercel.app/",
    technologies_used: ["Next JS", "Auth"],
  },
  {
    title: "Book Hub",
    icon: [
      <TbBrandNextjs key={"NextJs"} className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
    ],
    image: "/project/book hub.png",
    link: "https://monday-2-5-assignment-submission-november-11-class-10.vercel.app/",
    technologies_used: ["Next JS", "API"],
  },
  {
    title: "Taste Bite",
    icon: [
      <TbBrandNextjs key={"NextJs"} className="w-4 h-4" />,
      <RiTailwindCssFill key="tailwind" className="w-4 h-4" />,
    ],
    image: "/project/taste bite.png",
    link: "https://milestone-2-assignments-next-js-with-tailwind-css.vercel.app/",
    technologies_used: ["Next JS"],
  },
  {
    title: "Resume Builder",
    icon: [
      <FaHtml5 key={"html5"} className="w-4 h-4" />,
      <IoLogoCss3 key={"css"} className="w-4 h-4" />,
      <FaJs key={"js"} className="w-4 h-4" />,
    ],
    image: "/project/resume builder.png",
    link: "https://milestone-5-unique-path-and-shareable-link-pi.vercel.app/",
    technologies_used: ["html", "css", "javascript"],
  },
];
export const services = [
  {
    title: "Frontend Web Development",
    description:
      "Build high-performance, scalable, and feature-rich websites using the latest technologies like Next.js, React.js, and Tailwind CSS.",
    icon: <FaLaptopCode className="w-6 sm:w-8 h-6 sm:h-8" />,
    features: [
      "Modern React.js & Next.js development",
      "Responsive and mobile-first design",
      "Performance optimization",
      "Clean and maintainable code",
      "Cross-browser compatibility",
    ],
  },
  {
    title: "Single Page Application (SPA) Development",
    description:
      "Build fast, interactive, and scalable single-page applications using React.js and Next.js. Ensure smooth navigation and real-time updates for an optimal user experience.",
    icon: <FaReact key="react" className="w-6 sm:w-8 h-6 sm:h-8" />,
    features: [
      "Dynamic content loading",
      "State management solutions",
      "API integration",
      "Real-time updates",
      "Optimized performance",
    ],
  },
  {
    title: "Responsive Design",
    description:
      "Ensure seamless browsing on all screen sizes with fully responsive and mobile-friendly website layouts. Design visually appealing and user-friendly websites that enhance brand identity and user experience.",
    icon: <FaMobileAlt className="w-6 sm:w-8 h-6 sm:h-8" />,
    features: [
      "Mobile-first approach",
      "Flexible grid systems",
      "Adaptive layouts",
      "Touch-friendly interfaces",
      "Cross-device testing",
    ],
  },
  {
    title: "Figma to Website Conversion",
    description:
      "Transform Figma designs into pixel-perfect, fully functional websites with optimized performance.",
    icon: <FaObjectGroup className="w-6 sm:w-8 h-6 sm:h-8" />,
    features: [
      "Pixel-perfect implementation",
      "Component-based architecture",
      "Design system integration",
      "Interactive prototypes",
      "Design-to-code workflow",
    ],
  },
  {
    title: "Mobile Responsive Website",
    description:
      "Develop mobile-first, touch-friendly, and high-speed websites for the best user experience on smartphones and tablets.",
    icon: <FaTabletAlt className="w-6 sm:w-8 h-6 sm:h-8" />,
    features: [
      "Touch-optimized interfaces",
      "Fast loading times",
      "Mobile SEO optimization",
      "Progressive enhancement",
      "Cross-platform compatibility",
    ],
  },
  {
    title: "Figma UI/UX Designing",
    description:
      "Design intuitive, engaging, and user-centric UI/UX prototypes in Figma for websites and mobile apps.",
    icon: <FaPalette className="w-6 sm:w-8 h-6 sm:h-8" />,
    features: [
      "User-centered design",
      "Interactive prototypes",
      "Design systems",
      "User flow mapping",
      "Usability testing",
    ],
  },
];
export const pricingPlans = [
  {
    id: 1,
    name: "Basic Plan",
    price: 70,
    description: "For Small Businesses & Personal Websites",
    features: {
      required: [
        "One-Page Website (Landing Page)",
        "HTML, CSS, JavaScript (or React.js if needed)",
        "Fully Responsive Design",
        "Tailwind CSS for Fast Styling",
        "Delivery in 8-10 Days",
      ],
      extra: [
        "Basic Animations & Effects",
        "Contact Form Integration",
        "2 Rounds of Revisions",
      ],
    },
    bestFor: ["Personal portfolios", "Freelancers", "Small businesses"],
  },
  {
    id: 2,
    name: "Standard Plan",
    price: 120,
    description: "For Growing Businesses & Startups",
    features: {
      required: [
        "Up to 5 Pages (Home, About, Services, Contact, etc.)",
        "Built with React.js or Next.js for Better Performance",
        "Tailwind CSS + Custom Styling",
        "Delivery in 10-14 Days",
      ],
      extra: [
        "API Integration (e.g.; Third-Party APIs)",
        "SEO Optimization for Better Google Ranking",
        "Mobile & Tablet Friendly",
        "3 Rounds of Revisions",
      ],
    },
    bestFor: ["Small businesses", "Agencies", "Startups"],
  },
  {
    id: 3,
    name: "Premium Plan",
    price: 200,
    description: "For Advanced & Scalable Websites",
    features: {
      required: [
        "Custom Design & Development (Next.js + React.js)",
        "Dynamic Content & CMS Integration (Sanity or Firebase)",
        "Delivery in 14-21 Days",
      ],
      extra: [
        "E-commerce or Blog Functionality (Optional)",
        "Performance Optimization & SEO-Friendly",
        "Authentication & Secure User Login (Optional)",
        "Tailored UX/UI Experience",
        "5 Rounds of Revisions",
      ],
    },
    bestFor: ["Large businesses", "Startups", "Custom web apps"],
  },
];
