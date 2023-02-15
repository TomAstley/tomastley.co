import { createGlobalStyle } from "styled-components";
import { Commissioner } from "@next/font/google";

const commissioner = Commissioner({ subsets: ["latin"] });
const GlobalStyle = createGlobalStyle`

  :root {
    --black: #000;
    --darkGrey: #333;
    --lightGrey: #f3f3f3;
    --red: #b51f16;
    --blue: #325bab;
  }
  html, body {
    font-size: 16px;
    width: 100%;
    height: 100%;
    margin: 0;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  }
  main {
    padding: 15px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  }
  h1, h2, h3, h4, p, strong, li {
    ${commissioner.style}
    color: var(--darkGrey);
    margin-bottom: 0px;
    font-size: 0.95rem;
  }

 h1 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 2rem;
  }
  
  h2 {
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--red);
    font-size: 1.2rem;
  }

  h3 {
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 1rem;
  }
  p {
    line-height: 1.35rem;
  }
  ul {
    padding: 0;
    margin: 3px 0;
    list-style: none;
  }
  section {
    margin: 15px 0;
  }

`;

export default GlobalStyle;
