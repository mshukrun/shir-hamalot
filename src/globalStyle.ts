import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
      box-sizing: border-box;
      padding: 0;
      margin:0;
  }
  html {
      height:100%;
      body {
        height:100%;
        margin: 0;
        padding: 0;
        background: white;
        font-family: "David Libre", serif;
        font-weight: 600;
        font-size: 30px;
        line-height: 32px;
        color: black;
        #root {
            height:100%;
        }
      }
  }
`;
 
export default GlobalStyle;