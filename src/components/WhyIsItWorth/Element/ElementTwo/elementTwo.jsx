import React from 'react';
import TwoStyle from './twoStyle';
import ImgStyled from './imgStyle';
import icon2 from '../../../../Assets/vans.png';


const ElementTwo = () => {
    return (
        <TwoStyle>
            <ImgStyled src={icon2} alt="vans"/>
        </TwoStyle>
    )
}

export default ElementTwo;