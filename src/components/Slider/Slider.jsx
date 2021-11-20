import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineLink } from "react-icons/hi";

import './slider.css'

const Slider = () => {
    return (
        <div className="container-carousel">
            <div className="container-slaider">
                <div className="containerR">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <h2>Tittle</h2>
                                <p>Lorem ipsum jjjjjdolor, sit amet consectetur adipisicing elit. Numquam asperiores sed exercitationem esse atque doloremque tenetur ut dolor vitae, voluptates impedit quisquam nulla expedita hola su</p>
                                <div className="btns-container">
                                <a href="https://www.linkedin.com/" target="_blank"><HiOutlineLink size={30} className="linkedin-icon" /></a>
                                <a href="https://www.github.com/" target="_blank"><AiFillGithub size={30} className="github-icons" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="rigth"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
