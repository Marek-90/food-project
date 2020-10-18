import styled from 'styled-components';

const LogoStyle = styled.div`
    font-family: 'Cinzel Decorative', cursive;
    font-size: ${({isScroll}) => isScroll ? '40px' : '50px'};
    font-size: ${({isScroll}) => isScroll ? '2.156vw' : '2.695vw'};
    transition: 0.4s ease-in;
    cursor:  default;
`
export default LogoStyle