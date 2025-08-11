import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../Assets/logo.jpeg"; // or your own image path

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="py-20 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 gap-x-44">
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              src={aboutImg}
              alt="About DiceMed"
              className="rounded-2xl shadow-lg"
              width={600}
              height={400}
              placeholder="blur"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              About DiceMed
            </h2>
            <hr className="w-72 border-blue-600 mb-6 mx-auto md:mx-0" />
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              DiceMed is at the forefront of AI-driven healthcare
              transformation. We specialize in advanced medical imaging
              solutions that empower healthcare professionals with actionable
              insights. Our cutting-edge technology supports multi-disease
              analysis, bridging the gap between diagnosis and patient care.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With DiceMed, our flagship product, we focus on tackling complex
              medical cases through AI-enhanced imaging and reporting. Our
              mission is to assist doctors in delivering accurate, timely, and
              effective diagnoses while ensuring seamless integration into their
              workflow.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
