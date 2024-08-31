"use client";

import { motion } from "framer-motion";
import {
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";



// About object with personal information and skills
const about = {
    title: "About Me",
    description:
        "I am a software engineer with a passion for creating user-friendly, efficient, and accessible digital products. My background includes working on various projects, including web development, mobile app development, and digital marketing.",
    skills: [
        { icon: <TbBrandReactNative size={32} />, title: "ReactNative" },
        { icon: <SiTypescript size={32} />, title: "Typescript" },
        { icon: <FaReact size={32} />, title: "React" },
        { icon: <FaFigma size={32} />, title: "Figma" },
        { icon: <FaNodeJs size={32} />, title: "Node.js" },
        { icon: <SiTailwindcss size={32} />, title: "Tailwind CSS" },
        { icon: <SiNextdotjs size={32} />, title: "Next.js" },
        { icon: <IoLogoGithub size={32} />, title: "Git" }
    ],
    info: [
        { title: "Name", content: "Mahmoud Barakat" },
        { title: "Age", content: "23" },
        { title: "Location", content: "Tanta, Egypt" },
        { title: "Email", content: "mahmoudbarakat363@gmail.com" },
        { title: "Phone", content: "+201208280741" }
    ],
    education: [
        {
            title: "BSc. Computer Science",
            institution: "Tanta University",
            year: "2024",
            description: "Concentrated in Computer Science and Software Engineering."
        }
    ],
    experience: [
        {
            title: "Front-end Developer",
            company: "The Forth Pyramid",
            year: "2020 - 2023",
            description:
                "Responsible for developing and maintaining various web and mobile applications."
        },
        {
            title: "Front-end Developer",
            company: "Code",
            year: "2023 - 2024",
            description:
                "Worked on various projects, including web development, mobile app development, and UI/UX."
        }
    ]
};

// Resume component
function Resume() {
    return (
        <section className="container mx-auto py-12 px-4">
            {/* About Me Section */}
            {/* <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl font-bold mb-4 text-center">{about.title}</h2>
                <p className="text-lg text-center mb-6 text-gray-700">
                    {about.description}
                </p>
            </motion.div> */}

            {/* Information Section */}
            <motion.div
                className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h3 className="text-outline text-transparent text-3xl mb-4 text-center">Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {about.info.map((info, index) => (
                        <div
                            key={index}
                            className="p-4 border-2 border-white  shadow-lg rounded-lg"
                        >
                            <p className="text-lg  text-outline bg-transparent">
                                {info.title}:
                            </p>
                            <p className="text-accent-hover">{info.content}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
            {/* Skills Section */}
            <motion.div
                className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h3 className="text-outline text-transparent text-3xl mb-4 text-center">Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {about.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center p-4 border-2 border-accent-default shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
                            whileHover={{ scale: 1.1 }}
                        >
                            {skill.icon}
                            <p className="text-xl font-semibold mt-2">{skill.title}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>



            {/* Education Section */}
            <motion.div
                className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <h3 className="text-3xl text-outline text-transparent  mb-4 text-center">Education</h3>
                {about.education.map((edu, index) => (
                    <div
                        key={index}
                        className="p-6 border-2 border-accent-default shadow-lg rounded-lg mb-4"
                    >
                        <h4 className="text-2xl font-semibold">{edu.title}</h4>
                        <p className="text-gray-300">{edu.institution}</p>
                        <p className="text-gray-300">{edu.year}</p>
                        <p className="text-gray-300 mt-2">{edu.description}</p>
                    </div>
                ))}
            </motion.div>

            {/* Experience Section */}
            <motion.div
                className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <h3 className="text-3xl text-outline text-transparent  mb-4 text-center">Experience</h3>
                {about.experience.map((exp, index) => (
                    <div
                        key={index}
                        className="p-6 shadow-lg rounded-lg mb-4 border-2 border-accent-default"
                    >
                        <h4 className="text-2xl font-semibold">{exp.title}</h4>
                        <p className="text-gray-300">{exp.company}</p>
                        <p className="text-gray-300">{exp.year}</p>
                        <p className="text-gray-300 mt-2">{exp.description}</p>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}

export default Resume;
