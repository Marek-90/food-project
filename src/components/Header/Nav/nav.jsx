import React from 'react';
import { Link } from 'react-scroll';
import NavStyle from './navStyle';

const Nav = () => {
    return (
        <>
        <NavStyle id="nav">
            <li>
                <Link 
                to="nav" 
                smooth={true} 
                duration={2000}>
                    ZAPLANUJ POSIŁKI
                </Link>
            </li>
            <li>
                <Link to="nav" 
                smooth={true} 
                duration={2000}>
                    DLACZEGO WARTO?
                </Link>
            </li>
            <li>
                <Link to="about" 
                smooth={true} 
                duration={2000}>
                    O MNIE
                </Link>
            </li>
            <li>
                <Link to="contact" 
                smooth={true} 
                duration={2000}>
                    KONTAKT
                </Link>
            </li>
        </NavStyle>
        </>
    )
}

export default Nav;