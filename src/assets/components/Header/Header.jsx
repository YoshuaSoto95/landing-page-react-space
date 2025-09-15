import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="logo">
                    <h2>Space <span>Tourism</span></h2>
                </div>
                <nav className="nav">
                    <a href="" className='nav__link'>About</a>
                    <a href="" className='nav__link'>Destinations</a>
                    <a href="" className='nav__link'>Blog</a>
                    <a href="" className='nav__link'>Contact</a>
                </nav>
                <div className="cta__btn">
                    <button className='btn'>Get Started</button>
                </div>
                <div className="toggle__btn">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </header>
    )
}

export default Header