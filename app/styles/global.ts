import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
  * {   
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 
  @import url('https://fonts.googleapis.com/css2?family=Marvel:ital,wght@0,400;0,700;1,400;1,700&family=Mozilla+Headline:wght@200..700&family=Roboto:wght@100..900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3 {
    font-weight: 700;
  }
`

