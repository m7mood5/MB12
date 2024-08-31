"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const works = [
    {
        num: "01",
        title: "Project A",
        desc: "This is Project show a css Skills and MUI with responsive with all screens .",
        imageUrl: "/ayt.png",
    },
    {
        num: "02",
        title: "Project B",
        desc: " It focuses on the user experience and design elements that make it unique and animations .",
        imageUrl: "/layal.png",
    },
    {
        num: "03",
        title: "Project C",
        desc: "It foucuses React components JavaScript and Redux .",
        imageUrl: "/easyshop.png",
    },
    {
        num: "04",
        title: "Project C",
        desc: "lms app using React, Ts, Redux-toolkit and have many services.",
        imageUrl: "/lms.png",
    },
    {
        num: "05",
        title: "Project C",
        // desc: "It foucuses React components JavaScript and Redux .",
        imageUrl: "/esprina.png",
    },    {
        num: "06",
        title: "Project C",
        desc: "Mobile app LMS using ReacT,Redux-toolkit , expo and Firebase .",
        imageUrl: "/studenthouse.png",
    },
    // {
    //     num: "06",
    //     title: "Project C",
    //     desc: "Mobile app LMS using ReacT,Redux-toolkit , expo and Firebase . UI by Figma.",
    //     imageUrl: "/easyshop.png",
    // },

    // {
    //     num: "08",
    //     title: "Project C",
    //     desc: "It foucuses React components JavaScript and Redux .",
    //     imageUrl: "/easyshop.png",
    // },
];

const Work = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"> {/* Adjusted gap */}
                    {works.map((work, index) => (
                        <a key={work.num} href="https://github.com/m7mood5" target="_blank">
                            <motion.div
                                className="p-6 text-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-accent-default flex flex-col items-center"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                            >
                                <div className="overflow-hidden rounded-lg shadow-lg mb-4 w-full">
                                    <Image
                                        src={work.imageUrl}
                                        alt={work.title}
                                        width={350}
                                        height={250}
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-accent-default mb-2">
                                    {work.num}
                                </h3>
                                <p className="text-gray-600">{work.desc}</p>
                            </motion.div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
