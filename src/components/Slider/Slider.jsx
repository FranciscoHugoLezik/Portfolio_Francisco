import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineLink } from "react-icons/hi";
import data from './data'
import { MdArrowForwardIos } from "react-icons/md";

import './slider.css'

const Slider = () => {
    return (
        <div className="container-carousel" id="id">
            <div className="container-slaider">
                { data.map(e => (
                    <div className="containerR">
                    <div className="item">
                        <div className="left">
                            <div className="lefTContainer">
                                <h2>{e.tittle}</h2>
                                <p>{e.desc}</p>
                                <div className="btns-container">
                                <a href="https://www.linkedin.com/" target="_blank"><HiOutlineLink className="link-icon" /></a>
                                <a href="https://www.github.com/" target="_blank"><AiFillGithub className="github-icons" /></a>
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
            <span className="arrow-left"><MdArrowForwardIos/></span>
            <span className="arrow-rigth"><MdArrowForwardIos/></span>
        </div>
    )
}

export default Slider
