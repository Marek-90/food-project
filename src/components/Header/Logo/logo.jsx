import React from 'react';
import LogoStyle from './logoStyle';
import LogoStyle2 from './logoStyle2';

const Logo = ({isScroll}) => {
    return (
        <LogoStyle isScroll={isScroll}>
            <h1>Logo<LogoStyle2>Strony</LogoStyle2></h1>
        </LogoStyle>
    )
}

export default Logo;