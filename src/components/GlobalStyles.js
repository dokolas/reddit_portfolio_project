import { createGlobalStyle } from "styled-components";

//DevByEd always adds these first two styles below
const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: red;
        }
    }
    body {
        font-family: 'Noto Sans', sans-serif;
        width: 100%;
    }
    h2{
        font-size: 3rem;
        font-family: 'Josefin Sans', cursive;
        font-weight: lighter;
        color: #333;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color:#333;
    }
    
    img{
        display: block;
    }
    
    input{
        font-family: 'Noto Sans', sans-serif;
        font-weight: bold;
    }
`;

export default GlobalStyles;
