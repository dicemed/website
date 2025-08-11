import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../Assets/cover image.jpeg";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openMailClient = ({ to, subject, body }) => {
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleScheduleDemo = () => {
    openMailClient({
      to: "drajo_george@DiceMed.in",
      subject: "Request to Schedule a Demo with DiceMed",
      body: `Dear Dr. Ajo Babu George,
    
      I am interested in scheduling a demo for DiceMed's solutions. Please let me know a convenient time.
    
      Thank you,
      [Your Name]`,
    });
  };

  const handleLearnMore = () => {
    scrollToSection("about"); // or navigate to a scheduling form
  };
  return (
    <div>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen w-full overflow-hidden text-center px-4 pt-24 pb-10"
      >
        {/* Background Image */}
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10 brightness-[0.4]"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white max-w-4xl px-6 py-8 rounded-3xl " //bg-black/30 backdrop-blur-md shadow-2xl
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              DiceMed
            </motion.h1>

            <motion.hr
              className="border-white md:w-96 w-60 mx-auto mb-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ transformOrigin: "left" }}
            />

            <motion.p
              className="text-lg md:text-xl font-medium leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Revolutionizing Healthcare with AI-Powered <br />
              Medical Imaging Solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-x-12 gap-y-2 pt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <button
                onClick={handleScheduleDemo}
                className="w-60 md:w-64 bg-white text-blue-700 px-8 py-2 rounded-xl text-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300 shadow-lg"
              >
                Schedule a Demo
              </button>
              <button
                onClick={handleLearnMore}
                className="w-60 md:w-64 border border-white text-white px-8 py-2 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-700 transition duration-300 shadow-lg"
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
