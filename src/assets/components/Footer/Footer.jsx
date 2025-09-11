import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container__footer">
                {/* Parte superior */}
                <div className="footer__high">
                    <h2 className="footer__title">Stay Connected</h2>
                    <p className="footer__description">
                        Follow us on social media and subscribe to our newsletter for the latest updates.
                    </p>

                    <div className="footer__socials">
                        <a href="https://facebook.com" className="footer__social-link" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" className="footer__social-link" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" className="footer__social-link" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" className="footer__social-link" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Parte inferior */}
                <div className="footer__low">
                    <p className="footer__text">© 2025 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
