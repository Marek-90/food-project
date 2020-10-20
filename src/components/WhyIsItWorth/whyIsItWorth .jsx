import React from 'react';
import Container from '../../settings/container';
import WhyIsItWorthStyled from './whyIsItWorthStyle'
import Title from './Title/title';
import Element from './Element/element';


const WhyIsItWorth = () => {
    return (
        <WhyIsItWorthStyled id='why'>
            <Container>
                <Title/>
                <Element/>
            </Container>
        </WhyIsItWorthStyled>
        
        
    )
}

export default WhyIsItWorth ;