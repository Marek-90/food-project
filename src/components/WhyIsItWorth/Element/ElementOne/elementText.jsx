import React from 'react';
import TextStyle from './textStyle';
import TitleStyle from './titleStyle';
import DescriptionStyle from './descriptionStyle';

const ElementText = () => {
    return (
        <TextStyle>
            <TitleStyle>Lorem Ipsum</TitleStyle>
            <DescriptionStyle>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </DescriptionStyle>
        </TextStyle>
    )
}

export default ElementText;