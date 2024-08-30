"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';  // Import Framer Motion

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

function Nav() {
    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            {links.map((link, index) => (
                <Link href={link.path} key={index} passHref>
                    <motion.span
                        // Animation on hover
                        whileHover={{ scale: 1.1, color: "#00ff99" }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`
                            capitalize font-medium transition-all
                            ${link.path === pathname && "border-b-2 border-accent-default"}
                        `}
                    >
                        {link.name}
                    </motion.span>
                </Link>
            ))}
        </nav>
    );
}

export default Nav;
