import React from 'react';
import { Link } from 'react-scroll';
import NavStyle from './navStyle';
import LiStyle from './liStyle'

const Nav = ({isScroll}) => {
    return (
        <>
        <NavStyle id="nav">
            <LiStyle isScroll={isScroll}>
                <Link 
                to="nav" 
                smooth={true} 
                duration={2000}>
                    ZAPLANUJ POSIŁKI
                </Link>
            </LiStyle>
            <LiStyle isScroll={isScroll}>
                <Link to="why" 
                smooth={true} 
                duration={2000}>
                    DLACZEGO WARTO?
                </Link>
            </LiStyle>
            <LiStyle isScroll={isScroll}>
                <Link to="about" 
                smooth={true} 
                duration={2000}>
                    O NAS
                </Link>
            </LiStyle>
            <LiStyle isScroll={isScroll}>
                <Link to="contact" 
                smooth={true} 
                duration={2000}>
                    KONTAKT
                </Link>
            </LiStyle>
        </NavStyle>
        </>
    )
}

export default Nav;