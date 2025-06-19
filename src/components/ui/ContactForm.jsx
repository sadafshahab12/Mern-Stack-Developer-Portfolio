import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  BsExclamationCircle,
  BsEnvelope,
  BsPerson,
  BsPhone,
  BsChat,
} from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setMessage({ text: "Message sent successfully!", type: "success" });
      reset();
      setTimeout(() => {
        setMessage({ text: "", type: "success" });
      }, 3000);
    } catch (error) {
      console.log(error);
      setMessage({ text: "Something went wrong. Try again!", type: "error" });
      setTimeout(() => {
        setMessage({ text: "", type: "error" });
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="bg-[#f9f9ff] py-10 md:py-15 lg:py-20 px-5 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-10">
          <h2 className="font-bold xxs:font-semibold text-xl xxxs:text-2xl xxs:text-3xl xs:text-4xl mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life. Fill out the form below and I'll get back
            to you as soon as possible.
          </p>
        </div>

        <AnimatePresence>
          {message.text && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                message.type === "success"
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-500"
              }`}
            >
              {message.type === "success" ? (
                <AiOutlineCheckCircle className="w-5 h-5" />
              ) : (
                <BsExclamationCircle className="w-5 h-5" />
              )}
              <p className="text-sm font-medium">{message.text}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <BsPerson className="text-mypurple" />
                Your Name
              </label>
              <motion.input
                whileFocus="focus"
                variants={inputVariants}
                type="text"
                placeholder="John Doe"
                {...register("name", { required: true })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-mypurple focus:ring-2 focus:ring-mypurple/20 outline-none transition-all duration-300"
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm text-red-500 flex items-center gap-2"
                >
                  <BsExclamationCircle className="w-4 h-4" />
                  Name is required
                </motion.p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <BsEnvelope className="text-mypurple" />
                Your Email
              </label>
              <motion.input
                whileFocus="focus"
                variants={inputVariants}
                type="email"
                placeholder="john@example.com"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-mypurple focus:ring-2 focus:ring-mypurple/20 outline-none transition-all duration-300"
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm text-red-500 flex items-center gap-2"
                >
                  <BsExclamationCircle className="w-4 h-4" />
                  Valid email is required
                </motion.p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <BsPhone className="text-mypurple" />
                Phone Number
              </label>
              <motion.input
                whileFocus="focus"
                variants={inputVariants}
                type="tel"
                placeholder="+1 (234) 567-8900"
                {...register("phone", {
                  required: true,
                  pattern: /^[0-9+\-() ]*$/i,
                })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-mypurple focus:ring-2 focus:ring-mypurple/20 outline-none transition-all duration-300"
              />
              {errors.phone && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm text-red-500 flex items-center gap-2"
                >
                  <BsExclamationCircle className="w-4 h-4" />
                  Invalid phone number format
                </motion.p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <BsChat className="text-mypurple" />
                Subject
              </label>
              <motion.input
                whileFocus="focus"
                variants={inputVariants}
                type="text"
                placeholder="Project Inquiry"
                {...register("subject", { required: true })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-mypurple focus:ring-2 focus:ring-mypurple/20 outline-none transition-all duration-300"
              />
              {errors.subject && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm text-red-500 flex items-center gap-2"
                >
                  <BsExclamationCircle className="w-4 h-4" />
                  Subject is required
                </motion.p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <BsChat className="text-mypurple" />
              Your Message
            </label>
            <motion.textarea
              whileFocus="focus"
              variants={inputVariants}
              placeholder="Tell me about your project..."
              {...register("message", { required: true })}
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-mypurple focus:ring-2 focus:ring-mypurple/20 outline-none transition-all duration-300 resize-none"
            />
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-sm text-red-500 flex items-center gap-2"
              >
                <BsExclamationCircle className="w-4 h-4" />
                Message cannot be empty
              </motion.p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-mypurple to-mysky hover:shadow-lg"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
