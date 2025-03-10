import React from "react";
import { motion } from "framer-motion";
import { FaStarOfLife } from "react-icons/fa6";
import { GoNorthStar } from "react-icons/go";

const Footer = () => {
  return (
    <section className="h-[300px] mx-auto flex flex-col items-center justify-center">
      {/* Rotating Icons */}
      <motion.div
        className="relative flex items-center justify-center h-16 w-16"
        animate={{ rotate: [0, 180, 360] }} // Smooth rotation
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        {/* First Icon (Fades Out) */}
        <motion.div
          className="absolute text-3xl text-gray-700"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        >
          <FaStarOfLife />
        </motion.div>

        {/* Second Icon (Fades In) */}
        <motion.div
          className="absolute text-3xl text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        >
          <GoNorthStar />
        </motion.div>
      </motion.div>

      {/* Text Section */}
      <div className="text-center w-[300px] mt-6">
        <h1 className="text-3xl font-semibold">
          Let's work together.{" "}
          <p className="text-3xl font-semibold text-[#7f7f7f]">Get in touch.</p>
        </h1>
      </div>

      {/* Copyright */}
      <div className="mt-4">
        <p>© Nimshi12 2025</p>
      </div>
    </section>
  );
};

export default Footer;
