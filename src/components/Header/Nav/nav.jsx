import React from 'react';
import { Link } from 'react-scroll';
import NavStyle from './navStyle';
import LiStyle from './liStyle'

const Nav = () => {
    return (
        <>
        <NavStyle id="nav">
            <LiStyle>
                <Link 
                to="nav" 
                smooth={true} 
                duration={2000}>
                    ZAPLANUJ POSIŁKI
                </Link>
            </LiStyle>
            <LiStyle>
                <Link to="nav" 
                smooth={true} 
                duration={2000}>
                    DLACZEGO WARTO?
                </Link>
            </LiStyle>
            <LiStyle>
                <Link to="about" 
                smooth={true} 
                duration={2000}>
                    O MNIE
                </Link>
            </LiStyle>
            <LiStyle>
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