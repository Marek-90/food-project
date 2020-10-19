import React from 'react'
import styled from 'styled-components'
import LandingOne from './landingOne'
import LandingThree from './landingThree'
import LandingTwo from './landingTwo'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


export const LandingSlide = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => `url(${props.imageName})`};
    background-position: center;
    background-size: cover;
    font-family: "Montserrat, sans-serif";
    font-size: 18px;
    color: #000000;
    font-weight: 300;
    padding: 0 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &.center{
        align-items: center;
    }
    &.right{
        align-items: flex-end;
    }
    .accent{
        color: #60ba62;
    }
    h2{
        margin-bottom: 2vh;
        font-size: 3.125em;       
        letter-spacing: 0.05em;
    }
    p{
        margin-bottom: 4vh;
        color: #575757;
        font-size: 1.0625em;
        line-height: 1.875em;
    }
    button{
        outline: none;
        border: none;
        cursor: pointer;
        font-weight: 400;
        display: inline-block;
        background: #60ba62;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2em;
        font-weight: 300;
        letter-spacing: 0.05em;
        transition: .3s ease-in;
        border-radius: 4px;
        margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0};
        &:hover{
            background: #D5CD72;
        }
        &.big{
            min-width: 280px;
            max-width: 350px;
            height: 53px;
        }
        &.small{
            width: 200px;
            height: 53px;
        }
    }
`
const LandingCarousel = styled(AwesomeSlider)`
    height: 100vh;
    div{
        width: 100%;
        height: 100%;
    }
`

const LandingPageMain = () => {
    

    return (
        <div style={{background: "lightgray"}}>
        <LandingCarousel
            bullets={false} 
            animation="cubeAnimation"    
        >
                <div>
                    <LandingOne />
                </div>
                <div>
                    <LandingTwo />
                </div>
                <div><LandingThree /></div>            
        </LandingCarousel>
        </div>
    )
}

export default LandingPageMain