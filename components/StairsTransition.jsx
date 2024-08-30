"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

function StairsTransition() {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"
            >
                <Stairs />
            </motion.div>
        </AnimatePresence>
    );
}

export default StairsTransition;
