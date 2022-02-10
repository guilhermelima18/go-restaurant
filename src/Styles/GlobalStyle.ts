import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --header-background: #C72828;
    --button-background: #39B100;
    --button-background-hover: #0A910A;
    --card-background: #F0F0F5;
    --card-footer-background: #E4E4EB;
    --title-color: #3D3D4D;
  }

  h1, h2 {
    font-family: 'Poppins', sans-serif;
  }

  h3, h4, p, span {
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: #333;
    font-family: 'Roboto', sans-serif;
  }
`;
