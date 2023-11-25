import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    img{
        display: block;
    }
    svg{
        display: block;
    }
    body{
        min-height: 100vh;
        font-family: 'Manrope';
       

        &::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
    }
`;

export default GlobalStyles;
