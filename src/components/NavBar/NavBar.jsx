import React from 'react'
import './navBar.css'

const NavBar = ({ scrolling }) => {
    
    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior:"smooth"})
    }
    
    return (
        <nav className={`navbar ${scrolling > 100 ? "scrolled" : null} `}>
            <div className="navbar-logo">
               <span className={`${scrolling > 250 ? "navbar-span" : null}`} onClick={toTheTop}>J S</span> 
            </div>
        </nav>
    )
}

export default NavBar
