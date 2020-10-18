import styled from 'styled-components';

const LiStyle = styled.li`
    margin-left: 1.5vw;
    font-family: "Montserrat";
    font-size: ${({isScroll}) => isScroll ? '12px' : '16px'};
    font-size: ${({isScroll}) => isScroll ? '0.625vw' : '1vw'};
    transition: 0.4s ease-in;
    cursor: pointer;
    
`

export default LiStyle;