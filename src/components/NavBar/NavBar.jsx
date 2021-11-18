import React from 'react'
import './navBar.css'

const NavBar = ({ scrolling }) => {
    return (
        <nav className={`navbar ${scrolling > 20 ? "scrolled" : null} `}>
            <div >
                go UP
            </div>
        </nav>
    )
}

export default NavBar
