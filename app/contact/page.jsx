"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify components
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import { Input } from "@/components/ui/input";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

    //     try {
    //         const response = await fetch('/api/contact', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         if (response.ok) {
    //             const result = await response.json();
    //             toast.success(result.message); // Success toast
    //             setFormData({ name: "", email: "", message: "" }); // Clear the form
    //         } else {
    //             const error = await response.json();
    //             toast.error(error.error || "There was an error sending the message."); // Error toast
    //         }
    //     } catch (error) {
    //         toast.error("There was an error sending the message."); // Error toast
    //     }
    // };
    }
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
                    <p className="text-gray-400 text-lg">
                        Feel free to reach out to me for any questions or collaboration opportunities.
                    </p>
                </div>
                <motion.div
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.05 }} // Scale up on hover
                    initial={{ opacity: 0, y: 50 }} // Start off-screen
                    animate={{ opacity: 1, y: 0 }} // Animate to visible and centered
                    transition={{ duration: 0.6 }} // Animation timing
                >
                    <form
                        className="w-full max-w-md p-6 rounded-lg shadow-md"
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md text-accent-default"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md text-accent-default"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md text-accent-default"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-accent-default text-white py-3 rounded-md hover:bg-accent-dark transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
            <ToastContainer /> {/* Toast Container for notifications */}
        </section>
    );
};

export default Contact;
