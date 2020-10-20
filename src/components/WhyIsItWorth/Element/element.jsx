import React from 'react';
import ElementStyle from './elementStyle';
import ElementOne from './ElementOne/elementOne';
import ElementTwo from './ElementTwo/elementTwo';
import ElementThree from './ElementThree/elementThree';

const Element = () => {
    return (
        <ElementStyle>
            <ElementOne/>
            <ElementTwo/>
            <ElementThree/>
        </ElementStyle>
    )
}

export default Element;