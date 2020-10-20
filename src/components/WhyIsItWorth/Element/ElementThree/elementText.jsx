import React from 'react';
import TextStyle from './textStyle';
import TitleStyle from './titleStyle';
import DescriptionStyle from './descriptionStyle';

const ElementText = () => {
    return (
        <TextStyle>
            <TitleStyle>Lorem Ipsum</TitleStyle>
            <DescriptionStyle>
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </DescriptionStyle>
        </TextStyle>
    )
}

export default ElementText;