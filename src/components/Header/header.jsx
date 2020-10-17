import React from 'react';
import Logo from './Logo/logo';
import HeaderStyled from './headerStyle'
import Container from '../../settings/container';

const Header = () => {
    return (
        <HeaderStyled>
            <Container>
                <Logo/>
            </Container>
        </HeaderStyled>
    )
}

export default Header;