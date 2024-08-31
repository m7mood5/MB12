"use client";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

// Array of services
const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "We can create Web applications using React and Next.js. Their work involves problem-solving, testing, debugging, and continually updating sites to improve performance and security.",
  },
  {
    num: "02",
    title: "Mobile Application Development",
    desc: "We can create Mobile applications using React Native. We engage in ongoing maintenance and updates to add new features, fix bugs, and enhance security.",
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "We can create and choose the best design for the idea of the application, whether web or mobile, using Figma.",
  },
  {
    num: "04",
    title: "Logo Design",
    desc: "We can create and choose the best logo and colors for the application.",
  },
];

const Services = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Change grid-cols-1 to sm:grid-cols-2 to ensure two services per row from small screens up */}
          {services.map((service) => (
            <motion.div
              key={service.num}
              className="p-6 text-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-accent-default"
              whileHover={{ scale: 1.05 }} // Scale up on hover
              initial={{ opacity: 0, y: 20 }} // Initial state for animation
              animate={{ opacity: 1, y: 0 }} // Final state for animation
              transition={{
                duration: 0.5,
                delay: parseFloat(service.num) * 0.1,
              }} // Animation timing
            >
              <h3 className="text-xl font-semibold text-accent-default mb-2">
                <span className="text-outline text-transparent text-2xl">{service.num}</span> - {service.title}
              </h3>
              <p className="text-white">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
