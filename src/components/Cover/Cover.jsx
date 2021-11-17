import React from 'react'
import whiteM from '../../media/white-note.mp4'
import './cover.css'

const Cover = () => {
    return (
        <>
           <div className="cover-container">
               <video className="video-cover" src={whiteM} autoPlay loop muted/>
               <h1>Juan Ignacio Solari</h1>
               <p>Full Stack Developer</p>
               </div> 
        </>
    )
}

export default Cover
