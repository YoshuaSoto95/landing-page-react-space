import { motion } from 'framer-motion'
import './Destinations.css'

const Destinations = () => {
    return (
        <section className='destinations'>
            <div className="destinations__content">
                <div className="title__destinations">
                    <h2 className="destinations__title">Popular Destinations</h2>
                </div>
                <div className="cards">
                    <motion.div
                        className="card__destination"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h3 className="card__title">The Moon</h3>
                        <p className="card__text">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                        <span className="card__distance">Avg. Distance: 384,400 km</span>
                        <span className="card__time">Est. Travel Time: 3 days</span>
                        <button className='card__btn'>Select Destine</button>
                    </motion.div>
                    <motion.div
                        className="card__destination"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        <h3 className="card__title">Mars</h3>
                        <p className="card__text">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                        <span className="card__distance">Avg. Distance: 225 mil. km</span>
                        <span className="card__time">Est. Travel Time: 9 months</span>
                        <button className='card__btn'>Select Destine</button>
                    </motion.div>
                    <motion.div
                        className="card__destination"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    >
                        <h3 className="card__title">Europa</h3>
                        <p className="card__text">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                        <span className="card__distance">Avg. Distance: 628 mil. km</span>
                        <span className="card__time">Est. Travel Time: 3 years</span>
                        <button className='card__btn'>Select Destine</button>
                    </motion.div>
                    <motion.div
                        className="card__destination"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    >
                        <h3 className="card__title">Titan</h3>
                        <p className="card__text">The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                        <span className="card__distance">Avg. Distance: 1.6 bil. km</span>
                        <span className="card__time">Est. Travel Time: 7 years</span>
                        <button className='card__btn'>Select Destine</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Destinations