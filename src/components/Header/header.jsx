import React from 'react';
import Logo from './Logo/logo';
import HeaderStyle from './headerStyle';
import Container from '../../settings/container';
import Position from './Position/position';
import Nav from '../Header/Nav/nav';

const Header = () => {
    return (
        <HeaderStyle>
            <Container>
                <Position>
                    <Logo/>
                    <Nav/>
                </Position>
            </Container>
        </HeaderStyle>
    )
}

export default Header;