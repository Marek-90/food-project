import React, { useState } from 'react';
import Logo from './Logo/logo';
import HeaderStyle from './headerStyle';
import Container from '../../settings/container';
import Position from './Position/position';
import Nav from '../Header/Nav/nav';

const Header = () => {
    
    const [isScroll, setIsScroll] = useState(false)

    const changeHeader = () => {
        if (window.scrollY >= 2) {
            setIsScroll(true)
        }else{
            setIsScroll(false)
        }
    }
    
    window.addEventListener('scroll', changeHeader)

    return (
        <HeaderStyle isScroll = {isScroll}>
            <Container>
                <Position>
                    <Logo isScroll = {isScroll}/>
                    <Nav isScroll = {isScroll}/>
                </Position>
            </Container>
        </HeaderStyle>
    )
}

export default Header;