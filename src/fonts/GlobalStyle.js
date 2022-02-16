import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./fonts.css"

const GlobalStyle = createGlobalStyle`
    ${reset};
    a{
    text-decoration : none;
    color : inherit;
    }
    button{
    border : none;
    cursor : pointer;
    }
    *, body {
    font-family: "SpoqaHanSans"
    }
`;

export default GlobalStyle;
