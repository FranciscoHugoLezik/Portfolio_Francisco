import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineLink } from "react-icons/hi";
import pF from '../../media/proyectos/WaveMusicCut.png'
import './slider.css'

const Slider = () => {
    return (
        <div className="container-carousel">
            <div className="container-slaider">
                <div className="containerR">
                    <div className="item">
                        <div className="left">
                            <div className="lefTContainer">
                                <h2>Tittle</h2>
                                <p>Lorem ipsum jjjjjdolor, sit amet consectetur adipisicing elit. Numquam asperiores sed exercitationem esse atque doloremque tenetur ut dolor vitae, </p>
                                <div className="btns-container">
                                <a href="https://www.linkedin.com/" target="_blank"><HiOutlineLink className="link-icon" /></a>
                                <a href="https://www.github.com/" target="_blank"><AiFillGithub className="github-icons" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="rigth">
                            <img src={pF} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
    )
}

export default Slider
