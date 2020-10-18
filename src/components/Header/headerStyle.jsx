import styled from 'styled-components';

const HeaderStyle = styled.header`
         width:100%;
         height: 15vh;
         background-color: ${({isScroll}) => isScroll ? 'white' : 'transparent'} ;
         display: flex;
         justify-content: center;
         align-items: center;
         position:fixed;
         box-shadow: ${({isScroll}) => isScroll ? '0 1px 3px rgba(0, 0, 0, 0.5)' : 'none'};
         transition: 0.1s ease-in;
`

 export default HeaderStyle;