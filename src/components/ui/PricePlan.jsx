import { motion } from "framer-motion";
import { pricingPlans } from "./Data";
import { FaCheck } from "react-icons/fa";

const PricePlan = () => {
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
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-10 px-5 sm:px-10 bg-[#f9f9ff]">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h1 className="font-bold xxs:font-semibold text-2xl xxxs:text-3xl xxs:text-4xl xs:text-5xl text-center">
            Choose Your Plan
          </h1>
          <p className="text-gray-500 text-[13px] xxxs:text-sm font-light leading-6 xxxs:leading-7 text-center">
            Fast, Responsive, and SEO-Optimized Websites. Custom Front-End Web
            Development with Next.js & React – Tailored for Businesses of All
            Sizes.
          </p>
          <motion.p
            className="tag gradient_text text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Choose a Plan That Fits Your Needs!
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mypurple to-mysky rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <h1 className="sm:text-2xl font-semibold text-xl text-center text-gray-800 group-hover:text-mypurple transition-colors duration-300">
                    {plan.name}
                  </h1>
                  <p className="text-12 font-light text-gray-600 text-center">
                    {plan.description}
                  </p>
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-mypurple to-mysky rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <h2 className="relative text-2xl sm:text-3xl font-bold h-22 xs:h-28 w-22 xs:w-28 border-2 border-gray-200 bg-white text-mypurple flex items-center justify-center rounded-full shadow-md group-hover:border-transparent transition-all duration-300">
                        ${plan.price}
                      </h2>
                    </div>
                  </div>
                  <div className="hidden xs:flex flex-wrap justify-center gap-2">
                    {plan.bestFor.map((best, i) => (
                      <span
                        key={i}
                        className="text-10 bg-gray-100 px-3 py-1.5 text-mypurple rounded-full shadow-sm group-hover:bg-mypurple/10 transition-colors duration-300"
                      >
                        {best}
                      </span>
                    ))}
                  </div>

                  {/* Required Features */}
                  <div className="py-4 space-y-3">
                    <h3 className="text-mypurple font-semibold">
                      Required Features:
                    </h3>
                    {plan.features.required.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-12 text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                      >
                        <FaCheck className="text-mypurple flex-shrink-0" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>

                  {/* Extra Features */}
                  <div className="py-4 space-y-3">
                    <h3 className="text-mypurple font-semibold">
                      Extra Features:
                    </h3>
                    {plan.features.extra.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-12 text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                      >
                        <FaCheck className="text-mypurple flex-shrink-0" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-6 bg-gradient-to-r from-mypurple to-mysky text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Buy Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricePlan;
