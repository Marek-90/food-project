import React from 'react';
import OurMenuStyle from './ourMenuStyle';
import Container from '../../settings/container';
import Title from './Title/title';
import Carusel from './Carusel/carusel';

const OurMenu = () => {
    return (
        <OurMenuStyle>
            <Container>
                <Title/>
                <Carusel/>
            </Container>
        </OurMenuStyle>
    )
}

export default OurMenu;