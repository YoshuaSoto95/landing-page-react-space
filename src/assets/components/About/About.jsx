import AboutImg from '../../images/about-section.png'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
    return (
        <section className='about'>
            <div className="about__content">
                <motion.div
                    className="left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="about__title">Website to Travel Space.</h2>
                    <p className="about__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur eaque voluptatibus aperiam.
                        Sed id iste deserunt ducimus quas natus ullam similique! Laudantium tempore quam fuga laborum totam odio perspiciatis?
                    </p>
                </motion.div>

                <motion.div
                    className="right"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                    <img src={AboutImg} className="about__img" alt="about__img" />
                </motion.div>
            </div>
        </section>
    )
}

export default About
