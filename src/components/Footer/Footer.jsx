import React from 'react'
import './footer.css'
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <div className="info">
                    <h1>Juan Ignacio Solari</h1>
                    <p>Actualmente en Córdoba Capital 📍</p>
                </div>
                <div className="footer-contact">
                    <h3>Listo para trabajar!</h3>
                    <p>Estoy 100% a disposición para entrevistas y trabajos remotamente🚀.</p>
                </div>
                <div className="footer-sns">
                    <div className="design-by">Diseño por J. Solari</div>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/juanignaciosolari/" target="_blank"><TiSocialLinkedin className="linkedin-icon" /></a>
                        <a href="https://www.github.com/JJSolari" target="_blank"><AiFillGithub className="github-i" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
