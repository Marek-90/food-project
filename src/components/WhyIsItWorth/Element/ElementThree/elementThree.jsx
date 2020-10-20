import React from 'react';
import ThreeStyle from './threeStyle'
import ImgStyle from './imgStyle';
import icon3 from '../../../../Assets/zupa.png';
import ElementText from './elementText';

const ElementThree = () => {
    return (
        <ThreeStyle>
            <ImgStyle src={icon3} alt="zupa"/>
            <ElementText/>
        </ThreeStyle>
    )
}

export default ElementThree;