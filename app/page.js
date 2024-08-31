/* eslint-disable react/no-unescaped-entities */
"use client"

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="">Front-end developer Web , Mobile </span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent-default">Mahmoud BarakaT</span>
            </h1>
            <p className="max-w-[520px] mb-9 text-white/85">
              Front-end developer with <span className="text-accent-default">3</span> years of experience in designing and developing responsive and interactive web and mobile applications. Strong understanding of UI/UX principles and a keen eye for design, aiming to create seamless user experiences.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a download href="/cv.pdf">
                <Button className="uppercase flex items-center gap-2" variant="outline" size="lg">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              {/* Social Media Links */}
              <Social />
            </div>
          </div>
          {/* Photo with Animation */}
          <div className="mt-8 xl:mt-0">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, borderColor: "#0174f2" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="rounded-full p-1 border-4 border-white transition-all duration-500 ease-in-out shadow-lg"
            >
              <Image
                src="/mb.JPG"
                alt="Mahmoud BarakaT"
                className="rounded-full object-cover"
                width="240"
                height="240"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
