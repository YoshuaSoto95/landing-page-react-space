import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                {/* Título */}
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Welcome to Our Website to Travel Space.
                </motion.h1>

                {/* Subtítulo */}
                <motion.h2
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                    Your Gateway to the Cosmos starts here.
                </motion.h2>

                {/* Texto */}
                <motion.p
                    className="hero-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos quod labore optio dolor quam vitae veritatis qui consectetur eos cum iure deleniti pariatur quia repellat, facilis veniam laboriosam nihil nisi nam dolores incidunt. Blanditiis ipsam numquam harum voluptate culpa?
                </motion.p>

                {/* Botón */}
                <motion.button
                    className="hero-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                >
                    Get Started
                </motion.button>
            </div>
        </section>
    )
}

export default Hero
