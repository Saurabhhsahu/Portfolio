// src/ContactPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API)

        const serviceID = import.meta.env.VITE_SERVICEID;
        const templateID = import.meta.env.VITE_TEMPLATEID;
        const publicKey = import.meta.env.VITE_PUBLICKEY;
        console.log("email :",email );
        
        emailjs
            .send(
                serviceID,
                templateID,
                {
                    email: email, // User's email
                    message: message, // User's message
                },
                publicKey
            )
            .then(
                (response) => {
                    console.log("Email sent successfully!", response);
                    alert("Message sent successfully!");
                    setEmail("");
                    setMessage("");
                },
                (error) => {
                    console.error("Failed to send email:", error.message);
                    alert("Failed to send message. Please try again.");
                }
            );
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Stagger animations for children
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            backgroundColor: "#ff8c7c", // Lighter shade on hover
            transition: { duration: 0.3 },
        },
        tap: { scale: 0.95 },
    };

    return (
        <div className="py-40 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: "#121f28" }}>
            {/* Animated Background Gradient */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(45deg, #121f28, #1a2a36, #121f28)`,
                    zIndex: -1,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
            />

            {/* Form Container */}
            <motion.div
                className="relative bg-[#1a2a36] rounded-2xl shadow-2xl overflow-hidden p-8 w-full max-w-md"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -10, transition: { duration: 0.5 } }} // Float up on hover
            >
                {/* Glow Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#ff715b] to-[#ff8c7c] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.2 }}
                />

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    {/* Heading */}
                    <motion.h1
                        className="text-4xl font-bold text-center text-white mb-6"
                        variants={itemVariants}
                    >
                        Get in Touch
                    </motion.h1>

                    {/* Email Input */}
                    <motion.div className="relative" variants={itemVariants}>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 bg-transparent outline-none transition-all duration-300 placeholder-gray-400 text-white border-b-2 border-gray-600 focus:border-[#ff715b]"
                            placeholder="Your Email"
                        />
                    </motion.div>

                    {/* Message Textarea */}
                    <motion.div className="relative" variants={itemVariants}>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="w-full px-4 py-3 bg-transparent outline-none transition-all duration-300 placeholder-gray-400 text-white border-b-2 border-gray-600 focus:border-[#ff715b] resize-none"
                            rows="4"
                            placeholder="Your Message"
                        />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        className="w-full px-6 cursor-pointer py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff715b] focus:ring-offset-2 transition-all duration-300"
                        style={{ backgroundColor: "#ff715b", color: "#fff" }}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;