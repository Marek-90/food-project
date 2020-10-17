import React from 'react';
import Logo from './Logo/logo';
import LogoStyle from './Logo/logoStyle';
import Container from '../../settings/container';

const Header = () => {
    return (
        <LogoStyle>
            <Container>
            <Logo/>
          </Container>
        </LogoStyle>
    )
}

export default Header;