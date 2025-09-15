import { useState } from 'react'
import './Header.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className='header'>
            <div className="container">
                <div className="logo">
                    <h2>Space <span>Tourism</span></h2>
                </div>

                {/* nav normal */}
                <nav className={`nav ${isOpen ? 'active' : ''}`}>
                    <a href="#about" className='nav__link'>About</a>
                    <a href="#destinations" className='nav__link'>Destinations</a>
                    <a href="#blog" className='nav__link'>Blog</a>
                    <a href="#contact" className='nav__link'>Contact</a>
                    <button className='btn-nav'>Get Started</button>
                </nav>

                <div className="cta__btn">
                    <button className='btn'>Get Started</button>
                </div>

                {/* botón hamburguesa */}
                <div className={`toggle__btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </header>
    )
}

export default Header
