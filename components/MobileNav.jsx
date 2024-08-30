"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

function MobileNav() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false); // State to manage sheet visibility

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex justify-center items-center" onClick={() => setIsOpen(true)}>
                <CiMenuFries className="text-[32px] text-accent-default" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            MB12<span className="text-accent-default">.</span>
                        </h1>
                    </Link>
                </div>

                {/* Add your links or other content here */}
                <nav className="flex flex-col items-start gap-4 ml-10">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            onClick={handleClose}  // Close the sheet when a link is clicked
                            className={`text-lg font-medium capitalize  ${pathname === link.path
                                ? 'text-accent-default'
                                : 'text-white hover:text-accent-hover'
                                } transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;
