import React from "react";
import { motion } from "framer-motion";
import { FaStarOfLife } from "react-icons/fa6";
import { GoNorthStar } from "react-icons/go";

const Footer = () => {
  return (
    <section className=" mx-auto flex flex-col gap-10 pb-6 ">
      <div className="flex flex-col items-center justify-center h-96">
        {/* Rotating Icons */}
        <motion.div
          className="relative flex items-center justify-center h-16 w-16 sm:hidden"
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
        <div className="text-center mt-6">
          <h1 className="text-4xl font-semibold">
            Let's work together.{" "}
            <p className="text-4xl font-semibold text-[#7f7f7f]">
              Get in touch.
            </p>
          </h1>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 font-semibold text-sm sm:flex items-center sm:justify-between px-10 sm:w-full">
        <div className="flex items-center justify-center">
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
          <p className="text-center">© Nimshi12 2025</p>
        </div>
        <ul className="flex gap-4">
          <li>Twitter</li>
          <li>Linkedin</li>
          <li>Mail</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
