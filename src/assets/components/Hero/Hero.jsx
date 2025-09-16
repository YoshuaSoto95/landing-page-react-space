import React from 'react'
import { motion } from 'framer-motion'
import spaceVideo from '../../video/frame-space.mp4'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            {/* 🎥 Video con animación */}
            <motion.video
                className="hero-video"
                src={spaceVideo}
                autoPlay
                muted
                loop
                playsInline
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            />

            {/* 🌌 Overlay animado */}
            <motion.div
                className="hero-overlay"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* 📖 Contenido */}
            <div className="hero-content">
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Welcome to Our Website to Travel Space.
                </motion.h1>

                <motion.h2
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                    Your Gateway to the Cosmos starts here.
                </motion.h2>

                <motion.p
                    className="hero-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos quod labore optio dolor quam vitae veritatis.
                </motion.p>

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
