"use client";
import Link from "next/link";
import React, { useState } from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import { motion } from "framer-motion"; // Import Framer Motion
import MobileNav from "./MobileNav";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" passHref>
                    <motion.h1
                        className="text-4xl font-semibold"
                        initial={{ opacity: 0, y: -20 }} // Animation starts with the logo moving up slightly and transparent
                        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and y=0 position
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        MB12<span className="text-accent-default">.</span>
                    </motion.h1>
                </Link>

                {/* Navbar for Desktop */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                </div>

                {/* Mobile Navbar Toggle */}
                {/* <div className="xl:hidden">
                    <button onClick={toggleMobileMenu} className="focus:outline-none">
                        {isMobileMenuOpen ? "Close" : "Menu"}
                    </button>
                </div> */}
                {/* Mobile Navbar Toggle */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>

            </div>

            {/* Mobile Navbar */}
            {/* {isMobileMenuOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }} // Initial hidden state
                    animate={{ height: "auto", opacity: 1 }} // Expand and fade in
                    exit={{ height: 0, opacity: 0 }} // Collapse and fade out
                    transition={{ duration: 0.3 }} // Smooth transition
                    className="xl:hidden flex flex-col items-center bg-white text-black py-4"
                >
                    <Nav />
                </motion.div>
            )} */}
        </header>
    );
}

export default Header;
