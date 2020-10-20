import React from 'react';
import ThreeStyle from './threeStyle'
import ImgStyle from './imgStyle';
import icon3 from '../../../../Assets/zupa.png';

const ElementThree = () => {
    return (
        <ThreeStyle>
            <ImgStyle src={icon3} alt=""/>
        </ThreeStyle>
    )
}

export default ElementThree;