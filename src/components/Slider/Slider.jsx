import React, {useState} from 'react'
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineLink } from "react-icons/hi";
import data from './data'
import { MdArrowForwardIos } from "react-icons/md";

import './slider.css'

const Slider = ({scrolling}) => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const handleArrow = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
        setCurrentSlide(currentSlide === data.length -1 ? 0 : currentSlide + 1)
    }

    return (
        <div className="container-carousel" id="id">
            <h1 className={`h1-mine ${scrolling > 897 ? "h1-mine-scrolled" : null} `}>Mis Proyectos</h1>
            <div className="container-slider"
            style={{transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                { data.map(e => (
                    <div className="containerR">
                    <div className="item">
                        <div className="left">
                            <div className="lefTContainer">
                                <h2>{e.tittle}</h2>
                                <p>{e.desc}</p>
                                <div className="btns-container">
                                <a href={e.deployLink} target="_blank"><HiOutlineLink className="link-icon" /></a>
                                <a href={e.gitLink} target="_blank"><AiFillGithub className="github-icons" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="rigth">
                            <img src={e.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <span className="arrow-left" onClick={() => handleArrow("left")}><MdArrowForwardIos/></span>
            <span className="arrow-rigth" onClick={() => handleArrow("rigth")}><MdArrowForwardIos/></span>
        </div>
    )
}

export default Slider
