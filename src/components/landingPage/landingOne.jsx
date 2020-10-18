import React from 'react'
import {LandingSlide} from './landingPageMain'
import BgOne from '../../Assets/bg10.jpg'
import "animate.css/animate.min.css"

const LandingOne = () => (
    <LandingSlide
    imageName={BgOne}
    className="center"
    marginBottom={"8vh"}
>
        <h2 className="animate__animated animate__fadeInUp animate__delay-1s">Dupa <span className="accent">Dupa</span></h2>
        <p className="animate__animated animate__fadeInUp animate__delay-2s">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, rem?</p>
        <button className="big animate__animated animate__fadeInUp animate__delay-3s">Więcej</button>
</LandingSlide>
)

export default LandingOne