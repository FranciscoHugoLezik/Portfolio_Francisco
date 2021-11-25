import React from 'react'
import './text.css'


const Text = ({scrolling}) => {

    console.log('scrollll', scrolling)

    return (
        <div className="info-container">
            <div className="text">
                <h1>Trabajemos en equipo y hagamos algo único. </h1>
                <h1 className={`contact-me ${scrolling > 1600 ? 'contact-scroll' : null}`}>Contactame :)</h1>
            </div>
        </div>
    )
}

export default Text
