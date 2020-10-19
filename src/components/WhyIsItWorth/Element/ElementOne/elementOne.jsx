import React from 'react';
import OneStyle from './oneStyle';
import ImgStyle from './imgStyle';
import icon1 from '../../../../Assets/symbol-3296658_1280.png';
import ElementText from './elementText';

const ElementOne = () => {
    return (
        <OneStyle>
            <ImgStyle src={icon1} alt=""/>
            <ElementText/>
        </OneStyle>
    )
}

export default ElementOne;