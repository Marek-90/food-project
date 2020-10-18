import React from 'react'
import {LandingSlide} from './landingPageMain'
import BgOne from '../../Assets/bg8.jpg'
import "animate.css/animate.min.css"

const LandingTwo = () => (
    <LandingSlide
        imageName={BgOne}
        className="right"
    >
            <h2 className="animate__animated animate__fadeInUp animate__delay-1s">Dupa <span className="accent">Dupa</span></h2>
            <p className="animate__animated animate__fadeInUp animate__delay-2s">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, rem?</p>
            <button className="small animate__animated animate__fadeInUp animate__delay-3s">Więcej</button>
    </LandingSlide>
)

export default LandingTwo