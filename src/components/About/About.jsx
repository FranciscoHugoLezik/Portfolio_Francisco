import React from 'react'
import "./about.css"
import perfil from '../../media/perfi.jpg'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-text">
                <h3>Sobre Mi</h3>
                <p>Hasta principió de este año estudié Marketing durante 3 años. En paralelo con la universidad, durante este proceso y por culpa de una personalidad que busca emprender constantemente, Co-Funde y lideré un proyecto de movilidad compartida. Con esta experiencia descubrí los valores y la importancia del trabajo en equipo. Tiempo después gracias a SoyHenry, me vuelvo a encontrar con nuevas posibilidades, tanto personales, como grupales que te brinda un trabajo en equipo. Ahora me encuentro aprendiendo a programar y espero con ansias encontrar mi primer trabajo como desarrollador, para aplicar todo lo aprendido hasta el día de hoy, bajo una intención constante de superación.
                Mi mayor objetivo es desarrollar/trabajar en una startup que genere un cambio social positivo ♻
                </p>
            </div>
            <div className="about-img">
                <img src={perfil} alt="Imagen de perfil"/>
            </div>
        </div>
    )
}

export default About
